import React,{useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  // 1. Track the selected category (string)
  const [selectedCategory, setSelectedCategory] = useState("All");

  // 2. Handle when user selects a new category
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value); // "Produce", "Dairy", etc.
  };

  // 3. Filter items based on selection
  const filteredItems = items.filter(item => {
    return selectedCategory === "All" || 
           item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        {/* 4. Connect the select to our state */}
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {/* 5. Render the filtered items */}
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

