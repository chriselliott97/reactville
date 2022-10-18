import Ingredient from "./Ingredient"

const IngredientList = (props) => {
	return (
		<ul className="burger-stack">
      {props.ingredients.map((ingredient, idx) =>
			<Ingredient
				key={idx}
				isList={true}
				addToBurger={props.addToBurger}
				ingredient={ingredient}
			/>
		)}
		</ul>
	)
}

export default IngredientList