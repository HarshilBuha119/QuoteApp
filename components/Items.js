import { Text, Image, View, StyleSheet,} from "react-native";
import { Images } from "../assets/images";
export default function Item({ title, description}) {
  return (
    <>
      <View style={styles.itemContainer} >
        <View style={styles.top}>
          <View style={styles.top1}>
            <Image source={Images.Quote} style={styles.image} resizeMode="contain" />
            <Text style={styles.title}>{title}</Text>
          </View>
          <Text style={styles.day}>Monday</Text>
        </View>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View
        style={{ borderWidth: 0.5, borderColor: "#DADADA", marginTop: 10 }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  top1: {
    flexDirection: "row",
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 10,
    marginTop: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#E9CA97",
  },
  day: {
    color: "#C4C4C4",
  },
  description: {
    marginHorizontal: 30,
    lineHeight: 20,
    fontSize: 15,
    fontWeight: "400",
    marginTop:5
  },
});
