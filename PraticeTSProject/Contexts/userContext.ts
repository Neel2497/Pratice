import {createContext} from 'react';

const UserContext = createContext({
  userData: {
    name: '',
    email: '',
    cellPhone: '',
  },
  click: 0,
  setClick: value => {},
  setUserData: value => {},
});

export default UserContext;
