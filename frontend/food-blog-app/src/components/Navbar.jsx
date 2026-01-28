import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import InputForm from "./InputForm";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem("token");
  const [islogin, setIsLogin] = useState(token ? false : true);
  let user=JSON.parse(localStorage.getItem("user"))

  useEffect(() => {
    setIsLogin(token ? false : true);
  }, [token]);

  // ✅ LOGIN / LOGOUT HANDLER
  const checkLogin = () => {
    if (token) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setIsLogin(true);
    } else {
      setIsOpen(true);
    }
  };

  // ✅ PROTECTED ROUTE HANDLER (⬅️ THIS WAS WRONG BEFORE)
  const handleProtectedRoute = (e) => {
    if (islogin) {
      e.preventDefault(); // stop navigation
      setIsOpen(true);    // open login modal
    }
  };

  return (
    <>
      <header>
        <h2>food blog</h2>

        <ul>
          <li><NavLink to="/">Home</NavLink></li>

          <li>
            <NavLink to="/myRecipe" onClick={handleProtectedRoute}>
              My Recipe
            </NavLink>
          </li>

          <li>
            <NavLink to="/favRecipe" onClick={handleProtectedRoute}>
              Favorites
            </NavLink>
          </li>

          <li onClick={checkLogin}>
            <p className="login">{islogin ? "Login" : "Logout"}{user?.email ? `(${user?.email})` : ""}</p>
          </li>
        </ul>
      </header>

      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <InputForm setIsOpen={() => setIsOpen(false)} />
        </Modal>
      )}
    </>
  );
}

export default Navbar;
