// import { useSelector, useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { useEffect } from 'react';
// import { fetchCoins } from '../redux/category/categorySlice';

// const Category = () => {
//   const { id } = useParams();
//   console.log(id);
//   const { category, isLoading, error } = useSelector((state) => state.category);
//   console.log(category);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchCoins());
//   }, []);

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }
//   if (error) {
//     return <p>Ups! Something went wrong...</p>;
//   }
//   // if (category !== 'Category') {
//   //   return (
//   //     <main>
//   //     </main>
//   //   );
//   // }
//   return <h1>Category</h1>;
// };

// export default Category;
