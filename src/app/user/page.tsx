import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

async function getUsers() {
  const users = await prisma.user.findMany();
  return users;
}

export default async function UserPage() {
  const users = await getUsers();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md w-96">
        <h1 className="mb-4 text-2xl font-bold text-center">User Page</h1>
        <p className="text-lg text-center">
          Welcome, demo user!
        </p>
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Available Users</h2>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">ID</th>
                <th className="text-left">Username</th>
                <th className="text-left">Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
