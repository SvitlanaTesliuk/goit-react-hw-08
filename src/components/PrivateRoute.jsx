import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PropTypes } from 'prop-types'; 
import { selectIsLoggedIn } from '../redux/auth/selectors';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Component /> : <Navigate to={redirectTo} />;
};


PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired, 
  redirectTo: PropTypes.string,               
};

export default PrivateRoute;