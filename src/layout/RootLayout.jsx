// rrd imports
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <main className="font-roboto">
      <Outlet />
    </main>
  );
}

export default RootLayout;
