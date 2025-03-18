import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  StatusBar,
} from "react-native";
import Recent from "../components/Recent";
import { Images } from "../assets/images";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export default function SearchScreen() {
  const insets = useSafeAreaInsets();
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <View style={[styles.container, { paddingTop: insets.top,paddingBottom:insets.bottom }]}>
      <StatusBar barStyle={"dark-content"} />
      <Text style={styles.title}>Search</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type a keyword to search..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={styles.input}
        />
        <Image
          source={Images.WSearch}
          style={styles.image}
          resizeMode="center"
        />
      </View>
      <Text style={styles.recentSearch}>Recent Search</Text>
      <View
        style={{ borderWidth: 0.5, borderColor: "#DADADA", marginTop: 10 }}
      />
      <View style={styles.history}>
        <Recent searchQuery={searchQuery || ""} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  recentSearch: {
    fontWeight: "500",
    lineHeight: 18,
    color: "#C4C4C4",
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 22,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#444",
    paddingVertical: 5,
  },
  image: {
    width: 35,
    height: 35,
    backgroundColor: "#E9CA97",
    padding: 10,
    borderRadius: 8,
  },
  history: {
    marginBottom: 150,
  },
});
