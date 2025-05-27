// export default function ScheduleCard({ title, time, doctor }) {
//   return (
//     <div className="p-3 bg-indigo-50 border-l-4 border-indigo-600 rounded">
//       <div className="text-sm font-semibold">{title}</div>
//       <div className="text-xs text-gray-500">{time}</div>
//       {doctor && <div className="text-xs text-gray-700">{doctor}</div>}
//     </div>
//   )
// }

// export default function ScheduleCard() {
//   return (
//     <div className="bg-white rounded-xl p-4 shadow flex flex-col justify-between">
//       <div className="text-lg font-semibold text-gray-800 mb-2">Upcoming Appointments</div>
//       <ul className="space-y-2 text-sm text-gray-600">
//         <li>🩺 Dr. Smith - Cardiology - Oct 26, 10:00 AM</li>
//         <li>🦷 Dr. Allen - Dentistry - Oct 27, 11:30 AM</li>
//         <li>🦴 Dr. Ray - Orthopedics - Oct 29, 02:15 PM</li>
//       </ul>
//     </div>
//   );
// }

export default function ScheduleCard() {
  return (
    <div className="mt-6 bg-white p-6 rounded-3xl shadow-md">
      <h2 className="text-lg font-semibold text-blue-900 mb-3">The Upcoming Schedule</h2>
      <div className="space-y-3">
        <div className="flex justify-between">
          <Schedule title="Health checkup complete" time="11:00 AM" icon="✅" />
          <Schedule title="Ophthalmologist" time="14:00 PM" icon="👁️" />
        </div>
        <div className="flex justify-between">
          <Schedule title="Cardiologist" time="12:00 AM" icon="❤️" />
          <Schedule title="Neurologist" time="16:00 PM" icon="🧑‍⚕️" />
        </div>
      </div>
    </div>
  );
}

function Schedule({ title, time, icon }) {
  return (
    <div className="bg-indigo-100 p-3 rounded-xl text-sm w-[45%]">
      <div className="flex justify-between">
        <span className="font-semibold">{title}</span>
        <span>{icon}</span>
      </div>
      <div className="text-gray-500">{time}</div>
    </div>
  );
}
