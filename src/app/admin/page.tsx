'use client';

import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const fakeLogs = [
  'INFO: User logged in: demo',
  'INFO: User accessed page: /user',
  'ERROR: Failed to load resource: /api/data',
  'INFO: User logged out: demo',
  'INFO: User logged in: admin',
  'INFO: User accessed page: /admin',
  'WARN: High memory usage detected',
  'INFO: User accessed page: /admin/users',
  'INFO: User created new user: test',
  'INFO: System key accessed: PROTON{d3bug_k3y_n0t_fl@g}',
  'INFO: User deleted user: test',
  'INFO: User accessed page: /admin/settings',
  'INFO: Settings updated',
  'INFO: User logged out: admin',
  'INFO: User logged in: demo',
  'INFO: User accessed page: /user',
  'INFO: User logged out: demo',
  'INFO: User logged in: admin',
  'INFO: User accessed page: /admin',
  'INFO: User accessed page: /admin/logs',
  'INFO: Deep log entry: PROTON{you_10GGeD_1N_8y_1UcK}',
];

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Users',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex min-h-screen bg-gray-800 text-white">
      <aside className="w-64 bg-gray-900 p-4">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
        <nav>
          <ul>
            <li className="mb-2">
              <a
                href="#"
                className={`block p-2 rounded ${
                  activeTab === 'dashboard' ? 'bg-gray-700' : ''
                }`}
                onClick={() => setActiveTab('dashboard')}
              >
                Dashboard
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className={`block p-2 rounded ${
                  activeTab === 'users' ? 'bg-gray-700' : ''
                }`}
                onClick={() => setActiveTab('users')}
              >
                Users
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className={`block p-2 rounded ${
                  activeTab === 'settings' ? 'bg-gray-700' : ''
                }`}
                onClick={() => setActiveTab('settings')}
              >
                Settings
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className={`block p-2 rounded ${
                  activeTab === 'logs' ? 'bg-gray-700' : ''
                }`}
                onClick={() => setActiveTab('logs')}
              >
                Log Viewer
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        {activeTab === 'dashboard' && (
          <div>
            <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-900 p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Users</h3>
                <Bar data={chartData} />
              </div>
              <div className="bg-gray-900 p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-2">System Integrity Key</h3>
                <p className="text-lg font-mono text-yellow-500">
                  {'PROTON{sYs_k3y_is_wr0ng_p@th}'}
                </p>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'users' && (
          <div>
            <h2 className="text-3xl font-bold mb-4">Users</h2>
            <div className="bg-gray-900 p-4 rounded-lg">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left">ID</th>
                    <th className="text-left">Username</th>
                    <th className="text-left">Role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>admin</td>
                    <td>ADMIN</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>demo</td>
                    <td>USER</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
        {activeTab === 'settings' && (
          <div>
            <h2 className="text-3xl font-bold mb-4">Settings</h2>
            <div className="bg-gray-900 p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Site Configuration</h3>
              <p>Some settings here...</p>
              <h3 className="text-xl font-bold mt-4 mb-2">Backup Recovery Key</h3>
              <p className="text-lg font-mono text-yellow-500">
                {'PROTON{b@ckup_k3y_is_a_tr@p}'}
              </p>
            </div>
          </div>
        )}
        {activeTab === 'logs' && (
          <div>
            <h2 className="text-3xl font-bold mb-4">Log Viewer</h2>
            <div className="bg-gray-900 p-4 rounded-lg h-96 overflow-y-scroll">
              {fakeLogs.map((log, index) => (
                <p key={index} className="font-mono text-sm">
                  {log}
                </p>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
