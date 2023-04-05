import renderer from 'react-test-renderer';
import { BrowserRouter, Link } from 'react-router-dom';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter basename="/">
        <Link to="http://www.facebook.com">Facebook</Link>
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
