import { View,Text,StatusBar } from "react-native";
import { Settings } from "../components/SettingsMenu";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export default function HomeScreen() {
  
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar barStyle={"dark-content"}/>
          <Text style={styles.title}>Settings</Text>
          <Settings/>
    </View>
  );
}
const styles = {
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 22,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom:25
  },
};