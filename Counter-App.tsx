import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

 const CounterApp=()=>{
  const [count, setCount] = useState(0);
  const increment =()=>setCount(prev=> prev+1);
  const decrement =()=>setCount(prev=> (prev>0 ? prev-1:0));
  const reset =()=>setCount(0);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter App</Text>

      <Text style={styles.count}>{count}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.increment]} onPress={increment}>
          <Text style={styles.buttonText}>Increment</Text>
        </TouchableOpacity>
     
     
     <TouchableOpacity style={[styles.button, styles.decrement]} onPress={decrement}>
          <Text style={styles.buttonText}>Decrement</Text>
        </TouchableOpacity>


       <TouchableOpacity style={[styles.button, styles.reset]} onPress={reset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding:28,
  },
  title: {
    fontSize: 28,
    color: "#333",
    marginBottom: 40,
    fontWeight:'bold',
  },
  count: {
    fontSize: 70,
    color: "blue",
    marginBottom: 40,
    fontWeight:'bold',
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 15,
    marginHorizontal: 10,
    elevation:3,
    alignItems:'center',
    justifyContent:'center',
  },
  increment: {
    backgroundColor: "green",
  },
  decrement: {
    backgroundColor: "blue",
  },
  reset: {
    backgroundColor: "red",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});
export default CounterApp;
