// custom hooks
import useAuthContext from '../../hooks/useAuthContext';

function Navbar() {
  const { user } = useAuthContext();

  return (
    <nav className="text-3xl font-[500] text-gray-900 text-center py-3 bg-yellow-400 mb-5">
      Hello {user?.userName}, Your Todo List
    </nav>
  );
}

export default Navbar;
