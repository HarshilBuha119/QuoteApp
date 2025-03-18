import { View, Image, Text, StyleSheet } from "react-native";

export default function Thoughts({ img, Title, Description }) {
  return (
    <>
      <View>
        <View style={styles.container}>
          <Image style={styles.image} source={img} resizeMode="contain" />
          <Text style={styles.title}>{Title}</Text>
        </View>
        <View
          style={{
            borderWidth: 0.5,
            borderColor: "#DADADA",
            marginVertical: 10,
          }}
        />

        <Text style={styles.description}>{Description}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginTop: 7,
    height: 15,
    width: 15,
  },
  title: {
    lineHeight: 30,
    fontSize: 18,
    marginLeft: 10,
    color: "#E6B87F",
  },
  description: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "400",
    paddingBottom: 7,
  },
});
