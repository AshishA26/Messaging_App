// imports
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView } from "react-native-web";

// LoginScreen component
const LoginScreen = ({ navigation }) => {
  
  // Map the entered info into states - states is just Reacts way of saying variables
  // Essentially, it is saying use the setEmail function to set the variable "email"
  // use the setPassword function to set the variable "password"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // signIn function, is called when user presses Login
  const signIn = () => {};

  // keyboardAvoidingView is used to shift up content when keyboard on phone is opened
  return (
    <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
      <StatusBar style="light" />
      <Image // Logo that shows up on login screen
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvDQhI96KOJP4eaCohSsODK8xtaWhIUbLHFw&usqp=CAU",
        }}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}> 
        <Input // Email input box. Note: the style above says to use the styles setting under InputContainer, at the bottom of this code
          placeholder="Email" //Placeholder text in the input box
          autoFocus //When you open the app, it focuses on this input box, meaning it will auto select it
          type="email" // Setting the type of input to be email, not sure exactly...
          value={email} // Set the default text in the input box to be whatever the variable "email" is
          onChangeText={(text) => setEmail(text)} // When the text changes, make the variable "email" equal to the input box value
        />
        <Input // password input box
          placeholder="Password"
          secureTextEntry //Hides entered characters in the input box
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <Button // Login button
        containerStyle={styles.button} //Use the button style from the bottom of the code
        onPress={signIn}
        title="Login"
      />
      <Button // Register button
        onPress={() => navigation.navigate("Register")} // navigation.navigate("") is how you navigate through screens in react. "Register" is the name we set in App.js
        containerStyle={styles.button}
        type="outline"
        title="Register"
      />
      <View
        style={{ height: 100 }} // To add a bit of space b/w register button and keyboard
      />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

// Styles of different stuff
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
