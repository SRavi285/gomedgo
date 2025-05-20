import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import dayjs from "dayjs";
import ProceedBtn from "../Component/ProceedBtn";
import StepsContainer from "../Component/StepsContainer";
import TopNavigation from "../Component/TopNavigation";

const { width, height } = Dimensions.get("window");
const BabyCaretakerScreenSecond = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isStartPickerVisible, setStartPickerVisible] = useState(false);
  const [isEndPickerVisible, setEndPickerVisible] = useState(false);

  const formatDate = (date) => dayjs(date).format("ddd MMM DD YYYY");

  const currentStep = 2;
  const totalSteps = 5;
  return (
    <View style={styles.container}>
      <TopNavigation navText={"Baby Caretaker"} />

      <View style={styles.content}>
        <StepsContainer currentStep={currentStep} totalSteps={totalSteps} />

        <Text style={styles.questionText}>
          When do you want to start your care?
        </Text>

        {/* Start Date Picker */}
        <Text style={styles.label}>Please pick your start date of care</Text>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setStartPickerVisible(true)}
        >
          <Text style={styles.dropdownText}>{formatDate(startDate)}</Text>
          <Ionicons name="chevron-down" size={20} />
        </TouchableOpacity>

        <DateTimePickerModal
          isVisible={isStartPickerVisible}
          mode="date"
          date={startDate}
          onConfirm={(date) => {
            setStartDate(date);
            setStartPickerVisible(false);
          }}
          onCancel={() => setStartPickerVisible(false)}
        />

        {/* End Date Picker */}
        <Text style={styles.label}>Please pick your end date of care</Text>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setEndPickerVisible(true)}
        >
          <Text style={styles.dropdownText}>{formatDate(endDate)}</Text>
          <Ionicons name="chevron-down" size={20} />
        </TouchableOpacity>

        <DateTimePickerModal
          isVisible={isEndPickerVisible}
          mode="date"
          date={endDate}
          onConfirm={(date) => {
            setEndDate(date);
            setEndPickerVisible(false);
          }}
          onCancel={() => setEndPickerVisible(false)}
        />

        {/* Proceed Button */}
        <ProceedBtn
          onPress={() => router.push("/BabyCaretaker/BabyCaretakerScreenThird")}
          buttonTexts="Proceed"
          marginTop={height * 0.37}
          borderRadius={30}
        />
      </View>
    </View>
  );
};

export default BabyCaretakerScreenSecond;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: width * 0.05,
  },
  inactiveStep: {
    backgroundColor: "#d0d8ea",
  },
  questionText: {
    fontSize: width * 0.045,
    marginVertical: height * 0.02,
    fontWeight: "500",
  },
  label: {
    fontSize: width * 0.04,
    fontWeight: "600",
    marginTop: height * 0.025,
    marginBottom: height * 0.015,
  },
  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#ACF6AE",
    borderWidth: 2,
    borderRadius: 8,
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.04,
    marginBottom: height * 0.02,
  },
  dropdownText: {
    fontSize: width * 0.045,
  },
});
