// Imports
import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { db } from "../firebaseConfig";

const AddChatScreen = ({ navigation }) => {
  // Create a "input" variable that is set when setInput is called
  const [input, setInput] = useState("");

  useLayoutEffect(() => {
    // Header properties
    navigation.setOptions({
      title: "Add a new chat",
      headerBackTitle: "Chats",
    });
  }, [navigation]);

  // createChat function, when called, it adds the chat to the database
  // then pushes the user back to the home page.
  // Function is async because it should be adding the chat to the database without
  // causing any lag in the UI.
  const createChat = async () => {
    await db
      .collection("chats")
      .add({
        chatName: input,
      })
      .then(() => {
        navigation.goBack();
      })
      .catch((error) => alert(error));
  };

  return (
    <View style={styles.container}>
      <Input // Chat name input box
        placeholder="Enter a chat name"
        autoFocus
        value={input}
        onChangeText={(text) => setInput(text)}
        onSubmitEditing={createChat}
        leftIcon={
          // Put an icon on the left of the chat box
          <Icon name="wechat" type="antdesign" size={24} color="" black />
        }
      />
      <Button disabled={!input} onPress={createChat} title="Create new chat" />
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 30,
    backgroundColor: "white",
  },
});
