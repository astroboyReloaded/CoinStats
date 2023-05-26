import useFetchCategories from '../hooks/categories-hooks/useFetchCategories';
import '../styles/Categories.css';

const Categories = () => {
  const [categories, isLoading, error] = useFetchCategories();
  console.log(categories);
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
          <article key={category.id} className="category">
            <h1 className="category-name">{category.name}</h1>
            <div>
              {category.top_3_coins.map((image) => (
                <img key={Math.random()} src={image} alt={image} />
              ))}
            </div>
            <p className="categories-data-title">
              Market Cap:
            </p>
            <data className="categories-data">{`$${category.market_cap?.toLocaleString()}`}</data>
            <p className="categories-data-title">
              24h vlume:
            </p>
            <data className="categories-data">{`$${category.volume_24h?.toLocaleString()}`}</data>
            <p className="categories-data-title">
              MC change 24h:
            </p>
            <data className={`categories-data ${category.market_cap_change_24h > 0 ? 'green' : 'red'}`}>{`$${category.market_cap_change_24h?.toLocaleString().replace('-', '')}`}</data>
          </article>
        ))}
      </main>
    );
  }

  return categories;
};

export default Categories;
