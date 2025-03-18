import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  Image,
  ActivityIndicator,
} from "react-native";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import { Images } from "../assets/images";

export default function FactsScreen() {
  const [fact, setFact] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchFact = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://uselessfacts.jsph.pl/random.json?language=en"
      );
      const data = await response.json();
      if (data && data.text) {
        setFact(data.text);
      }
    } catch (error) {
      console.error("Failed to fetch fact:", error);
      setFact("Oops! Couldn't load a fact. Try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <ScrollView style={styles.mainContainer}>
      <StatusBar barStyle={"light-content"} />
      <Header
        icon={<Image source={Images.Refresh} style={styles.icon} />}
        fact={fetchFact}
      />
      <View style={styles.blackContainer}>
        <View style={styles.innerContainer}>
          <View style={styles.box}>
            <Text style={styles.title}>Did You Know?</Text>
            <Image
              source={Images.Bulb}
              style={styles.bulb}
              resizeMode="center"
            />
          </View>
          {loading ? (
            <ActivityIndicator size="large" color="#E6B87F" />
          ) : (
            <Text style={styles.fact}>{fact}</Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  blackContainer: {
    backgroundColor: "black",
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingTop: 10,
    paddingVertical: 50,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    backgroundColor: "white",
  },
  title: {
    fontSize: 50,
    fontFamily: "DM Sans",
    color: "#E9CA97",
    marginLeft: 10,
    width: 200,
  },
  box: {
    marginTop: 45,
    borderLeftWidth: 4,
    borderLeftColor: "#E9CA97",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bulb: {
    width: 80,
    height: 100,
  },
  fact: {
    paddingTop: 60,
    fontSize: 22,
    lineHeight: 26,
  },
  icon: {
    height: 22,
    width: 22,
    padding: 5,
  },
});
