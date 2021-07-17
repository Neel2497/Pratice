import React, {useState} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  CounterDecrement,
  CounterIncrement,
} from '../redux/action/counter-action';
import {AddTodo, DeleteTodo} from '../redux/action/todo-action';
import {RootReducerInterface} from '../redux/types';

const PostScreen = () => {
  const {
    counter: {count},
    todo: {todo},
  } = useSelector((state: RootReducerInterface) => state);
  const dispatch = useDispatch();
  const [text, settext] = useState<string>('');

  const AddToList = () => {
    if (text) {
      dispatch(AddTodo({id: todo.length + 1, text: text}));
      settext('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView nestedScrollEnabled={true}>
        <Text>Post Screen: {count}</Text>
        <Button title={'+'} onPress={() => dispatch(CounterIncrement())} />
        <Button title={'-'} onPress={() => dispatch(CounterDecrement())} />

        <View style={styles.seperatorLine} />
        <TextInput
          value={text}
          onChangeText={value => settext(value)}
          defaultValue={'test'}
          style={styles.inputStyle}
          onSubmitEditing={AddToList}
          autoCorrect={false}
          autoCompleteType={'off'}
        />

        <Button title={'Add To List'} onPress={AddToList} />

        {todo.map(item => (
          <View key={item.index} style={styles.listContainer}>
            <Text style={styles.listIndex}>{`${item.index}) `}</Text>
            <Text style={styles.listText}>{item.value}</Text>
            <Button
              onPress={() => dispatch(DeleteTodo({id: item.index}))}
              title={'Remove'}
            />
          </View>
        ))}

        <View style={styles.seperatorLine} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  } as ViewStyle,
  seperatorLine: {
    backgroundColor: 'black',
    height: 5,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    marginVertical: 10,
  } as ViewStyle,
  inputStyle: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 3,
    margin: 10,
  } as TextStyle,
  listContainer: {flex: 1, flexDirection: 'row'} as ViewStyle,
  listText: {flex: 1} as TextStyle,
  listIndex: {width: 20} as TextStyle,
});
