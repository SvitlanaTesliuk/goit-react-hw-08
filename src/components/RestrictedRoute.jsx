import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PropTypes } from 'prop-types'; // Імпорт PropTypes
import { selectIsLoggedIn } from '../redux/auth/selectors';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};


RestrictedRoute.propTypes = {
  component: PropTypes.elementType.isRequired, 
  redirectTo: PropTypes.string,               
};

export default RestrictedRoute;