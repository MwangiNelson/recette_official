import React, { useEffect, useState } from "react";
// import { db } from '../firebase'
// import { query, collection, onSnapshot, addDoc } from 'firebase/firestore'
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DisplayCard } from "../components/cards";
import { LoginForm } from "./login";
import "./home.css";

function Home() {
  function notify() {
    toast.info("Welcome to RECETTE, explore recipes", {
      position: "top-center",
      autoClose: 4999,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    return;
  }

  

  return (
    <section className='home'>
      <div className="main-body">
        <ToastContainer />


        <section className="hero-section">
          <div className="hero-text-container">
            <h1>RECETTE</h1>
            <img src="images/EGGS.png" alt="" />
          </div>
          <div className="hero-grid">
            <div className="grid-text browse">
              <h3>BROWSE</h3>
            </div>
            <div className="grid-text generate">
              <h3>GENERATE</h3>
            </div>
            <div className="grid-btn">
              <Link to="recipes" style={{ width: "75%" }}>
                <button className="btn-hero">
                  GET STARTED <i className="fa-solid fa-angles-right blue"></i>
                </button>
              </Link>
            </div>
            <div className="grid-summary">
              <h2>250+</h2>
              <p>Recipes</p>
            </div>
          </div>
          <div className="scrolldown">
            <div className="chevrons">
              <div className="chevrondown"></div>
              <div className="chevrondown"></div>
            </div>
          </div>
        </section>
        <section className="body-section">
          <DisplayCard />
        </section>
      </div>
    </section>
  );
}

export default Home;
