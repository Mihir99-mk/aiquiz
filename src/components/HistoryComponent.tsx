// import React from "react";
// import { Clock, CopyCheck, Edit2 } from "lucide-react";
// import Link from "next/link";
// import { prisma } from "@/lib/db";
// import MCQCounter from "./MCQCounter";

// type Props = {
//   limit: number;
//   userId: string;
// };

// const HistoryComponent = async ({ limit, userId }: Props) => {
//   const games = await prisma.game.findMany({
//     take: limit,
//     where: {
//       userId,
//     },
//     orderBy: {
//       timeStarted: "desc",
//     },
//   });
//   return (
//     <div className="overflow-hidden">
//       <table className="min-w-full md:w-[800px] lg:w-[1000px] xl:w-[1200px] mx-auto divide-y divide-gray-200">
//         <thead className="bg-gray-50">
//           <tr className=" transition-all font-bold bg-gradient-to-r from-green-400 to-cyan-500 text-black hover:from-green-500 hover:to-cyan-600">
//             <th className="px-6 py-3 text-left font-bold text-[15px]   text-black bg-transparent   font-bold uppercase tracking-wider ">
//               Quiz Type
//             </th>
//             <th className="px-6 py-3 text-left font-bold text-[15px] text-black bg-transparent   font-bold uppercase tracking-wider  ">
//               Topic
//             </th>
//             <th className="px-6 py-3 text-left font-bold text-[15px]   text-black bg-transparent   font-bold uppercase tracking-wider  ">
//               Date
//             </th>
//           </tr>
//         </thead>
//         <tbody className="bg-white dark:bg-gray-950 divide-y divide-gray-200">
//           {games.map((game) => {
//             return (
//               <tr key={game.id}>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   {game.gameType === "mcq" ? (
//                     <CopyCheck className="mr-3" />
//                   ) : (
//                     <Edit2 className="mr-3" />
//                   )}
//                   <span className="text-sm text-gray-900 dark:text-white">
//                     {game.gameType === "mcq" ? "Multiple Choice" : "Open-Ended"}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <Link
//                     className="text-base font-medium leading-none underline"
//                     href={`/statistics/${game.id}`}
//                   >
//                     {game.topic}
//                   </Link>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <p className="flex items-center px-2 py-1 text-xs text-white rounded-lg w-fit bg-slate-800">
//                     <Clock className="w-4 h-4 mr-1" />
//                     {new Date(game.timeEnded ?? 0).toLocaleDateString()}
//                   </p>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default HistoryComponent;

import React from "react";
import { Clock, CopyCheck, Edit2 } from "lucide-react";
import Link from "next/link";
import { prisma } from "@/lib/db";
import MCQCounter from "./MCQCounter";

type Props = {
  limit: number;
  userId: string;
};

const HistoryComponent = async ({ limit, userId }: Props) => {
  const games = await prisma.game.findMany({
    take: limit,
    where: {
      userId,
    },
    orderBy: {
      timeStarted: "desc",
    },
  });
  return (
    <div className="overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr className=" transition-all font-bold bg-gradient-to-r from-green-400 to-cyan-500 text-black hover:from-green-500 hover:to-cyan-600">
            <th className="px-6 py-3 text-left font-bold text-[15px]   text-black bg-transparent   font-bold uppercase tracking-wider ">
              Quiz Type
            </th>
            <th className="px-6 py-3 text-left font-bold text-[15px] text-black bg-transparent   font-bold uppercase tracking-wider  ">
              Topic
            </th>
            <th className="px-6 py-3 text-left font-bold text-[15px]   text-black bg-transparent   font-bold uppercase tracking-wider  ">
              Date
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-950 divide-y divide-gray-200">
          {games.map((game) => {
            return (
              <tr key={game.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {game.gameType === "mcq" ? (
                    <CopyCheck className="mr-3" />
                  ) : (
                    <Edit2 className="mr-3" />
                  )}
                  <span className="text-sm text-gray-900 dark:text-white">
                    {game.gameType === "mcq" ? "Multiple Choice" : "Open-Ended"}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link
                    className="text-base font-medium leading-none underline"
                    href={`/statistics/${game.id}`}
                  >
                    {game.topic}
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <p className="flex items-center px-2 py-1 text-xs text-white rounded-lg w-fit bg-slate-800">
                    <Clock className="w-4 h-4 mr-1" />
                    {new Date(game.timeEnded ?? 0).toLocaleDateString()}
                  </p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryComponent;
