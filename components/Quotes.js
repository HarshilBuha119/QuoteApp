import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import { Images } from "../assets/images";

export default function Quotes() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://zenquotes.io/api/today");
      const data = await response.json();
      if (data && data.length > 0) {
        setQuote(data[0]);
      }
    } catch (error) {
      console.error("Failed to fetch quote:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={Images.Quote} />
      {loading ? (
        <ActivityIndicator size="large" color="#E9CA97" />
      ) : (
        <>
          <Text style={styles.quote}>{quote?.q}</Text>
          <Text style={styles.author}>{quote?.a}</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 15,
  },
  quote: {
    fontFamily: "DM Sans",
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    paddingHorizontal: 35,
    marginTop: 10,
  },
  author: {
    backgroundColor: "#E9CA97",
    borderRadius: 12,
    padding: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 20,
  },
});
