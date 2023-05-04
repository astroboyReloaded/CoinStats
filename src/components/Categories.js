import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategories } from '../redux/categories/categoriesSlice';
import '../styles/Categories.css';

const Categories = () => {
  const { categories, isLoading, error } = useSelector(
    (state) => state.categories,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (categories !== 'Categories') return;
    dispatch(fetchCategories());
  }, [dispatch, categories]);

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
                <img key={image} src={image} alt={image} />
              ))}
            </div>
            <p>
              Market Cap:
            </p>
            <data>{`$${category.market_cap}`}</data>
            <p>
              24h vlume:
            </p>
            <data>{`$${category.volume_24h}`}</data>
            <p>
              MC change 24h:
            </p>
            <data>{`$${category.market_cap_change_24h}`}</data>
          </article>
        ))}
      </main>
    );
  }

  return categories;
};

export default Categories;
