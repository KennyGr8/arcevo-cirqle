// apps/web/src/app/ClientLayout.tsx
"use client";

import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";
import Loader from "@/animations/Loader"; // ✅ restore this

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 3800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <main>
          {children}
        </main>
      )}
    </ThemeProvider>
  );
}
