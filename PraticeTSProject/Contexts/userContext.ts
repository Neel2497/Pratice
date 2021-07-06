/* eslint-disable @typescript-eslint/no-unused-vars */
import {createContext} from 'react';

interface updateUserDataType {
  name: string;
  email: string;
  cellPhone: string;
}
const UserContext = createContext({
  userData: {
    name: '',
    email: '',
    cellPhone: '',
  },
  click: 0,
  setClick: (value: number) => {},
  setUserData: (value: updateUserDataType) => {},
});

export default UserContext;
