import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  //This is the way we want to use state and action
  //state === {counter: number}
  //action === {type: change_counter payload: + 1 || -1}

  switch (action.type) {
    case "Increase":
      return { ...state, counter: state.counter + action.payload };
    case "Decrease":
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: "Increase", payload: 1 });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "Decrease", payload: 1 });
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
