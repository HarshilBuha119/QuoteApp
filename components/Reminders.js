
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Alarm from "../SmallScreenComponents/Alarm";
export default function ReminderScreen() {
  return (
    <>
      <ScrollView style={styles.container}>
        <Alarm title={"Wake up notification"} text={"Set time for the morning for the app to notify"}/>
        <Alarm title={"Wake up notification"} text={"Set time for the morning for the app to notify"}/>
        <Alarm title={"Wake up notification"} text={"Set time for the morning for the app to notify"}/>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 22,
  },
});
