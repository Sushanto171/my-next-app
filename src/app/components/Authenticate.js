"use client";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

const Authenticate = ({ isAuthenticated }) => {
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
