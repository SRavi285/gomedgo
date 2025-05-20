import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import StepsContainer from "../Component/StepsContainer";
import TopNavigation from "../Component/TopNavigation";

import { router } from "expo-router";
import { useState } from "react";
import CalendarStrip from "../Component/CalendarStrip";
import MultiDatePicker from "../Component/MultipleDatePicker";
import ProceedBtn from "../Component/ProceedBtn";
import TimeSlotSelector from "../Component/TimeSlotSelector";

const { width, height } = Dimensions.get("window");

const sampleTimeSlots = [
  {
    label: "Morning",
    time: "7:00 AM - 1:00 PM",
    icon: require("../../assets/images/sun.png"),
    disabled: false,
  },
  {
    label: "Evening",
    time: "1:00 PM - 7:00 PM",
    icon: require("../../assets/images/sunset.png"),
    disabled: false,
  },
  {
    label: "Night",
    time: "7:00 PM - 7:00 AM",
    icon: require("../../assets/images/moon.png"),
    disabled: false,
  },
];
const DressingScreenSecond = () => {
  const [selectedTab, setSelectedTab] = useState("Single Day");
  const [selectedDate, setSelectedDate] = useState("5");
  const [selectedDates, setSelectedDates] = useState({});
  const [selected, setSelected] = useState();

  const currentStep = 2;
  const totalSteps = 4;

  const toggleTab = (tab) => {
    setSelectedTab(tab);
    if (tab === "Multiple Days") {
      setSelectedDates({});
    }
  };

  return (
    <View style={styles.container}>
      <TopNavigation navText={"Dressing"} />
      <View style={styles.content}>
        <StepsContainer currentStep={currentStep} totalSteps={totalSteps} />
        <Text style={styles.header}>Select The Type Of Procedure</Text>

        <View style={styles.toggleTabs}>
          {["Single Day", "Multiple Days"].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.tabButton,
                selectedTab === tab && styles.activeTabButton,
              ]}
              onPress={() => toggleTab(tab)}
            >
              <Text
                style={[
                  styles.tabText,
                  selectedTab === tab && styles.activeTabText,
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {selectedTab === "Single Day" ? (
          <>
            <Text style={styles.heading}>Choose Day & Date</Text>
            <CalendarStrip
              selectedDate={selectedDate}
              onDateSelect={(date) => setSelectedDate(date)}
            />
          </>
        ) : (
          <>
            <Text style={styles.heading}>Please Pick Your Dates</Text>

            <MultiDatePicker
              selectedDates={selectedDates}
              onSelectDates={setSelectedDates}
              label="Select Available Days"
            />
          </>
        )}

        <Text style={styles.slotHeader}>Select time slot</Text>
        <TimeSlotSelector
          slots={sampleTimeSlots}
          selectedTime={selected}
          onSelect={setSelected}
          icon={sampleTimeSlots.icon}
        />

        <ProceedBtn
          onPress={() =>
            router.push("/Dressing/DressingScreenThird")
          }
          buttonTexts="Proceed"
          marginTop={height * 0.19}
          borderRadius={width * 0.02}
        />
      </View>
    </View>
  );
};

export default DressingScreenSecond;

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
    marginTop: height * 0.02,
  },
  toggleTabs: {
    flexDirection: "row",
    backgroundColor: "#eee",
    borderRadius: 25,
    marginBottom: height * 0.02,
    overflow: "hidden",
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: height * 0.015,
  },
  activeTabButton: {
    backgroundColor: "#ACF6AE",
  },
  tabText: {
    color: "#888",
    fontWeight: "500",
  },
  activeTabText: {
    color: "#fff",
    fontWeight: "bold",
  },
  heading: {
    fontSize: width * 0.045,
    fontWeight: "bold",
    marginBottom: height * 0.01,
  },
  slotHeader: {
    fontSize: width * 0.04,
    fontWeight: "500",
    marginBottom: height * 0.015,
  },
});
