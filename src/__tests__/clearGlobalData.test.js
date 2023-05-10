import { clearGlobalData } from '../redux/global-data/globalDataSlice';

test('clearGlobalData', () => {
  expect(clearGlobalData()).toEqual({
    type: 'globalData/clearGlobalData',
  });
});
