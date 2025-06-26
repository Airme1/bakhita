import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import Room from './pages/Room';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/room', element: <Room /> },
  { path: '*', element: <NotFound /> },
]);

export default function App() {
  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}
