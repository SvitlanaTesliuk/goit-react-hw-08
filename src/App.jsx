import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect, Suspense} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from "react-hot-toast";
import { refreshUser } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/selectors';
import PrivateRoute from './components/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute';
import Layout from './components/Layout';
import './App.css';



const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <p>Loading...</p>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Toaster position="top-right" reverseOrder={false} />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RestrictedRoute component={RegistrationPage} redirectTo="/contacts" />} />
        <Route path="/login" element={<RestrictedRoute component={LoginPage} redirectTo="/contacts" />} />
        <Route path="/contacts" element={<PrivateRoute component={ContactsPage} redirectTo="/login" />} />
      </Route>
    </Routes>
    </Suspense>
  );
}

export default App;