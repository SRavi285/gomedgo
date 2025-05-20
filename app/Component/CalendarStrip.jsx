import React, { useMemo } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
// import PropTypes from "prop-types";

const { width, height } = Dimensions.get("window");

const CalendarStrip = ({ selectedDate, onDateSelect, numberOfDays = 7 }) => {
  const today = new Date();

  const datesList = useMemo(() => {
    const dates = [];
    for (let i = 0; i < numberOfDays; i++) {
      const dateObj = new Date(today);
      dateObj.setDate(today.getDate() + i);

      dates.push({
        day: dateObj.toLocaleString("en-US", { weekday: "short" }),
        date: dateObj.getDate(),
        fullDate: dateObj.toISOString().split("T")[0],
      });
    }
    return dates;
  }, [numberOfDays]);

  return (
    <View style={styles.container}>
      <FlatList
        data={datesList}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.fullDate}
        contentContainerStyle={styles.flatListContainer}
        renderItem={({ item }) => {
          const isSelected = item.fullDate === selectedDate;
          return (
            <TouchableOpacity
              style={[
                styles.dateItem,
                { backgroundColor: isSelected ? "#ACF6AE" : "#fff" },
              ]}
              onPress={() => onDateSelect(item.fullDate)}
            >
              <Text style={[styles.dayText, isSelected && styles.selectedText]}>
                {item.day}
              </Text>
              <Text
                style={[styles.dateText, isSelected && styles.selectedText]}
              >
                {item.date}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

// CalendarStrip.propTypes = {
//   selectedDate: PropTypes.string.isRequired,
//   onDateSelect: PropTypes.func.isRequired,
//   numberOfDays: PropTypes.number,
// };

export default CalendarStrip;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: height * 0.015,
  },
  flatListContainer: {
    paddingHorizontal: width * 0.02,
  },
  dateItem: {
    width: width * 0.13,
    height: height * 0.1,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#E1E1E1",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: width * 0.012,
  },
  dayText: {
    fontSize: width * 0.032,
    color: "#A1A8B0",
  },
  dateText: {
    fontSize: width * 0.04,
    fontWeight: "bold",
    color: "#000",
  },
  selectedText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});
