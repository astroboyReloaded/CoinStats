import { setSearch } from '../redux/all-coins/allCoinsSlice';

test('setSearch', () => {
  expect(setSearch({ search: 'bitcoin', results: [] })).toEqual({
    type: 'allCoins/setSearch',
    payload: { search: 'bitcoin', results: [] },
  });
});
