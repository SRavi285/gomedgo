import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import ProceedBtn from "../Component/ProceedBtn";
import StepsContainer from "../Component/StepsContainer";
import TopNavigation from "../Component/TopNavigation";
import { router } from "expo-router";

const { width, height } = Dimensions.get("window");
const elderlyBathHygieneScreen = () => {
  const currentStep = 1;
  const totalSteps = 4;

  return (
    <View style={styles.container}>
      <TopNavigation navText={"Injection & Infusions"} />
      <View style={styles.content}>
        <StepsContainer currentStep={currentStep} totalSteps={totalSteps} />

        <Text style={styles.header}>Select The Type Of Procedure</Text>

        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Image
              source={require("../../assets/icons/man.png")}
              style={styles.image}
            />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Elderly Bath & Hygiene</Text>
              <Text style={styles.subTitle}>
                Safe and comfortable elderly {"\n"} bathing and hygiene.
              </Text>
            </View>
          </View>

          <View style={styles.bottomRow}>
            <View style={styles.textRow}>
              <Text style={styles.captionText}>Starting from</Text>
              <Text style={styles.priceText}>₹600/Service</Text>
            </View>
            <ProceedBtn
              onPress={() => router.push("/ElderlyBathHygiene/ElderlyBathHygieneSecond")}
              buttonTexts=""
              borderRadius={width * 1}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default elderlyBathHygieneScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: width * 0.05,
  },
  header: {
    fontSize: width * 0.05,
    fontWeight: "bold",
    marginBottom: height * 0.02,
    marginTop:height * 0.02,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: width * 0.04,
    marginTop: height * 0.02,
    marginBottom: height * 0.03,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: height * 0.02,
  },
  image: {
    width: width * 0.2,
    height: width * 0.2,
    resizeMode: "contain",
    marginRight: width * 0.04,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: width * 0.045,
    marginBottom: height * 0.005,
  },
  subTitle: {
    color: "#666",
    fontSize: width * 0.035,
    lineHeight: height * 0.025,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textRow: {
    flexDirection: "row",
    gap:width* 0.02,
  },
  captionText: {
    fontSize: width * 0.035,
    color: "#999",
  },
  priceText: {
    fontSize: width * 0.04,
    fontWeight: "600",
    color: "#000",
  },
});