import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  Dimensions,
  StyleSheet,
  Text,
  View
} from "react-native";
import ProceedBtn from "../Component/ProceedBtn";
import StepsContainer from "../Component/StepsContainer";
import TopNavigation from "../Component/TopNavigation";

const { width, height } = Dimensions.get("window");

const CareOptions = () => {
  const plans = [
    {
      title: "24 X 7 Long Term Care",
      price: "₹1000/day",
      originalPrice: "₹1200",
      duration: "30+ Days Care",
      isBestValue: true,
    },
    {
      title: "24 X 7 Short Term Care",
      price: "₹1500/day",
      duration: "5+ Days Care",
    },
    {
      title: "Daytime Care",
      price: "₹1500/day",
      duration: "9am to 6pm",
    },
  ];

  const currenStep = 1;
  const totalStep = 5;

  return (
    <View style={styles.container}>
      <TopNavigation navText={"Expert Caretaker"} />

      <View style={styles.contentContainer}>
        <StepsContainer currentStep={currenStep} totalSteps={totalStep} />

        <Text style={styles.header}>Find the best care</Text>

        {plans.map((plan, index) => (
          <View key={index} style={styles.card}>
            {plan.isBestValue && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>Best Value</Text>
              </View>
            )}

            <View style={styles.row}>
              <Text style={styles.title}>{plan.title}</Text>
              <View style={styles.priceRow}>
                {plan.originalPrice && (
                  <Text style={styles.originalPrice}>{plan.originalPrice}</Text>
                )}
                <Text style={styles.price}>{plan.price}</Text>
              </View>
            </View>

            <View style={styles.featureRow}>
              <Ionicons name="checkmark-circle" size={18} color="#00c853" />
              <Text style={styles.featureText}>
                {plan.title.includes("Daytime")
                  ? `Daytime Care from ${plan.duration}.`
                  : `All-Day, All-Night • ${plan.duration}.`}
              </Text>
            </View>

            <View style={styles.featureRow}>
              <Ionicons name="checkmark-circle" size={18} color="#00c853" />
              <Text style={styles.featureText}>
                Expert Feeding Assistance, Hygiene Support.
              </Text>
            </View>

            <View style={styles.featureRow}>
              <Ionicons name="checkmark-circle" size={18} color="#00c853" />
              <Text style={styles.featureText}>
                Timely Medicine and Diaper Changes.
              </Text>
            </View>
            <ProceedBtn
              onPress={() => router.push("/ExpertCaretaker/ExpertScreenSecond")}
              buttonTexts="Proceed"
              marginTop={height * 0.018}
              borderRadius={width * 0.02}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    padding: width * 0.04,
  },
  header: {
    fontSize: width * 0.06,
    fontWeight: "bold",
    marginBottom: height * 0.02,
  },
  card: {
    borderWidth: 1,
    borderColor: "#d1c4e9",
    borderRadius: width * 0.03,
    padding: width * 0.03,
    marginBottom: height * 0.015,
    backgroundColor: "#f9f9ff",
    position: "relative",
  },
  badge: {
    position: "absolute",
    right: width * 0.02,
    top: -height * 0.015,
    backgroundColor: "#00c853",
    paddingVertical: height * 0.006,
    paddingHorizontal: width * 0.03,
    borderRadius: width * 0.015,
  },
  badgeText: {
    color: "#fff",
    fontSize: width * 0.03,
  },
  title: {
    fontSize: width * 0.04,
    fontWeight: "bold",
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  originalPrice: {
    textDecorationLine: "line-through",
    color: "#999",
    marginRight: width * 0.02,
    fontSize: width * 0.035,
  },
  price: {
    color: "#ACF6AE",
    fontWeight: "bold",
    fontSize: width * 0.04,
  },
  featureRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: height * 0.01,
  },
  featureText: {
    marginLeft: width * 0.02,
    fontSize: width * 0.033,
    color: "#333",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: height * 0.01,
    marginTop: height * 0.01,
  },
});

export default CareOptions;
