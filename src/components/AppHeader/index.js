import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/logo.png';
import LoginForm from '../LoginForm';
import './style.scss';
import { changeFieldValue, login, logout } from '../../actions/user';

function AppHeader() {
  const dispatch = useDispatch();
  const { email, password, isLogged } = useSelector((state) => state.user);

  const handleChangeField = (name, value) => {
    dispatch(changeFieldValue(name, value));
  };
  const handleLogin = () => {
    dispatch(login());
    console.log('handleLogin');
    // Implement login logic
  };

  const handleLogout = () => {
    dispatch(logout());
    // Implement logout logic
  };

  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="Logo oRecipes" />
      <LoginForm
        email={email}
        password={password}
        isLogged={isLogged}
        changeField={handleChangeField}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
    </header>
  );
}

export default AppHeader;
