import '../../styles/burger.css'
import { useState } from 'react'

import IngredientList from './IngredientList'
import BurgerStack from './BurgerStack'

import { ingredients } from '../../data/burger-data'

const BurgerShop = () => {
  console.log(ingredients)
  const [stack, setStack] = useState([]) 

  const addToBurger = (ingredient) => {
    setStack([ingredient, ...stack])
  }

  const removeFromBurger = (idx) => {
    setStack(stack.filter((ing, i) => i !== idx))
  }
  
  return (
    <div className="burger-shop">
      <nav>
        <h1>Burger Shop</h1>
        <button onClick={() => setStack([])}>Clear Order</button>
      </nav>
      <section>
        <IngredientList ingredients={ingredients}  addToBurger={addToBurger} />
        <BurgerStack ingredients={stack} removeFromBurger={removeFromBurger}/>
      </section>
    </div>
  )
}

export default BurgerShop