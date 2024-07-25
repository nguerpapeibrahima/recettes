import axios from 'axios';
import { LOGIN, connectUser } from '../actions/user';

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      // const { user: { email, password } } = store.getState(); // Access the user state
      // axios.post('http://localhost:3001/login', { email, password })
      //   .then((response) => {
      //     // Dispatch action to indicate successful login
      //     store.dispatch(connectUser(
      //       response.data.pseudo,
      //       response.data.logged,
      //       response.data.token,
      //     ));
      //     console.log(response);
      //   })
      //   .catch((error) => {
      //     // Dispatch action to indicate login erro
      //     console.log(error);
      //   });
      break;
    }
    default:
      next(action);
      break;
  }
};

export default user;
// bouclierman@herocorp.io
