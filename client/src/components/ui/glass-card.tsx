import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export function GlassCard({ children, className, hover = true, delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { scale: 1.02, transition: { duration: 0.2 } } : undefined}
      className={cn(
        "relative rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 p-6 transition-all duration-300",
        hover && "hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
