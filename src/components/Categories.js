import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
        {console.log(categories)}
        {categories.map((category) => (
          <Link to={`/categories/category/${category.id}`} key={category.id}>
            <article>
              <h1>{category.name}</h1>
              {category.top_3_coins.map((image) => (
                <img key={image} src={image} alt={image} />
              ))}
              <p>
                <data>{`24h vlume: $ ${category.volume_24h}`}</data>
              </p>
            </article>
          </Link>
        ))}
      </main>
    );
  }

  return categories;
};

export default Categories;
