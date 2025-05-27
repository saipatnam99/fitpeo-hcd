
import ActivityChart from './ActivityChart';
import { FiSearch } from 'react-icons/fi';

export default function BodySection() {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-3xl w-full col-span-2 space-y-6">
      {/* Search and Notification */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div className="flex items-center bg-white border shadow-sm px-4 py-2 w-full max-w-full">
          <FiSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none w-full text-sm text-gray-700"
          />
        </div>

        <button className="p-2 shadow-md text-blue-600 bg-white rounded-full self-start sm:self-auto">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 
              18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 
              6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 
              0a24.255 24.255 0 0 1-5.714 0m5.714 
              0a3 3 0 1 1-5.714 0" />
          </svg>
        </button>
      </div>

      {/* Dashboard Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <h2 className="text-xl font-bold">Dashboard</h2>
        <span className="text-sm text-gray-400">This Week ▾</span>
      </div>

      {/* Image and Cards */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Image */}
        <div className="flex-1 relative flex justify-center">
          <img
            src="assets/anatomy.png"
            alt="Human Body"
            className="w-full max-w-md h-auto rounded-xl"
          />
        </div>

        {/* Cards */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          <Card icon="🫁" title="Lungs" date="26 Oct 2021" percent="30" color="bg-red-400" />
          <Card icon="🦷" title="Teeth" date="26 Oct 2021" percent="80" color="bg-green-400" />
          <Card icon="🦴" title="Bone" date="26 Oct 2021" percent="40" color="bg-orange-400" />

          <div className="text-right text-blue-600 text-sm cursor-pointer col-span-full">
            Details →
          </div>
        </div>
      </div>

      {/* Activity Chart */}
      <ActivityChart />
    </div>
  );
}

function Card({ icon, title, date, percent, color }) {
  return (
    <div className="bg-gray-100 p-4 rounded-2xl shadow-sm w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg">{icon}</span>
        <span className="text-xs text-gray-400">{date}</span>
      </div>
      <div className="text-sm font-semibold mb-1">{title}</div>
      <div className="w-full bg-gray-300 rounded-full h-2">
        <div
          className={`${color} h-2 rounded-full transition-all duration-300`}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}

