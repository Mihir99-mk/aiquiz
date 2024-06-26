// import HistoryComponent from "@/components/HistoryComponent";
// import { getAuthSession } from "@/lib/nextauth";
// import { redirect } from "next/navigation";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import React from "react";
// import Link from "next/link";
// import { LucideLayoutDashboard } from "lucide-react";

// type Props = {};

// const History = async (props: Props) => {
//   const session = await getAuthSession();
//   if (!session?.user) {
//     return redirect("/");
//   }

//   return (
//     <div className="flex justify-center  border-none items-center h-screen">
//       <div className="w-full max-w-screen-lg px-15">
//         <Card className="shadow-md h-96">
//           <CardHeader>
//             <div className="flex items-center justify-between">
//               <CardTitle className="text-2xl font-bold">History</CardTitle>
//               <Link
//                 className="rounded-lg  px-4 py-2 text-[16px] font-bold transition-all hover:-translate-y-[2px] md:flex md:items-center dark:border-white bg-gradient-to-r from-green-400 to-cyan-500 text-white hover:from-green-500 hover:to-cyan-600"
//                 href="/dashboard"
//               >
//                 <LucideLayoutDashboard className="mr-2" />
//                 Back to Home
//               </Link>
//             </div>
//             <div> You have played a total of 0 quizzes.</div>
//           </CardHeader>
//           <CardContent className="max-h-[60vh] overflow-auto">
//             <HistoryComponent limit={100} userId={session.user.id} />
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default History;

import HistoryComponent from "@/components/HistoryComponent";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import Link from "next/link";
import { LucideLayoutDashboard } from "lucide-react";

type Props = {};

const History = async (props: Props) => {
  const session = await getAuthSession();
  if (!session?.user) {
    return redirect("/");
  }

  return (
    <div className="flex justify-center  border-none items-center h-screen">
      <div className="w-full max-w-screen-lg px-15">
        <Card className="shadow-md h-96">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-bold">History</CardTitle>
              <Link
                className="rounded-lg  px-4 py-2 text-[16px] font-bold transition-all hover:-translate-y-[2px] md:flex md:items-center dark:border-white bg-gradient-to-r from-green-400 to-cyan-500 text-white hover:from-green-500 hover:to-cyan-600"
                href="/dashboard"
              >
                <LucideLayoutDashboard className="mr-2" />
                Back to Home
              </Link>
            </div>
            <div> You have played a total of 0 quizzes.</div>
          </CardHeader>
          <CardContent className="max-h-[60vh] overflow-auto ">
            <HistoryComponent limit={100} userId={session.user.id} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default History;
