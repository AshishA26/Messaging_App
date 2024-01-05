import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { KeyboardAvoidingView } from "react-native-web";
import { StatusBar } from "expo-status-bar";
import { Button, Input, Text } from "react-native-elements";
import { auth } from "../firebase";

// Instead of importing Text from react-native, we import it from react-native-elements
// to get the h3, h2, etc properties

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // Just before the screen loads, do something
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Back to Login", //Only for IOS though
    });
  }, [navigation]);

  // Register function, is called when user presses Register
  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password) //Creates a user with the entered email and password
      //The above line creates a authUser, and once that comes back, do:
      .then((authUser) => {
        authUser.user.updateProfile({
          //Update profile of that authUser - update name and photo
          displayName: name,
          photoURL:
            imageUrl ||
            "https://cdn-icons-png.flaticon.com/512/3541/3541871.png", //If no entered photo url, use this default one
        });
      })
      .catch((error) => alert(error.message)); //If there is any error, show a error message
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />

      <Text h3 style={{ marginBottom: 50 }}>
        Create a account
      </Text>

      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          autofocus
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          type="password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder="Profile Picture URL (Optional)"
          type="text"
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
          onSubmitEditing={register}
        />
      </View>

      <Button // Login button
        containerStyle={styles.button} //Use the button style from the bottom of the code
        raised
        onPress={register} //When button is pressed, call the register function
        title="Register" // Name of button
      />

      <View
        style={{ height: 100 }} // To add a bit of space b/w register button and keyboard
      />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

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
