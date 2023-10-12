import "./Topbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <FontAwesomeIcon className="topIcon" icon={faFacebook} />
        <FontAwesomeIcon className="topIcon" icon={faTwitter} />
        <FontAwesomeIcon className="topIcon" icon={faInstagram} />
        <FontAwesomeIcon className="topIcon" icon={faPinterest} />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to={"/"} HOME>
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to={""} HOME>
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to={""} HOME>
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to={"/Write"} HOME>
              WRITE
            </Link>
          </li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {/* below is a condition to display profile pic if theres a user online */}
        {user ? (
          <img
            className="topImg"
            src="https://images.pexels.com/photos/1772475/pexels-photo-1772475.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Profile"
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
{/* if theres no user, the profile pic is disabled and you are required to login or register */}
        <FontAwesomeIcon className="topSearchIcon" icon={faSearch} />
      </div>
    </div>
  );
}

export default Topbar;
