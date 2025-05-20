import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  Dimensions,
  Linking,
  // CheckBox,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ProceedBtn from "../Component/ProceedBtn";
import StepsContainer from "../Component/StepsContainer";
import TopNavigation from "../Component/TopNavigation";

const { height, width } = Dimensions.get("window");
const AtHomeNurseFourth = () => {
  const currentStep = 4;
  const totalSteps = 5;

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [agree, setAgree] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TopNavigation navText={"At Home Nurse"} />

      <View style={styles.content}>
        <StepsContainer currentStep={currentStep} totalSteps={totalSteps} />

        <Text style={styles.questionText}>Select a location</Text>

        <View style={styles.searchContainer}>
          <Ionicons
            name="search"
            size={20}
            color={"#aaa"}
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search for area, street name..."
            style={styles.input}
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.locationText}>📍 Use my current location</Text>
        </TouchableOpacity>

        <Text style={styles.label}>Name</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
          style={styles.inputName}
        />

        <Text style={styles.label}>Mobile Number</Text>
        <View style={styles.phoneContainer}>
          <Text style={styles.countryCode}>+91</Text>
          <TextInput
            value={mobile}
            onChangeText={setMobile}
            placeholder="9999999999"
            keyboardType="phone-pad"
            style={styles.phoneInput}
          />
        </View>

        <View style={styles.checkboxContainer}>
          {/* <CheckBox value={agree} onValueChange={setAgree} /> */}
          <Text style={styles.termsText}>I agree to </Text>
          <Text style={styles.link} onPress={() => Linking.openURL("#")}>
            Terms and Conditions
          </Text>
        </View>

        <ProceedBtn
          onPress={() => router.push("/AtHomeNurse/AtHomeNursefifth")}
          buttonTexts="Proceed"
          marginTop={height * 0.35}
          borderRadius={30}
        />
      </View>
    </ScrollView>
  );
};

export default AtHomeNurseFourth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: height * 0.06,
    paddingHorizontal: width * 0.05,
    paddingBottom: height * 0.01,
    backgroundColor: "#ACF6AE",
  },
  backButton: {
    marginRight: width * 0.04,
  },
  headerText: {
    fontSize: width * 0.05,
    fontWeight: "bold",
    color: "#fff",
  },
  content: {
    padding: width * 0.05,
  },
  questionText: {
    fontSize: 16,
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ACF6AE",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  searchIcon: {
    marginRight: 6,
  },
  inputName: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ACF6AE",
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  locationText: {
    color: "green",
    marginBottom: 20,
  },
  label: {
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 4,
  },
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ACF6AE",
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  countryCode: {
    marginRight: 10,
    color: "#666",
  },
  phoneInput: {
    flex: 1,
    height: 40,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  termsText: {
    marginLeft: 8,
  },
  link: {
    color: "green",
    textDecorationLine: "underline",
    marginLeft: 4,
  },
});
