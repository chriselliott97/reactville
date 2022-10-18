import Ingredient from './Ingredient'

const BurgerStack = (props) => {

  if (!props.ingredients.length) return <ul className="burger-stack">No Ingredients in burger!</ul>

  return (
    <ul className="burger-stack">
      {props.ingredients.map((ingredient, idx) => (
        <Ingredient
          key={idx}
          idx={idx}
          isList={true}
          ingredient={ingredient}
          removeFromBurger={props.removeFromBurger}
        />
      ))}
    </ul>
  )
}

export default BurgerStack