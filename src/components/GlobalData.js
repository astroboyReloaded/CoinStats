// import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchGlobalData } from '../redux/global-data/globalDataSlice';

const GlobalData = () => {
  const globalData = 'Global Data';
  // const { globalData, isLoading, error } = useSelector((state) => state.globalData);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchGlobalData());
  // }, []);

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }
  // if (error) {
  //   return <p>Ups! Something went wrong...</p>;
  // }
  if (globalData !== 'Global Data') {
    return (
      <main />
    );
  }
  return <h1>GlobalData</h1>;
};

export default GlobalData;
