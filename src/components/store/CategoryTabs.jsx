export const CategoryTabs = ({ categories, activeCategory, onSelectCategory }) => {
  return (
    <div className="bg-white border-b border-gray-200 px-6 overflow-x-auto">
      <div className="flex gap-1 min-w-max">
        <button
          onClick={() => onSelectCategory(null)}
          className={`px-4 py-3 font-medium whitespace-nowrap transition-colors border-b-2 ${
            activeCategory === null
              ? 'border-black text-black'
              : 'border-transparent text-gray-600 hover:text-gray-900'
          }`}
        >
          Todos
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`px-4 py-3 font-medium whitespace-nowrap transition-colors border-b-2 ${
              activeCategory === category.id
                ? 'border-black text-black'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

