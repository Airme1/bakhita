import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Room from './pages/Room';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/room/:id', element: <Room /> },
  { path: '*', element: <NotFound /> },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}
