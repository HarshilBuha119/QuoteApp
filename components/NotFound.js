import { Text, View, StyleSheet } from "react-native";
export default function NotFound() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No Query Found</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    alignSelf:"center",
    marginTop:25
  },
  text: {
    color: "#E9CA97",
    fontSize: 25,
    fontWeight: "bold",
  },
});
