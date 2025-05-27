
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
    <div className="bg-[#f5f9ff] p-4 sm:p-6 rounded-2xl w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h2 className="text-gray-800 font-semibold text-lg sm:text-xl">Activity</h2>
        <span className="text-sm text-gray-500">3 appointments on this week</span>
      </div>

      {/* Chart */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 h-auto">
        {data.map((bars, i) => (
          <div key={i} className="flex flex-col items-center">
            {/* Vertical bars */}
            <div className="flex flex-col justify-end gap-1 h-24">
              {bars.map((height, j) => (
                <div
                  key={j}
                  className={`${barColors[j % barColors.length]} w-2 sm:w-2.5 md:w-3 rounded-full transition-all duration-300`}
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
