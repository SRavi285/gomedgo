import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useState } from "react";
import ProceedBtn from "../Component/ProceedBtn";
import StepsContainer from "../Component/StepsContainer";
import TopNavigation from "../Component/TopNavigation";

const { width, height } = Dimensions.get("window");
const ElderlyBathHygieneFourth = () => {
  const [selectedOption, setSelectedOption] = useState("full");

  const currentStep = 4;
  const totalSteps = 4;

  return (
    <View style={styles.container}>
      <TopNavigation navText={"Elderly Bath & Hygiene"} />

      <View style={styles.content}>
        <StepsContainer currentStep={currentStep} totalSteps={totalSteps} />

        <View style={styles.card}>
          <View style={styles.header}>
            <Image
              source={require("../../assets/icons/man.png")}
              style={styles.image}
            />
            <View>
              <Text style={styles.title}>Elderly Bath & Hygiene</Text>
              <Text style={styles.subTitle}>24 X 7 Long Term Care</Text>
              <Text style={styles.dates}>
                From: 5 May 2025 To: 28 June 2025
              </Text>
            </View>
          </View>

          <Text style={styles.address}>
            📍 ACE CITY, 508, Ace City Noida Extension…
          </Text>

          <View style={styles.row}>
            <Text style={styles.label}>Name</Text>
            <Text style={styles.value}>Sameer</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Phone</Text>
            <Text style={styles.value}>+918368438809</Text>
          </View>

          <View style={[styles.priceRow, { borderTopWidth: 0.5 }]}>
            <Text>Service Amount</Text>
            <Text>₹61000</Text>
          </View>
          <View style={styles.priceRow}>
            <Text>Registration Fee (one time pay)</Text>
            <Text>₹2000</Text>
          </View>
          <View style={styles.priceRow}>
            <Text style={{ color: "red" }}>Extra Discount</Text>
            <Text style={{ color: "red" }}>- ₹6000</Text>
          </View>
          <View style={styles.priceRow}>
            <Text style={{ color: "red" }}>1% Discount on Service Amount</Text>
            <Text style={{ color: "red" }}>- ₹550</Text>
          </View>

          <View style={[styles.priceRow, styles.totalRow]}>
            <Text>Total Amount</Text>
            <Text style={styles.totalAmount}>₹56450</Text>
          </View>
        </View>

        <TouchableOpacity
          style={[
            styles.option,
            selectedOption === "full" && styles.optionSelected,
          ]}
          onPress={() => setSelectedOption("full")}
        >
          <Text style={styles.optionText}>
            ⭕ Pay full amount ₹ 56450{" "}
            <Text style={{ color: "red" }}>1% discount</Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.option,
            selectedOption === "partial" && styles.optionSelected,
          ]}
          onPress={() => setSelectedOption("partial")}
        >
          <Text style={styles.optionText}>
            ⭕ Pay ₹ 2000 Now and Remaining Later
          </Text>
        </TouchableOpacity>

        <View style={styles.bottomContainer}>
          <Text style={styles.bottomAmount}>
            ₹56450{"\n"}
            <Text style={styles.bottomLabel}>Total Amount</Text>
          </Text>
          <ProceedBtn
            onPress={() => alert("Pay Now")}
            buttonTexts={"Proceed to pay"}
            borderRadius={width * 0.1}
            marginTop={height * 0.01}
          />
        </View>
      </View>
    </View>
  );
};

export default ElderlyBathHygieneFourth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: width * 0.05,
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
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: height * 0.015,
  },
  image: {
    width: width * 0.13,
    height: width * 0.13,
    marginRight: width * 0.03,
    borderRadius: width * 0.065,
  },
  title: {
    fontWeight: "bold",
    fontSize: width * 0.045,
  },
  subTitle: {
    color: "#555",
    fontSize: width * 0.035,
  },
  dates: {
    fontSize: width * 0.032,
    color: "#888",
  },
  address: {
    marginBottom: height * 0.015,
    fontSize: width * 0.033,
    color: "#555",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: height * 0.005,
  },
  label: {
    color: "#444",
  },
  value: {
    fontWeight: "bold",
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: height * 0.003,
  },
  totalRow: {
    marginTop: height * 0.01,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingTop: height * 0.01,
  },
  totalAmount: {
    fontWeight: "bold",
    fontSize: width * 0.045,
  },
  option: {
    padding: height * 0.015,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    marginBottom: height * 0.012,
  },
  optionSelected: {
    borderColor: "#00C853",
    backgroundColor: "#E9FDEB",
  },
  optionText: {
    fontSize: width * 0.035,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: height * 0.16,
  },
  bottomAmount: {
    fontWeight: "bold",
    fontSize: width * 0.045,
    color: "#000",
  },
  bottomLabel: {
    fontSize: width * 0.03,
    color: "#888",
  },
});
