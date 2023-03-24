import "./components.css";
import { Link } from "react-router-dom";
import { Diets } from "../assets/diets";
import { useState } from "react";

export const DietCards = (props) => {
    return (
        <div className={`diet-card ` + props.cardMode}>
            <button
                onClick={props.method}
                type="button"
                className={"btn-diet " + props.buttonMode}
            >
                {props.buttonMode === "button-normal" ? (
                    "ADD"
                ) : (
                    <><i className="fa-solid fa-trash-can"></i> DELETE</>
                )}
            </button>

            <img className="diet-image" src={props.image} alt="" />
            <h3>{props.name}</h3>
        </div>
    );
};

export const DisplayCard = () => {
    return (
        <div className="pick-of-week">
            <div className="left-card">
                <div className="card-head">
                    <h4>PICK OF THE WEEK</h4>
                </div>
                <div className="recipe-contents">
                    <h2 className="recipe-title">Maggie's Shawarma</h2>
                    <p className="recipe-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio natus
                        magni non expedita ea nemo voluptatibus vitae sunt? Non blanditiis
                        cum explicabo necessitatibus quasi ex voluptate praesentium laborum
                        voluptates nostrum!
                    </p>
                    <button className="btn btn-recipe">VIEW FULL RECIPE</button>
                </div>
            </div>
            <div className="right-card">
                <img
                    src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                />
            </div>
        </div>
    );
};


export const RecipeCards = (props) => {
    const [ctgIndex, setctgIndex] = useState(-1);
    function getPreferences(preference) {
        if (Object.keys(preference).length == 0) {
            return (<img src="https://cdn-icons-png.flaticon.com/512/3654/3654897.png" className="preference-img" />)
        }

        return preference.map((pref, index) => {
            let diet = Diets.filter(item => item.name == pref)
            console.log(diet[0].image)
            return (<div className="preference">
                <span className="pref-desc" hidden={(ctgIndex == index) ? false : true}>{diet[0].name}</span>
                <img key={index} src={diet[0].image} alt="" className="preference-img" onMouseOver={() => { setctgIndex(index) }} onMouseLeave={() => { setctgIndex(-1) }} />
            </div>
            )
        })
    }


    return (
        <div className="recipe-card">
            <div className="special-card">
                W.
            </div>
            <div className="contents-wrapper">
                <div className="card-title">
                    <h2>{props.title.toLowerCase()}</h2>
                </div>
                <div className="card-preferences">
                    {
                        getPreferences(props.preferences)
                    }
                </div>
                <div className="card-contents">
                    <div className="card-rating">
                        <p>by {props.author}</p>
                    </div>
                    <div className="card-btn">
                        <button id={props.id} onClick={props.clickMethod}>view recipe</button>
                    </div>
                </div>
            </div>
        </div>

    )

}
export const NoItemFound = () => {
    return (
        <div className="empty-card">
            <h4>No such item was found in our database. <Link to="/recipes" className="add-link">Wanna add it? <i className="fa-regular fa-map" style={{ marginLeft: "5px" }}></i></Link></h4>
        </div>
    )
}

export const DetailedRecipe = (props) => {
    let procedureArray = props.procedure.split(".")

    let [isVisible, setVisible] = useState(true)

    let IngredientsList = () => {
        return (
            <div className="ingredient-span-container">
                <ul>
                    {props.ingredients.map((ingredient) => {
                        return <li>{ingredient}</li>
                    })}
                </ul>
                {/* <hr style={{ width: "100%", marginTop: "0.75em" }}></hr> */}
            </div>
        )
    }
    return (
        <div className="wrapper">
            <div className="full-recipe">
                <div className="close-details">
                    <div className="recipe-head">
                        <span className="recipe"> <h3 className="title">{props.title}</h3> <p>-by {props.author}</p></span>
                        <div className="recipe-options">
                            <button className="icon-button"><i className="fa-solid fa-bookmark"></i></button>
                            <button className="icon-button"><i className="fa-solid fa-star"></i></button>
                            <button className="icon-button"><i className="fa-solid fa-circle-info"></i></button>
                        </div>
                        <div className="recipe-metadata">
                            <span>
                                <i className="fa-solid fa-clock"></i>
                                45min
                            </span>
                            <span>
                                <i className="fa-solid fa-utensils"></i>
                                2people
                            </span>
                        </div>
                    </div>

                    <button className="btn-close-tab btn-light" onClick={props.clickMethod} ><i className="fa-solid fa-xmark"></i></button>
                </div>
                <div className="recipe-jargon">
                    <div className="ingredients-section">
                        <div className="ingreds-header">
                            <h3>Ingredients</h3>
                            <button className="icon-button btn-toggle-ingredients" onClick={() => { setVisible(!isVisible) }}><i className={(isVisible) ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"}></i></button>
                        </div>
                        {(isVisible) ? <IngredientsList /> : null}

                    </div>

                    <div className="procedure-cont">
                        <h3>Procedure</h3>
                        <ul>
                            {procedureArray.map((step, index) => {
                                return <li>{step}</li>
                            })}
                        </ul>

                    </div>

                </div>

            </div>
        </div>

    )
}
export const SampleCard = () => {
    return (
        <div className="sample-card">

        </div>
    )
}