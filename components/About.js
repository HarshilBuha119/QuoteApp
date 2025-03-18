// About.js
import { StyleSheet,View, ScrollView,Image,Text } from "react-native";
import { Images } from "../assets/images";
export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
      <Image style={styles.image} source={Images.Person} resizeMode="contain"/>
      <Text style={styles.title}>Quote App</Text>
      </View>
      <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
      <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
      <View style={styles.links}>
      <Text style={styles.link}>Shop the Limited Edition Calender</Text>
      <Text style={styles.link}>Review on App Store</Text>
      <Text style={styles.link}>Privacy Policy</Text>
      <Text style={styles.link}>Terms and Conditions</Text>
      </View>
    </ScrollView>
  );
}

const styles =StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 23,
  },
  image:{
    height:125,
    width:125,
  },
  title:{
    color:"#E9CA97",
    fontWeight:"bold",
    fontSize:29,
    textAlign:"center",
    lineHeight:30,
    marginTop:10
  },
  header:{
    alignSelf:"center",
  },
  text:{
    fontSize:13,
    fontWeight:"400",
    lineHeight:18,
    fontFamily:"DM Sans",
    color:"#949494",
    marginTop:30
  },
  link:{
    color:"#E9CA97",
    fontWeight:"bold",
    lineHeight:30,
    fontSize:18,
    fontFamily:"DM Sans",
    marginVertical:5
  },
  links:{
    marginTop:30
  }
})