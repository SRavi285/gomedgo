import { router } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");

const slides = [
  {
    key: 1,
    title: "Nursing Support When You Need It",
    description: "Tailored to Your Needs, Right at Your Doorstep",
    image: require("../assets/images/nurces-group-image.png"),
    buttonText: "Get Started",
  },
];

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      {slides.map((slide, index) => (
        <View key={slide.key} style={styles.slide}>
          <Image
            source={require("../assets/images/icon.png")}
            style={styles.logo}
          />
          <Image source={slide.image} style={styles.image} />
          <Text style={styles.title}>{slide.title}</Text>
          <Text style={styles.description}>{slide.description}</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity
              onPress={() => {
                router.push("/Component/Home");
              }}
            >
              <Text style={styles.skip}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                router.push("/Screens/SecondScreen");
              }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>{slide.buttonText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    paddingTop: height * 0.08,
    paddingHorizontal: width * 0.05,
    backgroundColor: "#fff",
  },
  logo: {
    width: width * 0.3,
    height: height * 0.08,
    resizeMode: "contain",
    marginBottom: height * 0.01,
  },
  image: {
    width: "100%",
    height: height * 0.4,
    resizeMode: "contain",
    marginVertical: height * 0.03,
  },
  title: {
    fontSize: width * 0.08,
    fontWeight: "700",
    marginBottom: height * 0.02,
    color: "#000",
  },
  description: {
    fontSize: width * 0.05,
    color: "#555",
    marginBottom: height * 0.04,
  },
  buttonRow: {
    marginTop: height * 0.06,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignContent: "center",
  },
  skip: {
    fontSize: width * 0.05,
    color: "#888",
  },
  button: {
    backgroundColor: "#ACF6AE",
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.013,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: width * 0.04,
  },
});
