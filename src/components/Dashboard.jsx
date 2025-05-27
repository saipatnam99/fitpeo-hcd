
 



import BodySection from './BodySection';
import Calendar from './Calendar';

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full px-4 py-6">
      {/* Left Side: Body Section */}
      <div className="flex flex-col w-full">
        <BodySection />
      </div>

      {/* Right Side: Calendar + Schedule */}
      <div className="flex flex-col w-full">
        <Calendar />
      </div>
    </div>
  );
}
