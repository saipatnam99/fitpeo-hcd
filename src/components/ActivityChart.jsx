// import React from "react";

// const ActivityChart = () => {
//   const data = [
//     [20, 40, 30], // Mon
//     [10, 60, 25], // Tues
//     [35, 15, 50], // Wed
//     [20, 30, 45], // Thurs
//     [50, 70, 20], // Fri
//     [40, 35, 60], // Sat
//     [30, 45, 25], // Sun
//   ];

//   const colors = ["bg-cyan-400", "bg-indigo-300", "bg-gray-300"];

//   return (
//     <div className="bg-[#f5f9ff] p-6 rounded-2xl w-full max-w-xl mx-auto">
//       <div className="flex justify-between mb-4">
//         <h2 className="font-semibold text-gray-800">Activity</h2>
//         <span className="text-sm text-gray-500">3 appointments on this week</span>
//       </div>

//       <div className="flex justify-between items-end h-40">
//         {data.map((day, i) => (
//           <div key={i} className="flex flex-col items-center gap-1">
//             <div className="flex flex-col justify-end items-center h-full gap-1">
//               {day.map((height, j) => (
//                 <div
//                   key={j}
//                   className={`${colors[j % colors.length]} w-2 rounded-full`}
//                   style={{ height: `${height}px` }}
//                 />
//               ))}
//             </div>
//             <span className="text-xs text-gray-500 mt-1">
//               {["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"][i]}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ActivityChart;

import React from "react";

const ActivityChart = () => {
  const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
  const data = [
    [30, 45, 20],
    [50, 30, 25],
    [20, 15, 35],
    [25, 40, 30],
    [60, 35, 45],
    [30, 25, 20],
    [40, 20, 30],
  ];

  const barColors = ["bg-cyan-400", "bg-indigo-500", "bg-gray-300"];

  return (
    <div className="bg-[#f5f9ff] p-6 rounded-2xl w-full max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-gray-800 font-semibold">Activity</h2>
        <span className="text-sm text-gray-500">3 appointments on this week</span>
      </div>

      {/* Chart */}
      <div className="flex justify-between items-end h-32">
        {data.map((bars, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            {/* Vertical bars */}
            <div className="flex flex-col justify-end gap-1 h-24">
              {bars.map((height, j) => (
                <div
                  key={j}
                  className={`${barColors[j % barColors.length]} w-2 rounded-full`}
                  style={{ height: `${height}px` }}
                ></div>
              ))}
            </div>
            {/* Day label */}
            <span className="text-xs text-gray-500 mt-1">{days[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityChart;


// export default function ActivityChart() {
//   return (
//     <div className=" p-6 rounded-3xl shadow-md mt-6 bg-[#f5f9ff]">
//       <div className="flex justify-between items-center ">
//          <h4 className="text-gray-800 font-semibold">Activity</h4>
//         <p className="text-sm text-gray-400">3 appointments on this week</p>
//        </div>
//       <div className="grid grid-cols-7 gap-4">
//         {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
//           <div key={i} className="flex flex-col items-center">
//             <div className="w-2 bg-cyan-500 h-20 rounded-md mb-1"></div>
//             <div className="w-2 bg-blue-900 h-12 rounded-md mb-1"></div>
//             <span className="text-xs text-gray-500">{day}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
