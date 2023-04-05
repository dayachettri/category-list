// components
import Bottombar from '../components/todo/Bottombar';
import Navbar from '../components/todo/Navbar';
import SingleTodoList from '../components/todo/SingleTodoList';

function TodoDashboard() {
  return (
    <section>
      <Navbar />
      <div className="grid grid-cols-3 gap-7 max-w-7xl mx-auto">
        <SingleTodoList />
        <SingleTodoList />
        <SingleTodoList />
      </div>
      <Bottombar />
    </section>
  );
}

export default TodoDashboard;
