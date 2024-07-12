// components/ParkingComparisonTable.js
const ParkingComparisonTable = () => {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-6 border border-gray-300"></th>
              <th className="py-3 px-6 border border-gray-300">Your own PPC ads</th>
              <th className="py-3 px-6 border border-gray-300">cabbx</th>
              <th className="py-3 px-6 border border-gray-300">Your Carding</th>
              <th className="py-3 px-6 border border-gray-300">Your print ads</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3 px-6 border border-gray-300">Time To Terminals</td>
              <td className="py-3 px-6 border border-gray-300">2-12 Min On Site Airport</td>
              <td className="py-3 px-6 border border-gray-300">15-20 Min Park & Ride</td>
              <td className="py-3 px-6 border border-gray-300">10-15 Min Park & Ride</td>
              <td className="py-3 px-6 border border-gray-300">10-12 Min Park & Ride</td>
            </tr>
            <tr>
              <td className="py-3 px-6 border border-gray-300">Your Parking Options</td>
              <td className="py-3 px-6 border border-gray-300">On-Airport Short/Long Stay, Valet Parking</td>
              <td className="py-3 px-6 border border-gray-300">Third Party Park & Ride</td>
              <td className="py-3 px-6 border border-gray-300">Third Party Park & Ride, Meet & Greet</td>
              <td className="py-3 px-6 border border-gray-300">Third Party Park & Ride, Meet & Greet</td>
            </tr>
            <tr>
              <td className="py-3 px-6 border border-gray-300">Loyalty And Email Deals</td>
              <td className="py-3 px-6 border border-gray-300 text-center">✔️</td>
              <td className="py-3 px-6 border border-gray-300 text-center">❌</td>
              <td className="py-3 px-6 border border-gray-300 text-center">✔️</td>
              <td className="py-3 px-6 border border-gray-300 text-center">✔️</td>
            </tr>
            <tr>
              <td className="py-3 px-6 border border-gray-300">No Cancellation Fees</td>
              <td className="py-3 px-6 border border-gray-300 text-center">✔️</td>
              <td className="py-3 px-6 border border-gray-300 text-center">✔️</td>
              <td className="py-3 px-6 border border-gray-300 text-center">✔️</td>
            </tr>
            <tr>
              <td className="py-3 px-6 border border-gray-300">No Amendments Fees</td>
              <td className="py-3 px-6 border border-gray-300 text-center">✔️</td>
              <td className="py-3 px-6 border border-gray-300 text-center">✔️</td>
              <td className="py-3 px-6 border border-gray-300 text-center">✔️</td>
            </tr>
            <tr>
              <td className="py-3 px-6 border border-gray-300">No Call To Collect Car On Return</td>
              <td className="py-3 px-6 border border-gray-300 text-center">✔️</td>
              <td className="py-3 px-6 border border-gray-300 text-center">❌</td>
              <td className="py-3 px-6 border border-gray-300 text-center">❌</td>
              <td className="py-3 px-6 border border-gray-300 text-center">❌</td>
            </tr>
            <tr>
              <td className="py-3 px-6 border border-gray-300">24/7 Customer Services</td>
              <td className="py-3 px-6 border border-gray-300 text-center">✔️</td>
              <td className="py-3 px-6 border border-gray-300 text-center">✔️</td>
              <td className="py-3 px-6 border border-gray-300 text-center">✔️</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default ParkingComparisonTable;
  