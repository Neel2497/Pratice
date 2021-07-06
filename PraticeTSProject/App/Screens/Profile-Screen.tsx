import React, {useContext} from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import UserContext from '../../Contexts/userContext';

const ProfileScreen = () => {
  const {userData, setUserData, click, setClick} = useContext(UserContext);

  const onIncrement = () => {
    let prevValue = click;
    prevValue += 10;

    setClick(prevValue++);
  };

  return (
    <SafeAreaView>
      <Text>{JSON.stringify(userData, null, 2)}</Text>
      <Text>{JSON.stringify(click)}</Text>

      <Button
        onPress={() =>
          setUserData({
            name: 'Neel Patanwadia',
            email: 'neel2497@icloud.com',
            cellPhone: '7383483458',
          })
        }
        title={'Update'}
        color={'blue'}
      />
      <Button title={'Increment'} onPress={() => onIncrement()} />
    </SafeAreaView>
  );
};

export default ProfileScreen;
