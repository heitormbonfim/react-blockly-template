import { useState } from "react";
import { BlocklyContext } from "./context.ts";

export default function BlocklyProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState<boolean>(true);
  const [code, setCode] = useState<string>("");
  const [xml, setXml] = useState<string>("");

  return (
    <BlocklyContext.Provider
      value={{
        loading,
        setLoading,
        code,
        setCode,
        xml,
        setXml,
      }}
    >
      {children}
    </BlocklyContext.Provider>
  );
}
