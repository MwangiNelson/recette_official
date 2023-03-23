import React, { useState, useEffect } from 'react'
import "./allrecipes.css"
import { RecipeCards, NoItemFound, DetailedRecipe, SampleCard } from '../../components/cards'
import { db } from '../../firebase'
import { collection, query, onSnapshot } from "firebase/firestore";

const AllRecipes = () => {
  const [recettes, setRecettes] = useState([])
  const [queryText, setQuery] = useState("")
  const filteredItems = recettes.filter(item => { return item.title.toLowerCase().replace(" ", "").includes(queryText.toLowerCase().replace(" ", "")) })
  const [selectedRecipes, setSelectedRecipes] = useState([])
  const [renderTrigger, setRenderTrigger] = useState(false)

  useEffect(() => {
    const q = query(collection(db, 'recettes'))
    const unsubscribe = onSnapshot(q, snapshot => {
      let recipesArr = []
      snapshot.forEach(doc => {
        recipesArr.push({ ...doc.data(), id: doc.id })
      })

      setRecettes(recipesArr)
    })
  }, [])

  const RecipesDisplay = () => {
    return (
      <div className="recipes-body-section">

        <div className="all-recipes-container">
          <div className="recipe-cards-container">
            {(filteredItems.length == 0) ? <NoItemFound /> : filteredItems.map((item, index) => { return (<RecipeCards key={index} title={item.title} author={item.author} id={item.id} preferences={item.preferences} clickMethod={() => { setSelectedRecipes(item) }} />) })}
          </div>
        </div>
      </div>

    )
  }


  return (
    <section className="all-recipes">
      <div className="filter"></div>
      <div className="recipes-display">
        <div className="search-bar-container">
          <div className="search-bar">
            <input type="search" value={queryText} className='input-field' onChange={(e) => { setQuery(e.target.value) }} />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="filter-container">
            <button className="btn btn-add">FILTER <i className="fa-solid fa-filter"></i></button>
          </div>
        </div>
        {(!(selectedRecipes.length === 0)) ? <DetailedRecipe procedure={selectedRecipes.procedure} title={selectedRecipes.title} author={selectedRecipes.author} ingredients={selectedRecipes.ingredients} clickMethod={() => { setSelectedRecipes([]) }} /> : <RecipesDisplay />}
      </div>

    </section>
  )
}

export default AllRecipes