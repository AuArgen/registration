import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
  faUser,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "./api/axios";
import "./Profile.css"; // Import your CSS file for styling

const PROFILE_URL = "/login";

const Profile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1234567890",
  });

  useEffect(() => {
    // Fetch user data from API
    const fetchUserData = async () => {
      try {
        const response = await axios.get(PROFILE_URL);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="profile-container">
      <header className="profile-header">
        <h1>
          <FontAwesomeIcon icon={faUser} /> Profile
        </h1>
      </header>
      <section className="profile-info">
        <div className="profile-item">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <span>Name: {user.name}</span>
        </div>
        <div className="profile-item">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <span>Email: {user.email}</span>
        </div>
        <div className="profile-item">
          <FontAwesomeIcon icon={faPhone} className="icon" />
          <span>Phone: {user.phone}</span>
        </div>
      </section>
      <footer className="profile-footer">
        <button className="logout-button">
          <a href="/">
            <FontAwesomeIcon icon={faTimes} /> Logout
          </a>
        </button>
      </footer>
    </div>
  );
};

export default Profile;
