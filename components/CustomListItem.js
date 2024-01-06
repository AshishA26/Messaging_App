import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { ListItem, Avatar } from "react-native-elements";
import { db } from "../firebase";

// This is basically one chat in the list
const CustomListItem = ({ id, chatName, enterChat }) => {
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection("chats")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setChatMessages(snapshot.docs.map((doc) => doc.data()))
      );

    return unsubscribe;
  });

  return (
    // When chat is pressed, call the enterChat function with id and chatName parameters
    <ListItem key={id} onPress={() => enterChat(id, chatName)} bottomDivider>
      <Avatar
        rounded // rounds the profile icon
        source={{
          uri:
            chatMessages?.[0]?.photoURL ||
            "https://cdn-icons-png.flaticon.com/512/3541/3541871.png",
        }}
      />
      <ListItem.Content>
        <ListItem.Title
          style={{ fontWeight: "800" }} // Makes the chat title bold
        >
          {chatName}
        </ListItem.Title>
        <ListItem.Subtitle // Subtitle in the text that is going on inside the chat
          numberOfLines={1} // Limit number of lines to 1 in subtitle
          ellipsizeMode="tail" // puts 3 dots at end of subtitle if text is too long
        >
          {chatMessages?.[0]?.displayName}: {chatMessages?.[0]?.message}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
