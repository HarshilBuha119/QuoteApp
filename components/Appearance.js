import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { Modal } from "react-native";
export default function AppearanceScreen() {
  const [selectedButton, setSelectedButton] = useState("Large");
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const pressHandler = (button) => {
    setSelectedButton(button);
  };
  const getTextStyle = () => {
    switch (selectedButton) {
      case "Large":
        return styles.mediumSize;
      case "Extra Large":
        return styles.large;
      default:
        return styles.regularsize;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>This is a sample text</Text>
      <ScrollView
        style={styles.chapterContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.chapter}>Chapter 1</Text>
        <Text style={getTextStyle()}>
          Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor
          sit amet, consectetur dipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
          consectetur dipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua.
        </Text>
        <Text style={styles.chapter}>Chapter 2</Text>
        <Text style={getTextStyle()}>
          Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor
          sit amet, consectetur dipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
          consectetur dipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua.
        </Text>
        <Text style={styles.chapter}>Chapter 3</Text>
        <Text style={getTextStyle()}>
          Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor
          sit amet, consectetur dipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
          consectetur dipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua.
        </Text>
      </ScrollView>
      <View
        style={{ borderWidth: 0.5, borderColor: "#DADADA", marginVertical: 20 }}
      />
      <View style={styles.buttons}>
        <Pressable
          onPress={() => pressHandler("Regular")}
          style={[
            styles.button,
            selectedButton === "Regular" ? styles.button : styles.disablebutton,
          ]}
        >
          <Text
            style={selectedButton === "Regular" ? styles.text : styles.color}
          >
            Regular
          </Text>
        </Pressable>
        <Pressable
          onPress={() => pressHandler("Large")}
          style={[
            styles.button,
            selectedButton === "Large" ? styles.button : styles.disablebutton,
          ]}
        >
          <Text style={selectedButton === "Large" ? styles.text : styles.color}>
            Large
          </Text>
        </Pressable>
        <Pressable
          onPress={() => pressHandler("Extra Large")}
          style={[
            styles.button,
            selectedButton === "Extra Large"
              ? styles.button
              : styles.disablebutton,
          ]}
        >
          <Text
            style={
              selectedButton === "Extra Large" ? styles.text : styles.color
            }
          >
            Extra Large
          </Text>
        </Pressable>
      </View>

      <Text onPress={() => setModalVisible(true)} style={styles.applyText}>
        Apply Changes
      </Text>

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
                }}
                style={styles.modalButtonWhite}
              >
                <Text style={{ color: "black", fontWeight: "bold" }}>
                  Return
                </Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  setModalVisible(false);
                  navigation.goBack();
                }}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 23,
  },
  chapterContainer: {
    marginVertical: 10,
    gap: 10,
  },
  heading: {
    lineHeight: 30,
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "DM Sans",
    marginTop: 30,
  },
  chapter: {
    lineHeight: 30,
    fontWeight: "500",
    fontSize: 16,
    fontFamily: "DM Sans",
  },
  description: {
    fontFamily: "DM Sans",
    fontWeight: "400",
    fontSize: 14,
    color: "#656565",
    lineHeight: 18,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  button: {
    borderColor: "black",
    borderWidth: 1,
    flex: 1,
    alignItems: "center",
    padding: 15,
    borderRadius: 5,
    backgroundColor: "white",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    alignSelf: "center",
    marginTop: 10,
  },
  applyText: {
    color: "white",
    textAlign: "center",
    padding: 15,
    backgroundColor: "black",
    marginTop: 50,
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "DM Sans",
    lineHeight: 20,
    borderRadius: 5,
    marginHorizontal: 10,
    marginBottom: 50,
  },
  disablebutton: {
    borderColor: "#949494",
    borderWidth: 1,
    flex: 1,
    alignItems: "center",
    padding: 15,
    borderRadius: 5,
    backgroundColor: "white",
  },
  regularsize: {
    fontSize: 12,
  },
  mediumSize: {
    fontSize: 16,
  },
  large: {
    fontSize: 20,
  },
  color: {
    color: "#949494",
    fontSize: 15,
    fontWeight: "bold",
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
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
    borderWidth: 2,
  },
});
