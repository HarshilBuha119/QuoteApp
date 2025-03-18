import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  StatusBar,
} from "react-native";
import Header from "../components/Header";
import Quotes from "../components/Quotes";
export default function HomeScreen() {
  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <ScrollView style={styles.maincontainer}>
        <Header icon="" />
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <Quotes />
            <Text style={styles.title}>Personal Perspective</Text>
            <Text style={styles.description}>
              A woman gives birth to her child and passes on her innate legacy.
              One day the child will ask questions, seeking to better understand
              their mother in order to better understand themselves. People
              without access to their mother have limited access to a part of
              themselves.
            </Text>
            <Text style={styles.title}>Bio</Text>
            <Text style={styles.description}>
              John Henrik Clarke — African-American scholar, historian,
              professor, one of the foremost authorities on African and Black
              American History, and pioneer in the creation of Pan-African and
              Africana studies. (US)
            </Text>
            <View style={styles.buttonsContainer}>
              <Pressable style={styles.button}>
                <Text style={styles.buttonsText}>
                  Thoughts To Start The Day
                </Text>
              </Pressable>
              <Pressable style={styles.button}>
                <Text style={styles.buttonsText}>Thoughts To End The Day</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    backgroundColor: "black",
  },
  innerContainer: {
    paddingHorizontal: 30,
    paddingTop: 10,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontFamily: "DM Sans",
    color: "#E9CA97",
  },
  description: {
    fontSize: 15,
    padding: 10,
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
    paddingBottom: 50,
  },
  button: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 5,
  },
  buttonsText: {
    color: "white",
    fontSize: 12,
  },
  lightThemeText: {
    color: "black",
  },
  darkThemeText: {
    color: "white",
  },
});
