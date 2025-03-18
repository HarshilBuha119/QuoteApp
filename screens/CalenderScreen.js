import { Image, View, Text, StyleSheet, ScrollView ,StatusBar} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Images } from "../assets/images";
import moment from "moment";
import { Calendar } from "react-native-calendars";
import { useState } from "react";
import Quotes from "../components/Quotes";
import Thoughts from "../components/Thoughts";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const date = moment().format("ddd, DD MMM YYYY");
  const [selectedDate, setSelectedDate] = useState(date);

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 40 }} style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar barStyle={"dark-content"}/>
      <Text style={styles.title}>Calendar</Text>
      <View style={styles.Calendar}>
        <Calendar
          onDayPress={(day) => setSelectedDate(day.dateString)}
          markedDates={{
            [selectedDate]: {
              selected: true,
              selectedColor: "#E6B87F",
            },
          }}
          theme={{
            selectedDayBackgroundColor: "#E6B87F",
            todayTextColor:"#E6B87F"
          }}
          renderArrow={(direction) => (
            <Text style={styles.arrow}>{direction === "left" ? "‹" : "›"}</Text>
          )}
        />
        <View style={styles.line} />
      </View>
      <View style={{ borderWidth: 0.5, borderColor: "#DADADA", marginTop: 10}} />
      <Text style={styles.date}>{moment(selectedDate).format("ddd, DD MMM YYYY")}</Text>
      <View style={{ flexDirection: "row", gap: 20 }}>
        <Image
          style={styles.image}
          source={Images.SQuote}
          resizeMode="contain"
        />
        <Text style={{ color: "#E6B87F", fontSize: 18 }}>Quote</Text>
      </View>
      <View style={{ borderWidth: 0.5, borderColor: "#DADADA", marginVertical: 10 }} />
      <Quotes />
      <Thoughts img={Images.Calender} Title="Personal Perspective" Description="A woman gives birth to her child and passes on her innate legacy. One day the child will ask questions, seeking to better understand their mother in order to better understand themselves. People without access to their mother have limited access to a part of themselves."/>
      <Thoughts img={Images.Bulb} Title="Brief Biography" Description="John Henrik Clarke — African-American scholar, historian, professor, one of the foremost authorities on African and Black American History, and pioneer in the creation of Pan-African and Africana studies. (US)"/>
      <Thoughts img={Images.Home} Title="Thoughts To Start The Day" Description="Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
      <Thoughts img={Images.Quote} Title="Thoughts To End The Day" Description="Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    marginTop: 5,
    height: 20,
    width: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 22,
  },
  Calendar: {
    height: 375,
  },
  line: {
    borderColor: "#E6B87F",
    borderWidth: 3,
    backgroundColor: "#E6B87F",
    width: 40,
    alignSelf: "center",
    borderRadius: 5,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  arrow: {
    fontSize: 24,
    color: "#E6B87F",
    paddingHorizontal: 30,
  },
  date: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 15,
    paddingBottom: 15,
  },
});
