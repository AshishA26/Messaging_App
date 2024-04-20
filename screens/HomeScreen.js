// Imports
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import CustomListItem from "../components/CustomListItem";
import { Avatar } from "react-native-elements";
import { auth, db } from "../firebaseConfig";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";

// When navigation brings user to the home screen:
const HomeScreen = ({ navigation }) => {
  const [chats, setChats] = useState([]);

  // Function to sign user out, replaces screen with Login screen and signs user out
  const signOutUser = () => {
    auth.signOut().then(() => {
      navigation.replace("Login");
    });
  };

  // Load chats onto home page
  useEffect(() => {
    const unsubscribe = db.collection("chats").onSnapshot((snapshot) =>
      setChats(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    return unsubscribe;
  }, []);

  // Header stuff
  useLayoutEffect(() => {
    navigation.setOptions({
      //Header properties
      title: "Chat App", // Header title
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { color: "black" },
      headerTintColor: "black",

      // Make logout button on the left top of screen
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity // Makes it so that you can click the profile pic and it changes opacity
            onPress={signOutUser} // If profile pic is pressed, sign out
            activeOpacity={0.5}
          >
            <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
          </TouchableOpacity>
        </View>
      ),
      // Make camera icon and add chat button on top right of screen
      headerRight: () => (
        <View
          style={{
            marginRight: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            width: 80,
          }}
        >
          <TouchableOpacity activeOpacity={0.5}>
            <AntDesign name="camerao" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("AddChat")}
            activeOpacity={0.5}
          >
            <SimpleLineIcons name="pencil" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  // enterChat function, sends in id and chatName parameters and navigates to chat screen
  const enterChat = (id, chatName) => {
    navigation.navigate("Chat", {
      id,
      chatName,
    });
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.inputContainer}>
        {chats.map(
          (
            { id, data: { chatName } } //
          ) => (
            <CustomListItem //Makes a new list item (chat)
              //Sets parameters in the CustomListItem
              key={id} // Key allows for efficient rerendering of a list
              id={id}
              chatName={chatName}
              enterChat={enterChat}
            />
          )
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
