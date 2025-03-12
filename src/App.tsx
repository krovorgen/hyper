import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home/Home.tsx';
import { Format } from './pages/Format/Format.tsx';
import { Solutions } from './pages/Solutions/Solutions.tsx';
import { InventoryData } from './pages/InventoryData/InventoryData.tsx';
import { About } from './pages/About/About.tsx';
import './scss/index.scss';
import { RoutePaths } from './constants';
import { JSX } from 'react';
import { Layout } from './layouts/Layout/Layout.tsx';
import { Policy } from './pages/Policy/Policy.tsx';

const router = createBrowserRouter([
  {
    path: RoutePaths.HOME,
    element: <Layout />,
    children: [
      { path: RoutePaths.HOME, element: <Home /> },
      { path: RoutePaths.FORMAT, element: <Format /> },
      { path: RoutePaths.SOLUTIONS, element: <Solutions /> },
      { path: RoutePaths.INVENTORY_DATA, element: <InventoryData /> },
      { path: RoutePaths.ABOUT, element: <About /> },
      { path: RoutePaths.POLICY, element: <Policy /> },
    ],
  },
]);

export const App = (): JSX.Element => {
  return <RouterProvider router={router} />;
};
