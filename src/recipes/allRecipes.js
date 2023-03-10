import React, { useState, useEffect } from 'react'
import "./allrecipes.css"
import { RecipeCards, NoItemFound, DetailedRecipe, SampleCard } from '../components/cards'
import { db } from '../firebase'
import { collection, query, onSnapshot } from "firebase/firestore";

const AllRecipes = () => {
  const [recettes, setRecettes] = useState([])
  const [queryText, setQuery] = useState("")
  const filteredItems = recettes.filter(item => { return item.title.toLowerCase().replace(" ", "").includes(queryText.toLowerCase().replace(" ", "")) })
  const [selectedRecipes, setSelectedRecipes] = useState([])
  const [renderTrigger, setRenderTrigger] = useState(false)

  useEffect(() => {
    const q = query(collection(db, 'recipes'))
    const unsubscribe = onSnapshot(q, snapshot => {
      let recipesArr = []
      snapshot.forEach(doc => {
        recipesArr.push({ ...doc.data(), id: doc.id })
      })

      setRecettes(recipesArr)
    })
  }, [])


  return (
    <section className="all-recipes">
      {(!(selectedRecipes.length === 0)) ? <DetailedRecipe procedure={selectedRecipes.procedure} title={selectedRecipes.title} author={selectedRecipes.author} ingredients={selectedRecipes.ingredients} clickMethod={() => { setSelectedRecipes([]) }} /> : null}
      <div className="filter">

      </div>
      <div className={((selectedRecipes.length === 0)) ? "recipes-body-section" : "invisible"}>
        <div className="search-bar-container">
          <div className="search-bar">
            <input type="search" value={queryText} className='input-field' onChange={(e) => { setQuery(e.target.value) }} />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="filter-container">
            <button className="btn btn-add">FILTER <i className="fa-solid fa-filter"></i></button>
          </div>
        </div>
        <div className="all-recipes-container">
          <div className="recipe-cards-container">
            {(filteredItems.length == 0) ? <NoItemFound /> : filteredItems.map((item, index) => { return (<RecipeCards title={item.title} author={item.author} id={item.id} preferences={item.preferences} clickMethod={() => { setSelectedRecipes(item) }} />) })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AllRecipes