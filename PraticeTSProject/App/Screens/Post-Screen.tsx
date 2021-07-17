import React, {useEffect, useState} from 'react';
import {
  Button,
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
import {getPost} from '../redux/action/post-action';
import {AddTodo, DeleteTodo} from '../redux/action/todo-action';
import {RootReducerInterface} from '../redux/types';

const PostScreen = () => {
  const {
    counter: {count},
    todo: {todo},
    postReducer: {posts, isLoading: postLoading, error: postError},
  } = useSelector((state: RootReducerInterface) => state);
  const dispatch = useDispatch();
  const [text, settext] = useState<string>('');

  useEffect(() => {
    console.tron.log(posts);
  }, [posts]);

  const AddToList = () => {
    if (text) {
      dispatch(AddTodo({id: todo.length + 1, text: text}));
      settext('');
    } else {
      dispatch(getPost());
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

        {posts.map((value, index) => (
          <View key={index} style={styles.renderContainer}>
            <Text>{`User Id: ${value.userId}`}</Text>
            <Text>{`Body: ${value.body}`}</Text>
            <Text>{`Title: ${value.title}`}</Text>
          </View>
        ))}
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
  renderContainer: {
    flex: 1,
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 10,
    paddingVertical: 5,
  } as ViewStyle,
});
