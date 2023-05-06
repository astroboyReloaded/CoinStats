import { fetchCategories } from '../redux/categories/categoriesSlice';

describe('fetchCategories', () => {
  it('should fetch categories', async () => {
    const dispatch = jest.fn();
    const getState = jest.fn();
    const extra = {};
    const response = await fetchCategories()(dispatch, getState, extra);
    expect(response.type).toEqual('categories/fetchCategories/fulfilled');
  });
});
