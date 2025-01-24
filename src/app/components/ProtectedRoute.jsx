"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useKindeBrowserClient();
  const router = useRouter();
  useEffect(() => {
    if (!isAuthenticated) return router("/api/auth/login");
  }, [isAuthenticated]);
  if (isLoading) return <div>Loading..</div>;
  return <>{children}</>;
};

export default ProtectedRoute;
