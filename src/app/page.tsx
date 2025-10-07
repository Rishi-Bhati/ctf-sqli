export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md w-96 text-gray-800">
        <h1 className="mb-4 text-2xl font-bold text-center">Login</h1>
        <div className="mb-4">
          <p className="text-sm">Demo account:</p>
          <p className="text-sm font-mono">
            <strong>Username:</strong> demo
          </p>
          <p className="text-sm font-mono">
            <strong>Password:</strong> password
          </p>
        </div>
        <form id="login-form">
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="val"
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.getElementById('login-form').addEventListener('submit', async function(event) {
                event.preventDefault();
                const username = event.target.username.value;
                const password = event.target.val.value;
                const pass1 = password.substring(0, password.length / 2);
                const pass2 = password.substring(password.length / 2);
                
                const response = await fetch('/api/login', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ username, pass1, pass2 }),
                });

                if (response.ok) {
                  const data = await response.json();
                  if (data.redirect) {
                    window.location.href = data.redirect;
                  }
                } else {
                  window.location.href = '/?error=Invalid+credentials';
                }
              });
            `,
          }}
        />
      </div>
    </div>
  );
}
