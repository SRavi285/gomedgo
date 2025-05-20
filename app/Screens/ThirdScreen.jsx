import { router } from "expo-router";
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
    key: 3,
    title: "Physiotherapy in Comfort of Home",
    description: "Personalised Physiotherapy Delivered to your Doorstep",
    image: require("../../assets/images/nurces-group-image.png"),
    buttonText: "Book Now",
  },
];

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#E5E5D6" }}>
      {slides.map((slide, index) => (
        <View key={slide.key} style={styles.slide}>
          <Image
            source={require("../../assets/images/icon.png")}
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
                // router.push("/(screens)/BookNowScreen");
                alert("Book Now Screen is not implemented yet.");
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
    paddingTop: 70,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  logo: {
    width: 120,
    height: 60,
    resizeMode: "contain",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 400,
    resizeMode: "contain",
    marginVertical: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 15,
    color: "#000",
  },
  description: {
    fontSize: 20,
    color: "#555",
    marginBottom: 30,
  },
  buttonRow: {
    marginTop: height * 0.09,
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
