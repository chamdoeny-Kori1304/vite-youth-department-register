import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">메인</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
