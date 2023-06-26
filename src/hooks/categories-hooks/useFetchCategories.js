import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategories } from '../../redux/categories/categoriesSlice';

const useFetchCategories = () => {
  const { categories, isLoading, error } = useSelector(
    (state) => state.categories,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (categories !== 'Categories') return;
    dispatch(fetchCategories());
  }, [dispatch, categories]);

  return [categories, isLoading, error];
};

export default useFetchCategories;
