"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

const Authenticate = () => {
  const { isAuthenticated, isLoading } = useKindeBrowserClient();
  // console.log(isAuthenticated);
  if (isLoading) return <div>Loading..</div>;
  return (
    <div className="flex items-center gap-2">
      {isAuthenticated ? (
        <>
          <LogoutLink className="btn btn-sm">Log out</LogoutLink>
        </>
      ) : (
        <>
          <LoginLink className="btn btn-sm">Log in</LoginLink>
          <RegisterLink className="btn btn-sm">Sign up</RegisterLink>
        </>
      )}
    </div>
  );
};

export default Authenticate;
