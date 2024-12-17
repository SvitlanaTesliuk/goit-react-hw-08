
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import { Button, Typography } from "@mui/material";
import styles from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={styles.container}>
      <Typography variant="h6" className={styles.greeting}>
        Welcome, {user?.name || 'User'}!
      </Typography>
      <Button
        className={styles.logoutButton}
        onClick={() => dispatch(logout())}
        variant="contained"
        color="error"
      >
        Logout
      </Button>
    </div>
  );
};

export default UserMenu;