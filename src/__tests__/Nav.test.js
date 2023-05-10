import renderer from 'react-test-renderer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import View from '../components/View';

it('renders View', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<View />} />
        </Routes>
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
