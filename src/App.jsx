// import React, { useState } from 'react'
// import axios from 'axios'

// export default function App() {
//   const [city, setCity] = useState('')
//   const [days, setDays] = useState(3)
//   const [plan, setPlan] = useState('')
//   const [loading, setLoading] = useState(false)

//   const handlePlanTrip = async () => {
//     setLoading(true)
//     try {
//       const res = await axios.post('http://localhost:8000/plan', { city, days })
//       setPlan(res.data.plan)
//     } catch (err) {
//       setPlan('Error fetching plan. Please try again.')
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       <div className="max-w-xl mx-auto bg-white rounded-2xl shadow p-6">
//         <h1 className="text-2xl font-bold mb-4">🧳 AI U.S. Trip Planner</h1>
//         <input
//           type="text"
//           placeholder="City (e.g., Austin)"
//           value={city}
//           onChange={e => setCity(e.target.value)}
//           className="w-full mb-2 p-2 border rounded"
//         />
//         <input
//           type="number"
//           min="1"
//           max="10"
//           value={days}
//           onChange={e => setDays(e.target.value)}
//           className="w-full mb-4 p-2 border rounded"
//         />
//         <button
//           onClick={handlePlanTrip}
//           className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600"
//         >
//           {loading ? 'Planning...' : 'Generate Itinerary'}
//         </button>
//         {plan && (
//           <div className="mt-6 whitespace-pre-wrap text-sm">
//             <h2 className="font-bold text-lg mb-2">Suggested Plan:</h2>
//             {plan}
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }



// Project: AI-Powered U.S. Trip Planner

// Stack:
// - Frontend: React + TailwindCSS + Axios
// - Backend: Node.js + Express (or FastAPI alternative)
// - AI Integration: OpenAI GPT API
// - External APIs: Google Maps Places API
// - DB: MongoDB or SQLite (optional)

// --- FRONTEND: App.jsx ---
import React, { useState } from 'react';
import axios from 'axios';
import { SparklesIcon } from 'lucide-react';

export default function App() {
  const [city, setCity] = useState('');
  const [days, setDays] = useState(3);
  const [plan, setPlan] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePlanTrip = async () => {
    setLoading(true);
    const res = await axios.post('http://localhost:8000/plan', { city, days });
    setPlan(res.data.plan);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-sky-100 to-lime-100 p-6 font-sans text-gray-800">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-10 border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <SparklesIcon className="text-pink-500 w-8 h-8 animate-pulse" />
          <h1 className="text-5xl font-black tracking-tight text-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            AI-Powered U.S. Trip Planner
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <input
            type="text"
            placeholder="🌆 Enter a U.S. city (e.g., Austin)"
            value={city}
            onChange={e => setCity(e.target.value)}
            className="col-span-2 p-4 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 text-lg"
          />
          <input
            type="number"
            min="1"
            max="10"
            value={days}
            onChange={e => setDays(e.target.value)}
            className="p-4 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 text-lg"
          />
        </div>

        <button
          onClick={handlePlanTrip}
          disabled={loading || !city}
          className={`w-full text-white font-bold py-4 rounded-xl text-lg shadow-xl transition-transform duration-150 ease-in-out transform hover:scale-105 ${
            loading || !city
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:brightness-110'
          }`}
        >
          {loading ? '🧠 Planning your trip...' : '🧭 Generate My Itinerary'}
        </button>

        {plan && (
          <div className="mt-10 p-6 bg-white bg-opacity-80 rounded-2xl border border-purple-100 text-gray-700 whitespace-pre-wrap text-base leading-relaxed shadow-inner">
            <h2 className="font-bold text-2xl mb-4 text-purple-600 underline decoration-wavy underline-offset-8">
              🌈 Your AI-Generated Travel Plan
            </h2>
            {plan}
          </div>
        )}
      </div>
    </div>
  );
}