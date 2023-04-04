import { Outlet } from 'react-router-dom';
import Navbar from '../components/todo/Navbar';
import Footer from '../components/todo/Footer';

function RootLayout() {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default RootLayout;
