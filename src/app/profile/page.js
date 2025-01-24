import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

const Profile = async () => {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) {
    return redirect(`/api/auth/login?`);
  }
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-134px)]">
      <div className="container mx-auto text-center py-8 border max-w-xl bg-teal-50 rounded-lg shadow-lg">
        <div className="flex items-center justify-center mb-6">
          {user.picture && (
            <Image
              src={user.picture}
              alt={user.given_name}
              width={64}
              height={64}
              className="w-16 h-16 rounded-full border-2 border-teal-800"
            />
          )}
        </div>
        <h1 className="text-2xl font-bold">Welcome to your profile!</h1>
        <p className="mt-4">Hello, {user?.given_name || "User"}!</p>
        <p className="text-gray-600">Email: {user?.email || "Not Available"}</p>
      </div>
    </div>
  );
};

export default Profile;
