import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import ProceedBtn from "../Component/ProceedBtn";
import StepsContainer from "../Component/StepsContainer";
import TopNavigation from "../Component/TopNavigation";

const { width, height } = Dimensions.get("window");
const PhysiotherapyScreen = () => {
  const plans = [
    {
      id: 1,
      title: "Gold",
      price: "₹3500/day",
    },
    {
      id: 2,
      title: "Silver",
      price: "₹2500/day",
    },
  ];

  const description = [
    {
      id: 1,
      features: [
        { desc: "1:1 care for ICU to Ward transition." },
        {
          desc: "Hospital nurses provide round-the-clock 24 hours care in these shifts.",
        },
        {
          desc: "Nurses hand over to the next shift, just like in a mini hospital setup.",
        },
        {
          desc: "These nurses handle various procedures daily in hospitals and bring that expertise to your home.",
        },
      ],
    },
    {
      id: 2,
      features: [
        { desc: "24-hour care from a trained home nurse." },
        {
          desc: "They serve as both attendants and nurses, handling diaper changes and medical tasks like dressings, injections, and feeding.",
        },
        {
          desc: "These nurses regularly monitor patients and promptly report any changes, ensuring proactive and timely care.",
        },
      ],
    },
  ];

  const currentStep = 1;
  const totalStep = 5;

  return (
    <View style={styles.container}>
      <TopNavigation navText={"Physiotherapy"} />

      <View style={styles.contentContainer}>
        <StepsContainer currentStep={currentStep} totalSteps={totalStep} />

        <Text style={styles.header}>Select Your Physiotherapy Plan</Text>

        {plans.map((plan) => {
          const planDescription = description.find(
            (item) => item.id === plan.id
          );

          return (
            <View key={plan.id} style={styles.card}>
              <View style={styles.row}>
                <Text
                  style={[
                    styles.title,
                    { color: plan.id === 1 ? "#FFD700" : "#C0C0C0" },
                  ]}
                >
                  {plan.title}
                </Text>
                <Text
                  style={[
                    styles.price,
                    { color: plan.id === 1 ? "#FFD700" : "#C0C0C0" },
                  ]}
                >
                  {plan.price}
                </Text>
              </View>

              {planDescription?.features.map((item, index) => (
                <View key={index} style={styles.featureRow}>
                  <Ionicons name="checkmark-circle" size={18} color="#00c853" />
                  <Text style={styles.featureText}>{item.desc}</Text>
                </View>
              ))}

              <ProceedBtn
                onPress={() =>
                  router.push("/Physiotherapy/PhysiotherapyScreenSecond")
                }
                buttonTexts="Proceed"
                marginTop={height * 0.018}
                borderRadius={width * 0.02}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default PhysiotherapyScreen;

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
  price: {
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
