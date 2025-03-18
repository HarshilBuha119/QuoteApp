import React from "react";
import {
  Linking,
  Text,
  Image,
  View,
  StyleSheet,
  Pressable,
  Modal,
  ToastAndroid
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Positions } from "react-native-calendars/src/expandableCalendar";

const SettingItems = ({ logo, title, next }) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const showToast = () => {
    ToastAndroid.showWithGravity(
      "No Passcode to show!!",
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
      
    );
  };
  function navigationHandler() {
    if (title === "Support") {
      openGmail();
      return;
    }
    if (title ==="Passcode"){
      return showToast()
    }
    if (title === "Export Data") {
      setModalVisible(true);
      return;
    }
    navigation.navigate(`${title}`);
  }
  const openGmail = () => {
    const gmailUrl = "mailto:abc@gmail.com";

    Linking.canOpenURL(gmailUrl)
      .then((supported) => {
        if (!supported) {
          Alert.alert("Gmail app is not installed.");
        } else {
          return Linking.openURL(gmailUrl);
        }
      })
      .catch((err) => console.error("An error occurred", err));
  };
  return (
    <>
      <View style={styles.itemContainer}>
        <Pressable onPress={navigationHandler} style={styles.items}>
          <View style={styles.innerContainer}>
            <Image source={logo} style={styles.image} resizeMode="contain" />
            <Text style={styles.titles}>{title}</Text>
          </View>
          <Image source={next} style={styles.arrow} resizeMode="contain" />
        </Pressable>
      </View>
      <View style={styles.separator} />
      <Modal transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Change Appearance</Text>
            <Text style={{ color: "#A6A6A6", paddingBottom: 10 }}>
              Are you sure you want to change the apperance?
            </Text>
            <View style={styles.buttons}>
              <Pressable
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate("Setting");
                }}
                style={styles.modalButtonWhite}
              >
                <Text style={{ color: "black", fontWeight: "bold" }}>
                  Return
                </Text>
              </Pressable>
              <Pressable
                onPress={() => setModalVisible(false)}
                style={styles.modalButtonBlack}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  Confirm
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default SettingItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  itemContainer: {
    paddingHorizontal: 20,
  },
  items: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 25,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 15,
  },
  titles: {
    fontSize: 16,
    color: "#565656",
    fontWeight: "bold",
  },
  arrow: {
    width: 10,
    height: 15,
    opacity: 0.7,
  },
  separator: {
    height: 1,
    backgroundColor: "#e0e0e0",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    height:"100%"
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  modalButtonBlack: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 5,
  },
  modalButtonWhite: {
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 5,
    borderWidth:2
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    alignSelf: "center",
    marginTop: 10,
  },
});
