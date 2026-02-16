import { Link } from "wouter";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="mb-8">
          <span className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
            404
          </span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/">
            <Button size="lg" className="gap-2" data-testid="button-go-home">
              <Home className="w-4 h-4" />
              Go Home
            </Button>
          </Link>
          <Button
            variant="outline"
            size="lg"
            className="gap-2"
            onClick={() => window.history.back()}
            data-testid="button-go-back"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
