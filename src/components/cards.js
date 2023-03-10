import "./components.css";
import { Link } from "react-router-dom";
import { Diets } from "../recipes/diets";

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
                    <i className="fa-solid fa-trash-can"></i>
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

    return (
        <div className="recipe-card">
            <div className="contents-wrapper">
                <div className="card-title">
                    <h2>{props.title.toUpperCase()}</h2>
                </div>
                <div className="card-preferences">
                    <p>{props.preferences}</p>
                    {props.preferences.map((pref,index) => {
                        let diet = Diets.filter(item => item.name == pref)
                        return (
                            <img src={diet.image} alt="" className="preference-img" />
                        )
                    })}
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
            <h4>No such item was found in our database. <Link to="/recipes" className="add-link">Wanna add it? <i class="fa-regular fa-map" style={{ marginLeft: "5px" }}></i></Link></h4>
        </div>
    )
}

export const DetailedRecipe = (props) => {
    let procedureArray = props.procedure.split(".")
    return (
        <div className="wrapper" >
            <div className="full-recipe">
                <div className="close-details">
                    <button className="btn-close-tab" onClick={props.clickMethod} ><i className="fa-solid fa-xmark"></i></button>
                </div>
                <div >
                    <h3 className="title">{props.title}</h3>
                </div>
                <h3>Ingredients:</h3>
                <div className="ingredient-span-container">
                    {props.ingredients.map((ingredient) => {
                        return <span className="ingredient-span">{ingredient}</span>
                    })}
                </div>
                <div className="procedure-cont">
                    <h3>Procedure</h3>
                    <ul>
                        {procedureArray.map((step, index) => {
                            return <li>{step}</li>
                        })}
                    </ul>
                </div>
                <div className="owner">
                    <p>by {props.author}</p>
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