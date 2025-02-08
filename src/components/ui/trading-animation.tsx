import { Activity, ChartSpline } from "lucide-react";
import { motion } from "motion/react";
import { useContext } from "react";
import { StoreContext } from "../../contexts/context";

export default function TradingAnimation() {
  const store = useContext(StoreContext);

  return (
    <div className="rounded-xl bg-muted p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-3 text-lg font-bold">
          <Activity className="!h-4 !w-4 text-primary" />{" "}
          {store.lang.marketAnalisys}
        </div>

        <div>
          <ChartSpline className="text-primary" />
        </div>
      </div>
      <div className="mt-5 flex animate-bounce">
        {Array.from({ length: 12 }).map((_, c) => (
          <motion.div
            key={c}
            style={{
              height: `${Math.random() * 24 + 12}px`,
              background: "bg-foreground",
              width: 30,
              borderRadius: "0.125rem",
              flex: "1 1 0%",
            }}
            animate={{
              height: `${Math.random() * 24 + 12}px`,
              backgroundColor: c % 2 ? "#34d399" : "#ef4444",
              shadow: "10px",
            }}
            transition={{
              duration: 0.3,
              repeat: 1 / 0,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
