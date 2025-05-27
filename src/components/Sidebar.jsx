
import { FaThLarge, FaHistory, FaCalendarAlt, FaUserMd, FaChartPie, FaComments, FaPhone, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="h-screen w-56  bg-[#f5f9ff] shadow-lg flex flex-col justify-between p-4 rounded-bl-3xl rounded-tl-3xl items-center py-12">
      <div>
        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-500 mb-8">
          Health<span className="text-blue-900">care.</span>
        </h1>

        {/* General Section */}
        <p className="text-xs uppercase text-gray-400 font-semibold mb-2">General</p>
        <ul className="space-y-4 mb-8">
          <li className="flex items-center space-x-3 text-blue-900 font-semibold">
            <FaThLarge />
            <span>Dashboard</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-500 hover:text-blue-900 cursor-pointer">
            {/* <FaHistory /> */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
</svg>

            <span>History</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-500 hover:text-blue-900 cursor-pointer">
            <FaCalendarAlt />
            <span>Calendar</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-500 hover:text-blue-900 cursor-pointer">
            {/* <FaUserMd /> */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

            <span>Appointments</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-500 hover:text-blue-900 cursor-pointer">
            <FaChartPie />
            <span>Statistics</span>
          </li>
        </ul>

        {/* Tools Section */}
        <p className="text-xs uppercase text-gray-400 font-semibold mb-2">Tools</p>
        <ul className="space-y-4">
          <li className="flex items-center space-x-3 text-gray-500 hover:text-blue-900 cursor-pointer">
            {/* <FaComments /> */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
</svg>

            <span>Chat</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-500 hover:text-blue-900 cursor-pointer">
            {/* <FaPhone /> */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>

            <span>Support</span>
          </li>
        </ul>
      </div>

      {/* Settings at Bottom */}
      <div className="flex items-center space-x-3 text-gray-400 hover:text-blue-900 cursor-pointer mb-10" >
        <FaCog />
        <span>Setting</span>
      </div>
    </div>
  );
};

export default Sidebar;
