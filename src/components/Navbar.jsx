import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-600">ExcelAnalytics</div>
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Upload Excel</a></li>
        <li><a href="#">My History</a></li>
        <li><a href="#">Profile</a></li>
        <li><button className="text-red-500">Logout</button></li>
      </ul>
    </nav>
  );
}
