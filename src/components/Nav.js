import {Link} from "react-router-dom";

export default function Nav(){
    return (
      <nav>
        <Link to="/">
          <img
            src="https://image4.owler.com/logo/neuro-insight_owler_20221118_022918_original.png"
            width="200px"
            alt="..."
          ></img>
        </Link>
        <ul className="blockquote">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/guide">Guide</Link>
          </li>
          <li className="dropdown">
            <a href="#" className="dropbtn">
              Diagnosis
            </a>
            <div className="dropdown-content">
              <Link to="/booking">New Patient</Link>
              <Link to="/existing">Existing Patient</Link>
            </div>
        </li>
          <li>
            <Link to="/record">Records</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    );
}