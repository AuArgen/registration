import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "./api/axios";

const PROFILE_URL = "/login";

const Profile = () => {
  return (
    <>
      <section>Hello It is profile page</section>
    </>
  );
};

export default Profile;
