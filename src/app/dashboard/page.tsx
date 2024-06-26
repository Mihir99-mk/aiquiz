"user client";
import Footer from "@/components/Footer";
import { getAuthSession } from "@/lib/nextauth";
import Link from "next/link";
import { redirect } from "next/navigation";

type Props = {};

export const metadata = {
  title: "Dashboard | Ai Quiz Generator",
  description: "Quiz yourself on anything!",
};

const Dasboard = async (props: Props) => {
  const session = await getAuthSession();
  if (!session?.user) {
    redirect("/");
  }

  return (
    <div>
      <div className="flex items-center justify-center py-20 ">
        <div className="hidden md:flex justify-between max-w-screen-lg w-full mx-auto p-10">
          <div className="max-w-md">
            <div
              style={{
                fontSize: "40px",
                fontWeight: "bold",
                marginBottom: "20px",
                padding: "10% 0 0 0",
              }}
            >
              Ready to test your knowledge? Start the quiz!
            </div>
            <div style={{ fontSize: "25px", marginBottom: "20px" }}>
              Start the AI quiz now!
            </div>

            <Link href="/quiz">
              <p
                className="rounded-lg   px-3 py-1 text-lg font-bold transition-all hover:-translate-y-[2px] md:flex md:items-center dark:border-white bg-gradient-to-r from-green-400 to-cyan-500 text-white hover:from-green-500 hover:to-cyan-600"
                style={{
                  fontSize: "20px",
                  marginBottom: "20px",
                  width: "160px",
                  height: "40px",
                  backgroundColor: "#4ced92",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Create Quiz
              </p>
            </Link>
          </div>
          <img
            className="h-96 w-96 object-fill object-center"
            src="/homepage.png"
            alt="Create Quiz"
          />
        </div>

        <div className="md:hidden flex flex-col justify-between max-w-screen-lg w-full mx-auto p-8">
          <img
            className="h-96 w-96 object-cover object-center mb-8 self-center"
            src="/homepage.png"
            alt="Create Quiz"
          />
          <div className="max-w-md self-center text-center">
            <div
              style={{
                fontSize: "23px",
                marginBottom: "20px",
                fontWeight: "bold",
              }}
            >
              Ready to test your knowledge? Start the quiz now!
            </div>
            <div style={{ fontSize: "15px", marginBottom: "20px" }}>
              Create the AI quiz now!
            </div>

            <Link href="/quiz">
              <p
                className="rounded-lg   px-2 py-1 text-lg font-bold transition-all hover:-translate-y-[2px] md:flex md:items-center dark:border-white bg-gradient-to-r from-green-400 to-cyan-500 text-white hover:from-green-500 hover:to-cyan-600"
                style={{
                  fontSize: "17px",
                  marginBottom: "20px",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Create Quiz
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col  ">
        <div className="hidden  sm:block sm:hidden md:flex items-center  items-center">
          <img
            className="h-30 w-60 object-cover object-center"
            src="/liness.png"
            alt="lines"
          />
        </div>
        <div className="text-center">
          <span className="max-w-screen-lg text-zinc-800 dark:text-white text-[23px] font-normal font-Averta-Semibold lg:text-[40px] md:text-[30px] sm:text-[30px]">
            Ai Quiz comes with
            <br />
            amazing
          </span>
          <span className="p-2 max-w-screen-lg text-emerald-400 dark:text-emerald-400 text-[23px] font-normal font-AvertaStd-Bold lg:text-[40px] md:text-[30px] sm:text-[30px]">
            features
          </span>
          <span className="max-w-screen-lg text-zinc-800 dark:text-white text-[23px] font-normal font-Averta-Semibold lg:text-[40px] md:text-[30px] sm:text-[30px]">
            like:
          </span>
        </div>

        <div className="w-screen sm:h-130 py-20 px-20 sm:p-10 from-neutral-50 to-white flex flex-col sm:flex-row justify-between items-start">
          <div className="flex flex-col items-start mb-5 sm:mb-0 p-5 flex-1">
            <div className="w-20 h-20 bg-pink-100 flex justify-center items-center rounded-full shadow mb-2">
              <img
                className="h-14 object-cover object-center"
                src="/brainpng.png"
                alt="Brain Logo"
              />
            </div>
            <div className="text-zinc-800 text-[23px] font-semibold dark:text-white py-2">
              Enter subjects
            </div>
            <div className="text-zinc-500 text-lg font-normal">
              Enter your favourite subject from the vast selection of subjects
              and continue your Quiz.
            </div>
          </div>
          <div className="flex flex-col items-start mb-5 sm:mb-0 p-5 flex-1">
            <div className="w-20 h-20 bg-sky-100 flex justify-center items-center rounded-full shadow mb-2">
              <img
                className="h-8 w-10 object-cover object-center"
                src="/choices.png"
                alt="Choice"
              />
            </div>

            <div className="text-zinc-800 text-[23px] font-semibold dark:text-white py-2">
              Options Types
            </div>
            <div className="text-zinc-500 text-lg font-normal">
              Customize your quiz with multiple-choice questions or open-ended
              questions for a comprehensive assessment.
            </div>
          </div>
          <div className="flex flex-col items-start mb-5 sm:mb-0 p-5 flex-1">
            <div className="w-20 h-20 bg-emerald-50 rounded-full shadow mb-2 flex items-center justify-center">
              <img
                className="h-11 w-11 object-cover "
                src="/clockes.png"
                alt="Quiz Scoreboard"
              />
            </div>
            <div className="text-zinc-800 text-[23px] font-semibold dark:text-white py-2">
              Quiz History
            </div>
            <div className="text-zinc-500 text-lg font-normal">
              Explore your quiz journey by viewing the quiz names,quiz attempt
              dates, and quiz types with quiz History.
            </div>
          </div>
        </div>
        <div className="hidden  sm:block sm:hidden md:flex items-end  justify-end">
          <img
            className="h-30 w-30 object-cover object-center"
            src="/linesTwo.png"
            alt="lines"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dasboard;
