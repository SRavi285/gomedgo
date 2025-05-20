import { useState } from "react";
import {
  Button,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Calendar } from "react-native-calendars";

const MultiDatePicker = ({
  selectedDates,
  onSelectDates,
  label = "Pick Dates",
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const onDayPress = (day) => {
    const dateStr = day.dateString;
    const newDates = { ...selectedDates };

    if (newDates[dateStr]) {
      delete newDates[dateStr];
    } else {
      newDates[dateStr] = { selected: true, marked: true, dotColor: "#00adf5" };
    }

    onSelectDates(newDates);
  };

  const getDisplayText = () => {
    const keys = Object.keys(selectedDates);
    if (keys.length === 0) return label;

    return keys
      .map((d) => {
        const dateObj = new Date(d);
        const month = dateObj.toLocaleString("default", { month: "short" });
        return `${dateObj.getDate()} ${month}`;
      })
      .join(", ");
  };

  return (
    <>
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setModalVisible(true)}
      >
        <Text>{getDisplayText()}</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide">
        <View style={{ flex: 1 }}>
          <Calendar
            onDayPress={onDayPress}
            markedDates={selectedDates}
            markingType={"multi-dot"}
          />
          <Button title="Done" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </>
  );
};

export default MultiDatePicker;

const styles = StyleSheet.create({
  dropdown: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ccc",
    marginBottom: 10,
  },
});
