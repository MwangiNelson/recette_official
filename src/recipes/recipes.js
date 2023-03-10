import React, { useState, useEffect, useRef } from "react";
import "./recipe.css";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { Diets } from "./diets";
import { DietCards } from "../components/cards";
import { collection, addDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recipes = () => {
  const [visibility, setVisible] = useState(false);

  const [newIngredient, setNewIngredient] = useState([]);
  const [ingredientsList, updateIngredientsList] = useState([]);
  const [preference, setPreference] = useState([]);
  const [name, setName] = useState([]);
  const [title, setTitle] = useState("");
  const [procedure, setProcedure] = useState("");
  let data = useRef({});

  const collectData = () => {
    data.name = name;
    data.title = title;
    data.ingredients = ingredientsList;
    data.procedure = procedure;
    data.timeStamp = new Date().toLocaleString();
    data.preference = preference;
  };


  const clearForm = () => {
    setName([]);
    setTitle("");
    setProcedure("");
    updateIngredientsList([]);
    setNewIngredient([]);
    setPreference([])
  };
  const storeData = async () => {

    collectData()

    await addDoc(collection(db, "recipes"), {
      author: data.name,
      procedure: data.procedure.replace("/\n/gm", "."),
      ingredients: data.ingredients,
      title: data.title,
      creationTime: data.timeStamp,
      preferences:data.preference
    });

    toast.success("Recipe created successfully", {
      position: "top-center",
      autoClose: 5000,
    });
  };
  const createRecipe = (e) => {
    e.preventDefault(e);
    const validated = (obj) => {
      for (let i in obj) {
        if (obj[i] === "" || obj[i].length === 0) {
          toast.warn(`Please fill in the ${i} fields`, {
            position: "top-center",
            autoClose: 4000,
          });
          return false;
        }
      }
      return true;
    };

    if (validated(data)) {
      storeData();
      clearForm();
    }
  };

  function deleteItem(id) {
    updateIngredientsList(ingredientsList.filter((item, i) => i !== id));
  }

  function getCardMode(cardName) {
    if (preference.indexOf(cardName) == -1) {
      return { card_name: "diet-card-normal", button_name: "button-normal" }
    } else {
      return { card_name: "diet-card-selected", button_name: "button-selected" }
    }
  }

  return (
    <section className="recipe-add-section">
      <ToastContainer />
      <img src="images/burger.png" className="burger" alt="" />
      <div className="main-section">
        <div className="section-head">
          <h1>ADD RECIPE</h1>
          <div className="nav-btn-holder">
            <Link to="/all-recipes">
              {" "}
              <button className="btn-navigate">view all recipes</button>
            </Link>
          </div>
        </div>
        <div className="form-container">
          <form className="recipe-form" onSubmit={createRecipe}>
            <div className="form-input">
              <div className="label-holder">
                <label htmlFor="title">Recipe author:</label>
              </div>
              <div className="input-field-container">
                <input
                  type="text"
                  className="input-field"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <small>Your name goes here.</small>
              </div>
            </div>
            <div className="form-input">
              <div className="label-holder">
                <label htmlFor="title">Recipe title:</label>
              </div>
              <div className="input-field-container">
                <input
                  type="text"
                  className="input-field"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
                <small>Add your recipe's name here.</small>
              </div>
            </div>
            <div className="form-input">
              <div className="label-holder">
                <label htmlFor="title">Ingredients:</label>
              </div>
              <div className="input-field-container">
                <div className="ingredients-input">
                  <input
                    type="text"
                    className="input-field"
                    onChange={(e) => {
                      setNewIngredient(e.target.value);
                    }}
                  />
                  <button
                    className="btn btn-add"
                    type="button"
                    onClick={() => {
                      updateIngredientsList([
                        ...ingredientsList,
                        newIngredient,
                      ]);
                    }}
                  >
                    ADD
                  </button>
                </div>
                <small>Your ingrdients will appear here</small>
                <div className="ingredients-list-container">
                  {ingredientsList.map((item, index) => {
                    return (
                      <span className="ingredient">
                        {item}
                        <button type="button" onClick={() => deleteItem(index)}>
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="form-input">
              <div className="label-holder">
                <label htmlFor="title">Procedure:</label>
              </div>
              <div className="input-field-container">
                <textarea
                  rows="7"
                  value={procedure}
                  onChange={(e) => {
                    setProcedure(e.target.value);
                  }}
                ></textarea>
              </div>
            </div>
            <div className="optional-container">
              <div className="optional-toggle">
                <h4>OPTIONALS</h4>
                <button
                  className="toggle-btn"
                  type="button"
                  onClick={() => {
                    setVisible(!visibility);
                  }}
                >
                  <i className="fa-solid fa-angles-down"></i>
                </button>
              </div>
              <div className={visibility ? "optionals" : "invisible"}>
                <div className="form-input">
                  <div className="label-holder">
                    <label htmlFor="">Preferences:</label>
                  </div>
                  <div className="diets-container">
                    {Diets.map((item, index) => {
                      let Modes = getCardMode(item.name);
                      return (
                        <DietCards
                          id={index}
                          cardMode={Modes.card_name}
                          buttonMode={Modes.button_name}
                          image={item.image}
                          name={item.name}
                          method={() => {

                            if (preference.indexOf(item.name) == -1) {
                              setPreference(prefs => { return [...prefs, item.name] })
                            } else {
                              let newPrefs = preference.filter(items => items != item.name)
                              setPreference(newPrefs)
                            }
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="submit-btn-container">
              <button className="btn btn-submit" type="submit">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Recipes;
