

import React from "react";
import { FaTooth } from "react-icons/fa";
import { GiHumanCannonball } from "react-icons/gi";

const Calendar = () => {
  return (
    <div className="bg-[#f5f9ff] shadow-lg rounded-3xl p-4 sm:p-6 w-full max-w-6xl h-full mx-auto font-sans">
      {/* Header Section */}
      <div className="flex flex-col gap-4 mb-6 sm:flex-row sm:justify-between sm:items-center">
        <div className="flex items-center justify-end gap-2 sm:justify-start">
          <div className="bg-cyan-400 p-2 rounded-xl">
            <img
              src="https://i.pravatar.cc/30?u=child"
              alt="avatar"
              className="rounded-full"
            />
          </div>
          <button className="bg-indigo-700 text-white p-2 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>

        <div className="flex justify-between items-center sm:w-full">
          <div className="text-sm text-gray-500 font-medium">October 2021</div>
          <div className="flex items-center gap-2">
            <button className="text-purple-500">&lt;</button>
            <button className="text-purple-500">&gt;</button>
          </div>
        </div>
      </div>

      {/* Calendar Week Days */}
      <div className="grid grid-cols-7 gap-2 text-xs text-center text-gray-600">
        {["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"].map((day, i) => (
          <div key={i}>
            <div className="font-semibold">{day}</div>
            <div className="text-sm font-bold text-gray-800">{25 + i}</div>
          </div>
        ))}
      </div>

      {/* Time Slots */}
      <div className="grid grid-cols-7 gap-2 mt-2 text-xs text-center">
        {[
          ["10:00", "11:00", "12:00"],
          ["08:00", "09:00", "10:00"],
          ["12:00", "---", "13:00"],
          ["11:00", "---", "14:00"],
          ["12:00", "16:00", "17:00"],
          ["12:00", "09:00", "10:00"],
          ["11:00", "12:00", "14:00"],
        ].map((slots, i) => (
          <div key={i} className="flex flex-col gap-1 items-center">
            {slots.map((time, j) =>
              time !== "---" ? (
                <div
                  key={j}
                  className={`px-2 py-1 rounded-full ${
                    time === "09:00" ? "bg-blue-600 text-white" : "bg-white"
                  }`}
                >
                  {time}
                </div>
              ) : (
                <div key={j} className="h-6" />
              )
            )}
          </div>
        ))}
      </div>

      {/* Appointment Cards */}
      <div className="mt-6 flex flex-col lg:flex-row gap-4">
        <div className="bg-blue-700 text-white p-4 rounded-xl shadow-sm flex-1">
          <div className="flex justify-between items-center">
            <span>Dentist</span>
            <FaTooth />
          </div>
          <div className="text-sm mt-2">09:00–11:00</div>
          <div className="text-xs">Dr. Cameron Williamson</div>
        </div>
        <div className="bg-purple-100 text-purple-800 p-4 rounded-xl shadow-sm flex-1">
          <div className="flex justify-between items-center gap-4">
            <span>Physiotherapy Appointment</span>
            <span className="text-sm">💪</span>
          </div>
          <div className="text-sm mt-2">11:00–12:00</div>
          <div className="text-xs">Dr. Kevin Djones</div>
        </div>
      </div>

      {/* Upcoming Schedule */}
      <div className="mt-8">
        <div className="text-gray-800 font-semibold mb-2">
          The Upcoming Schedule
        </div>

        <div className="text-sm text-gray-500 mb-2 mt-4">On Thursday</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-purple-100 text-gray-800 p-4 rounded-xl">
            <div className="flex justify-between items-center">
              Health checkup complete <span className="text-xl">💉</span>
            </div>
            <div className="text-xs mt-1">11:00 AM</div>
          </div>
          <div className="bg-purple-200 text-gray-800 p-4 rounded-xl">
            <div className="flex justify-between items-center">
              Ophthalmologist <span className="text-xl">👁️</span>
            </div>
            <div className="text-xs mt-1">14:00 PM</div>
          </div>
        </div>

        <div className="text-sm text-gray-500 mb-1 mt-6">On Saturday</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-purple-100 text-gray-800 p-4 rounded-xl">
            <div className="flex justify-between items-center">
              Cardiologist <span className="text-red-500 text-sm">❤️</span>
            </div>
            <div className="text-xs mt-1">12:00 AM</div>
          </div>
          <div className="bg-purple-200 text-gray-800 p-4 rounded-xl">
            <div className="flex justify-between items-center">
              Neurologist <GiHumanCannonball />
            </div>
            <div className="text-xs mt-1">16:00 PM</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
