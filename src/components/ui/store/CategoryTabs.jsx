export const CategoryTabs = ({
  categories,
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <div className="bg-[#556030] border-b border-lime-900 px-13 overflow-x-auto">
      <div className="flex gap-1 min-w-max">
        <button
          onClick={() => onSelectCategory(null)}
          className={`px-4 py-3 font-medium whitespace-nowrap transition-colors border-1 border-lime-900 ${
            activeCategory === null
              ? "border-black text-[#FAF0E6]"
              : "border-transparent text-[#FAEBD7] hover:text-gray-300"
          }`}
        >
          Todos
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`px-4 py-3 font-medium whitespace-nowrap transition-colors border-1 border-lime-900  ${
              activeCategory === category.id
                ? "border-black text-[#FAF0E6]"
                : "border-transparent text-[#FAEBD7] hover:text-gray-300"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};
