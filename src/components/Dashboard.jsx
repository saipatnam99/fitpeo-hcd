
 
// import BodySection from './BodySection'
// import Calendar from './Calendar'
// import ActivityChart from './ActivityChart'


// export default function Dashboard() {
//   return (
//     <div className="space-y-8 w-full h-full">
//       <div className="grid lg:grid-cols-3  grid-cols-span-3 gap-6">
//         <BodySection />
//         <Calendar />
      
//       </div>
   
      
//     </div>
//   );
// }

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
      <div className="flex flex-col">
        <Calendar />
      </div>
    </div>
  );
}

