import useFetchCategories from '../../hooks/categories-hooks/useFetchCategories';
import '../../styles/Categories.css';
import Category from './Category';

const Categories = () => {
  const [categories, isLoading, error] = useFetchCategories();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Ups! Something went wrong</p>;
  }

  if (categories !== 'Categories') {
    return (
      <main className="categories-main">
        {categories.map((category) => (
          <Category
            key={category.id}
            name={category.name}
            top3={category.top_3_coins}
            marketCap={category.market_cap}
            vol24h={category.volume_24h}
            mrktCapChange24h={category.market_cap_change_24h}
          />
        ))}
      </main>
    );
  }

  return categories;
};

export default Categories;
