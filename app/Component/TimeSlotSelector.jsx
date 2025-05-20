import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const TimeSlotSelector = ({ slots = [], selectedTime, onSelect, icon }) => {
  return (
    <View>
      {slots.map((slot, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.timeSlotCard,
            slot.disabled && styles.disabledSlotCard,
            selectedTime === slot.time && styles.selectedSlotCard,
          ]}
          onPress={() => !slot.disabled && onSelect(slot.time)}
          disabled={slot.disabled}
        >
          {slot.icon && <Image source={slot.icon} style={styles.slotIcon} />}
          <Text
            style={[
              styles.slotText,
              slot.disabled && styles.disabledSlotText,
            ]}
          >
            {slot.label} - ({slot.time})
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TimeSlotSelector;

const styles = StyleSheet.create({
  timeSlotCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ACF6AE",
    marginBottom: 10,
  },
  selectedSlotCard: {
    backgroundColor: "#ACF6AE",
  },
  disabledSlotCard: {
    borderColor: "#ccc",
    backgroundColor: "#f5f5f5",
  },
  slotIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    resizeMode: "contain",
  },
  slotText: {
    fontSize: width * 0.035,
    color: "#333",
  },
  disabledSlotText: {
    color: "#aaa",
  },
});
