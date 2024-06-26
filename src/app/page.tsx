import SignInButton from "@/components/SignInButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();
  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="hidden md:flex justify-between max-w-screen-lg w-full mx-auto p-0">
        <div className="max-w-md">
          <div
            style={{
              fontSize: "27px",
              marginBottom: "20px",
              padding: "15% 0 0 0",
            }}
          >
            Welcome to Ai Quiz Generator 🔥!
          </div>
          <div style={{ fontSize: "18px", marginBottom: "20px" }}>
            Ai Quiz Generator is a platform for creating quizzes using AI!.
          </div>
          <div style={{ fontSize: "20px", marginBottom: "20px" }}>
            Get started!
          </div>
          <SignInButton text="Sign In" />
        </div>
        <img
          className="h-96 w-96 object-cover object-center"
          src="/loginpage.png"
          alt="Google Login"
        />
      </div>

      <div className="md:hidden flex flex-col justify-between max-w-screen-lg w-full mx-auto p-8">
        <img
          className="h-96 w-96 object-cover object-center mb-8 self-center"
          src="/loginpage.png"
          alt="Google Login"
        />
        <div className="max-w-md self-center text-center">
          <div style={{ fontSize: "26px", marginBottom: "20px" }}>
            Welcome to Ai Quiz Generator 🔥!
          </div>
          <div style={{ fontSize: "17px", marginBottom: "20px" }}>
            Ai Quiz Generator is a platform for creating quizzes using AI!.
          </div>
          <div style={{ fontSize: "17px", marginBottom: "20px" }}>
            Get started!
          </div>
          <SignInButton text="Sign In" />
        </div>
      </div>
    </div>
  );
}
