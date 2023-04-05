import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Layout imports
import RootLayout from './layout/RootLayout';

//Page imports
import TodoDashboard from './pages/TodoDashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <TodoDashboard />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
