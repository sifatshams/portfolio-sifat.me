"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="dark"
        toastStyle={{
          background: "#0a0a0a",
          color: "#ffffff",
          border: "1px solid rgba(100, 108, 255, 0.35)",
          borderRadius: "12px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
        }}
      />
    </QueryClientProvider>
  );
}
