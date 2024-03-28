
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Assuming you have a Sidebar.css file for styling

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/">Home</Link>
      <Link to="/bio">Bio</Link>
      <Link to="/hireme">Hireme</Link>
    </div>
  );
}

export default Sidebar;
