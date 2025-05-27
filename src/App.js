// import Sidebar from './components/Sidebar'
// import Dashboard from './components/Dashboard'

// function App() {
//   return (
//     <div className="flex h-screen bg-white p-2 rounded-lg border  text-gray-800">
//       <Sidebar />
//       <div className="flex-1 p-6 overflow-y-scroll grid-cols-2 justify-around">
//         <Dashboard />
//       </div>
//     </div>
//   )
// }

// export default App

import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="flex h-screen bg-white p-2 rounded-lg border text-gray-800 overflow-hidden">
      <Sidebar />
      <div className="flex-1 p-4 overflow-y-auto">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
