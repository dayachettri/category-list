// components
import ButtonGroupGlobal from './ButtonGroupGlobal';

function Bottombar({ onCreateOpen, onUpdateOpen }) {
  return (
    <div className="bg-gray-900 text-white fixed bottom-0 left-0 w-full py-3 flex justify-center">
      <ButtonGroupGlobal
        onCreateOpen={onCreateOpen}
        onUpdateOpen={onUpdateOpen}
      />
    </div>
  );
}

export default Bottombar;
