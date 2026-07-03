function CategoryFilter({ categories, selected, onSelect }) {

  const toggleCategory = (category) => {
    if (selected.includes(category)) {
      onSelect(selected.filter(c => c !== category));
    } else {
      onSelect([...selected, category]);
    }
  };

  return (
    <div className="flex flex-wrap gap-3 mb-6">

      <button
        onClick={() => onSelect([])}
        className={`px-5 py-2.5 font-medium rounded-full border ${
          selected.length === 0
            ? "bg-blue-600 text-white"
            : "bg-white"
        }`}
      >
        All
      </button>

      {categories.map(category => (
        <button
          key={category.category}
          onClick={() => toggleCategory(category.category)}
          className={`px-5 py-2.5 font-medium rounded-full border ${
            selected.includes(category.category)
              ? "bg-blue-600 text-white"
              : "bg-white"
          }`}
        >
          {category.category}
        </button>
      ))}

    </div>
  );
}

export default CategoryFilter;