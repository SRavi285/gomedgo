import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get("window");

const TopNavigation = ({navText}) => {
  return (
    <View style={styles.headerContainer}>
            <TouchableOpacity
              onPress={() => router.back()}
              style={styles.backButton}
            >
              <Ionicons name="arrow-back" size={24} color="#fff" />
            </TouchableOpacity>
    
            <Text style={styles.headerText}>{navText}</Text>
          </View>
  )
}

export default TopNavigation

const styles = StyleSheet.create({
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
})