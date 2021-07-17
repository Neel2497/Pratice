/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {createStore} from 'redux';
import RootReducer from './App/redux/reducer';
import PostScreen from './App/Screens/Post-Screen';
// import ProfileScreen from './App/Screens/Profile-Screen';
import UserContext from './Contexts/userContext';
import {Provider} from 'react-redux';

const App = () => {
  const [userData, setUserData] = useState({
    name: 'Neel',
    email: 'patanwadia2497@gmail.com',
    cellPhone: '7048414354',
  });
  const [click, setClick] = useState(0);

  const store = createStore(RootReducer);
  return (
    <UserContext.Provider value={{userData, setUserData, click, setClick}}>
      <Provider store={store}>
        <PostScreen />
      </Provider>
      {/* <ProfileScreen /> */}
    </UserContext.Provider>
  );
};

export default App;
