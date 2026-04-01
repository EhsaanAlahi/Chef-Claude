export default function Main() {
    const ingredients = ["potato" ,"tomato", "onion", "garlic", "carrot", "celery", "bellPepper", "spinach", "kale", "broccoli"];
    const ingredientsList = ingredients.map(ingredient=> ( <li key={ingredient}>{ingredient}</li>));
    
    function handleSubmit (event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient");
        ingredients.push(newIngredient);
        
        

    }
    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name= "ingredient"
                />
                <button >Add ingredient</button>
            </form>
                <ul>{ingredientsList}</ul>
        </main>
    )
}