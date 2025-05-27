
 

import BodySection from './BodySection';
import Calendar from './Calendar';

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full space-y-8">
      {/* Left Side: Body Section */}
      <div className="flex flex-col">
        <BodySection />
      </div>

      {/* Right Side: Calendar + Schedule */}
      <div className="flex flex-col max-w-full h-full">
        <Calendar />
      </div>
    </div>
  );
}

