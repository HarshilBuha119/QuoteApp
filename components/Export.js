import { View, Text ,Pressable ,StyleSheet} from "react-native";
import { Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
export default function ExportScreen() {
  const [modalVisible, setModalVisible] = useState(true)
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Modal transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Are You Sure?</Text>
            <View style={styles.buttons}>
              <Pressable
                onPress={() => {
                  setModalVisible(false);
                  navigation.goBack();
                }}
                style={styles.modalButton}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  Cancel
                </Text>
              </Pressable>
              <Pressable
                onPress={() => setModalVisible(false)}
                style={styles.modalButton}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>OK</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles=StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  modalButton: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 5,
  },
})