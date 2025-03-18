import React, { useState } from "react";
import { Switch, StyleSheet, View, Text, Image } from "react-native";
import { Images } from "../assets/images";
export default function Alarm({ title, text }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <View
        style={{ borderWidth: 0.5, borderColor: "#DADADA", marginTop: 10 }}
      />
      <View style={styles.header}>
        <Text style={styles.titles}>{title}</Text>
        <Switch
          trackColor={{ false: "#DADADA", true: "#E9CA97" }}
          thumbColor="white"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <Text style={styles.texts}>{text}</Text>
      <View style={{ justifyContent: "center", alignItems: "center" ,marginVertical:30}}>
        <View style={styles.alarm}>
          <Image
            tintColor={isEnabled ? "#E9CA97" : "#DADADA"}
            style={styles.image}
            source={Images.Clock}
            resizeMode="contain"
          />
          <Text style={{ fontSize: 20, alignSelf: "center" ,color: isEnabled? "black" : "#DADADA" }}>10:00 AM</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 60,
    width: 60,
    alignSelf: "center",
  },
  alarm: {
    height: 200,
    width: 200,
    backgroundColor: "#EEEEEE6E",
    borderRadius: "50%",
    justifyContent: "center",
    gap:30
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  titles: {
    color: "#565656",
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 30,
  },
  texts: {
    color: "#C4C4C4",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: 400,
  },
});
