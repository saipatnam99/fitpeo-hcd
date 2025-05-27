

import ActivityChart from './ActivityChart'
import { FiSearch } from 'react-icons/fi';
import { IoMdNotificationsOutline } from 'react-icons/io';


export default function BodySection() {
  return (
    <div className="bg-white p-4 rounded-3xl  w-full col-span-2 gap-6">
      <div className='flex flex-cols-2'>   
        <div className="flex items-center bg-white border shadow-sm  px-4 py-2 w-full max-w-full">
        <FiSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none w-full text-sm text-gray-700"
        />
       </div>

      {/* Notification */}
      <button className="ml-4 p-2 shadow-md text-blue-600 bg-white">
        {/* <IoMdNotificationsOutline className="  text-indigo-800 text-xl" /> */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-blue-600">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
</svg>

      </button>
      </div>
     
      <div className="flex justify-between items-center mt-8">
        <h2 className="text-xl font-2xl font-bold ">Dashboard</h2>
        <span className="text-sm text-gray-400">This Week ▾</span>
      </div>

      <div className="flex gap-4 mt-6 mb-4 justify-between">
        <div className="relative">
          <img src="assets/anatomy.png" alt="Human Body" className="w-[75%] h-full rounded-xl"/>
          {/* <span className="absolute top-[25%] left-[45%] text-white text-sm px-2 py-1 bg-blue-800 rounded-full">❤️ Healthy Heart</span>
          <span className="absolute top-[65%] left-[5%] text-white text-sm px-2 py-1 bg-cyan-500 rounded-full">🦵 Healthy Leg</span> */}
        </div>

        <div className="space-y-4 grid grid-rows-3">
          <Card icon="🫁" title="Lungs" date="26 Oct 2021" percent="30" color="bg-red-400" />
          <Card icon="🦷" title="Teeth" date="26 Oct 2021" percent="80" color="bg-green-400" />
          <Card icon="🦴" title="Bone" date="26 Oct 2021" percent="40" color="bg-orange-400" />
     
         <div className="text-right text-blue-600 text-sm cursor-pointer">Details →</div>
      </div>
         </div>
      <ActivityChart className="mt-4"/>
    </div>
  );
}

function Card({ icon, title, date, percent, color }) {
  return (
    <div className="bg-gray-100 p-4 rounded-2xl shadow-sm w-56">
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg">{icon}</span>
        <span className="text-xs text-gray-400">{date}</span>
      </div>
      <div className="text-sm font-semibold mb-1">{title}</div>
      <div className="w-full bg-gray-300 rounded-full h-2">
        <div className={`${color} h-2 rounded-full`} style={{ width: `${percent}%` }}></div>
      </div>
       
    </div>
  );
}

