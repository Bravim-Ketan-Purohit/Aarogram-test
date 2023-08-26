import React from "react";
import { BiLogOut } from "react-icons/bi";
import styles from "./styles.module.css";
import { AiOutlineFileAdd } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const navigate = useNavigate();
  return (
    <div>
      <nav className={styles.navbar} onClick={() => navigate("/add")}>
        <div className={styles.tooltip}>
          <button className={styles.white_btn1}>
            <AiOutlineFileAdd />

            <span className={styles.tooltiptext}>Add Report</span>
          </button>
        </div>

        <button className={styles.white_btn} onClick={handleLogout}>
          <BiLogOut />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
