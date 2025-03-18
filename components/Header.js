import { View, Text, StyleSheet, Pressable } from "react-native";
import moment from "moment";
export default function Header({ icon, fact }) {
  const date = moment().format("DD MMM, YYYY");
  const day = moment().format("dddd");

  return (
    <>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.date}>{date}</Text>
          <Pressable onPress={fact} style={styles.icons}>
            {icon}
          </Pressable>
        </View>
      </View>
      <View style={styles.container1}>
        <View style={styles.innerContainer}>
          <Text style={styles.day}>{day}</Text>
          <Text style={styles.truly}>TRULY YOURS.</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    gap: 10,
    paddingTop: 70,
    paddingBottom: 10,
  },
  innerContainer: {
    marginHorizontal: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container1: {
    backgroundColor: "black",
    gap: 10,
    paddingBottom: 20,
  },
  date: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  icons: {
    fontSize: 30,
    color: "white",
    right: 0,
    top: 10,
    position: "absolute",
  },
  day: {
    color: "white",
    fontSize: 19,
  },
  truly: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
