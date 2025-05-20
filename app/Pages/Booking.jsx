import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");

const option = [
  { btnName: "All" },
  { btnName: "Pending" },
  { btnName: "Completed" },
  { btnName: "Cancelled" },
];

const MyBooking = () => {
  const [selectedOption, setSelectedOption] = useState("All");

  const handleSelectOption = (btnName) => {
    setSelectedOption(btnName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.headerText}>My Booking</Text>

        <FlatList
          data={option}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
          keyExtractor={(item) => item.btnName}
          renderItem={({ item }) => {
            const isSelected = item.btnName === selectedOption;
            return (
              <TouchableOpacity
                style={[
                  styles.optionButton,
                  isSelected && styles.selectedOptionButton,
                ]}
                onPress={() => handleSelectOption(item.btnName)}
              >
                <Text
                  style={[
                    styles.optionText,
                    isSelected && styles.selectedOptionText,
                  ]}
                >
                  {item.btnName}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default MyBooking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    marginTop: height * 0.04,
    padding: width * 0.05,
  },
  headerText: {
    fontSize: width * 0.05,
    fontWeight: "bold",
    marginBottom: 16,
  },
  flatListContainer: {
    paddingVertical: 10,
  },
  optionButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ACF6AE",
    backgroundColor: "#fff",
  },
  selectedOptionButton: {
    backgroundColor: "#ACF6AE",
  },
  optionText: {
    fontSize: width * 0.035,
    color: "#333",
  },
  selectedOptionText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
