
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
      <div className="flex justify-between  h-24">
        {data.map((bars, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            {/* Vertical bars */}
            <div className="flex flex-row  gap-1 h-24">
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

