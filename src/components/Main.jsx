export default function Main() {
    const ingredients = ["potato" ,"tomato", "onion", "garlic", "carrot", "celery", "bellPepper", "spinach", "kale", "broccoli"];
    const ingredientsList = ingredients.map(ingredient=> ( <li key={ingredient}>{ingredient}</li>));
    
    return (
        <main>
            <form className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                />
                <button onClick={e=>console.log("button clicked")}>Add ingredient</button>
            </form>
                <ul>{ingredientsList}</ul>
        </main>
    )
}