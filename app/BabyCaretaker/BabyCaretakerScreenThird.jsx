import { router } from "expo-router";
import { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ProceedBtn from "../Component/ProceedBtn";
import StepsContainer from "../Component/StepsContainer";
import TopNavigation from "../Component/TopNavigation";

const { width, height } = Dimensions.get("window");
const BabyCaretakerScreenThird = () => {
  const [selectGender, setSelectedGender] = useState("Male");
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const toggleLanguage = (language) => {
    if (selectedLanguages.includes(language)) {
      setSelectedLanguages(
        selectedLanguages.filter((lang) => lang !== language)
      );
    } else if (selectedLanguages.length < 2) {
      setSelectedLanguages([...selectedLanguages, language]);
    }
  };

  const currentStep = 3;
  const totalSteps = 5;

  const genderData = [
    { id: 1, gender: "Male" },
    { id: 2, gender: "Female" },
  ];

  const langData = [
    { id: 1, language: "Hindi" },
    { id: 2, language: "English" },
    { id: 3, language: "Kannada" },
    { id: 4, language: "Tamil" },
    { id: 5, language: "Telugu" },
  ];

  return (
    <View style={styles.container}>
      <TopNavigation navText={"Baby Caretaker"} />

      <View style={styles.content}>
        <StepsContainer currentStep={currentStep} totalSteps={totalSteps} />

        <Text style={styles.questionText}>
          Please help us find best Caretaker for you.
        </Text>

        <Text style={styles.captionText}>Please Select Gender Preference*</Text>
        <View style={styles.optionContainer}>
          {genderData.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => setSelectedGender(item.gender)}
              style={[
                styles.optionButton,
                selectGender === item.gender && styles.optionBtnActive,
              ]}
            >
              <Text
                style={[
                  styles.optionText,
                  selectGender === item.gender && styles.optionTextActive,
                ]}
              >
                {item.gender}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.captionText}>
          Please Select Caretaker Language Preferences (Max 2)
        </Text>
        <View style={styles.optionContainer}>
          {langData.map((item) => (
            <TouchableOpacity
              onPress={() => toggleLanguage(item.language)}
              key={item.id}
              style={[
                styles.optionButton,
                selectedLanguages.includes(item.language) &&
                  styles.optionBtnActive,
              ]}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedLanguages.includes(item.language) &&
                    styles.optionTextActive,
                ]}
              >
                {item.language}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <ProceedBtn
          onPress={() =>
            router.push("/BabyCaretaker/BabyCaretakerScreenFourth")
          }
          buttonTexts="Proceed"
          marginTop={height * 0.3}
          borderRadius={30}
        />
      </View>
    </View>
  );
};

export default BabyCaretakerScreenThird;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: width * 0.05,
  },
  questionText: {
    fontSize: width * 0.045,
    marginVertical: height * 0.02,
    fontWeight: "500",
  },
  captionText: {
    fontSize: width * 0.045,
    fontWeight: "600",
    marginTop: height * 0.025,
    marginBottom: height * 0.015,
  },
  optionContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  optionButton: {
    borderColor: "#ACF6AE",
    borderWidth: 2,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  optionText: {
    fontSize: width * 0.04,
    color: "#000",
  },
  optionBtnActive: {
    backgroundColor: "#ACF6AE",
  },
  optionTextActive: {
    color: "#fff",
  },
});
