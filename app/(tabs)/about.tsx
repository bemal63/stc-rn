import { Text, View, StyleSheet } from "react-native";
import {Link} from "expo-router";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Link href="/" style={styles.button}>In Homes</Link>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3a3a3a",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "#fff"
  },
  button: {
    fontSize: 20,
  }
});