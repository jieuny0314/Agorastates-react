import '../styles/Menubar.css';

function Menubar({ text }) {
  return (
    <div className="Menubar">
      <div className="menubar">{text}</div>
    </div>
  );
}

export default Menubar;