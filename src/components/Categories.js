import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategories } from '../redux/categories/categoriesSlice';

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
      <main>
        {categories.map((category) => (
          <article key={category.id}>
            <h1>{category.name}</h1>
            {category.top_3_coins.map((image) => (
              <img key={image} src={image} alt={image} />
            ))}
            <p>
              <data>{`Market Cap: $${category.market_cap}`}</data>
            </p>
            <p>
              <data>{`24h vlume: $ ${category.volume_24h}`}</data>
            </p>
            <p>
              <data>{`MC change 24h: $ ${category.market_cap_change_24h}`}</data>
            </p>
          </article>
        ))}
      </main>
    );
  }

  return categories;
};

export default Categories;
