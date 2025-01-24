import clientPromise from "@/lib/mongodb";
import { getKindeAuth } from "@kinde-oss/kinde-auth-nextjs";

export default async function handler(req, res) {
  try {
    const { isAuthenticated, user } = await getKindeAuth();

    if (!isAuthenticated) {
      return res.redirect("/api/auth/login?");
    }

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    // check if user exists
    const existingUser = await db.collection("users").findOne({ sub: user.id });

    if (!existingUser) {
      await db.collection("users").insertOne({
        sub: user.id,
        email: user.email,
        firstName: user.first_name,
        lastName: user.last_name,
      });
    }
    res.redirect("/profile");
  } catch (error) {
    console.log("Error during authentication callback", error);
    res.status(500).json({ error: "internal server error" });
  }
}
