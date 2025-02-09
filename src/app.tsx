import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";

import Store from "@/contexts/store.tsx";
import { Toaster } from "./components/ui/toaster";
import LoadingSpinner from "./components/loading";
import BlocklyDashboard from "./views/blockly-dashboard";
import BlocklyProvider from "./contexts/blockly";
const Home = lazy(() => import("@/views/home.tsx"));
const NotFound = lazy(() => import("@/views/404.tsx"));

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Store>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route
              path="/blockly"
              element={
                <BlocklyProvider>
                  <BlocklyDashboard />
                </BlocklyProvider>
              }
            />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Store>
      <Toaster />
    </ThemeProvider>
  );
}
