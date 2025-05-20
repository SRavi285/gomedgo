import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const HomeContent = () => {
  const services = [
    {
      id: "1",
      name: "Expert Caretaker",
      icon: require("../../assets/icons/man.png"),
      path: "/ExpertCaretaker/ExpertScreenFirst",
    },
    {
      id: "2",
      name: "Baby Caretaker",
      icon: require("../../assets/icons/work.png"),
      path: "/BabyCaretaker/BabyCaretakerScreen",
    },
    {
      id: "3",
      name: "At Home Nurse",
      icon: require("../../assets/icons/healthcare-and-medical.png"),
      path: "/AtHomeNurse/AtHomeNurseScreen",
    },
    {
      id: "4",
      name: "Injections & Infusions",
      icon: require("../../assets/icons/vaccine.png"),
      path: "/InjectionAndInfusions/InjectionAndInfusionsScreen",
    },
    {
      id: "5",
      name: "Elderly Bath Hygiene",
      icon: require("../../assets/icons/bathing.png"),
      path: "/ElderlyBathHygiene/ElderlyBathHygieneScreen",
    },
    {
      id: "6",
      name: "Dressing",
      icon: require("../../assets/icons/medical.png"),
      path: "/Dressing/DressingScreen",
    },
    {
      id: "7",
      name: "Medical Equipments",
      icon: require("../../assets/icons/medical-devices.png"),
      unimplemented: true,
    },
    {
      id: "8",
      name: "Physiotherapy",
      icon: require("../../assets/icons/assistant.png"),
      path: "/Physiotherapy/PhysiotherapyScreen",
    },
    {
      id: "9",
      name: "Lab Test",
      icon: require("../../assets/icons/lab.png"),
      unimplemented: true,
    },
  ];

  const handleNotImplemented = () => {
    alert("This feature is not yet implemented.");
  };

  const numColumns = 3;
  const screenWidth = Dimensions.get("window").width;
  const itemSize = screenWidth / numColumns - 20;

  const styles = StyleSheet.create({
    scrollContainer: {
      flex: 1,
      backgroundColor: "#fff",
    },

    greenContainer: {
      flex: 1,
      marginTop: 40,
      backgroundColor: "#ACF6AE",
      width: "100%",
      height: 250,
      borderBottomRightRadius: 70,
      borderBottomLeftRadius: 70,
    },
    topText: {
      fontSize: 16,
      color: "#000",
      marginTop: 15,
      marginLeft: 20,
    },
    careProviderContainer: {
      marginTop: 15,
      marginLeft: 20,
      marginRight: 20,
      backgroundColor: "#d1ffd2",
      borderRadius: 20,
      paddingHorizontal: 30,
      paddingVertical: 20,
    },
    careProviderText: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#00c2cb",
    },
    careProviderTextDesc: {
      fontSize: 16,
      color: "#00c2cb",
      marginTop: 5,
    },
    card: {
      flexDirection: "row",
      backgroundColor: "#fff",
      padding: 14,
      borderRadius: 20,
      alignItems: "center",
      elevation: 4,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 6,
      shadowOffset: { width: 0, height: 2 },
      margin: 20,
      height: 160,
    },
    left: {
      flex: 1,
    },
    logo: {
      width: 50,
      height: 50,
      resizeMode: "contain",
      marginBottom: 6,
      marginRight: 40,
    },
    chatBubble: {
      backgroundColor: "#00c2cb",
      borderBottomRightRadius: 25,
      borderBottomLeftRadius: 25,
      borderTopLeftRadius: 25,
      padding: 10,
      marginBottom: 8,
      maxWidth: "90%",
    },
    chatText: {
      color: "#fff",
      fontSize: 16,
      marginLeft: 10,
    },
    button: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      borderColor: "#6a1b9a",
      borderWidth: 1,
      borderRadius: 16,
      paddingHorizontal: 14,
      paddingVertical: 6,
      alignSelf: "flex-start",
      marginTop: 8,
    },
    buttonText: {
      color: "#000",
      fontSize: 16,
    },
    doctor: {
      width: 70,
      height: 100,
      marginLeft: 10,
      resizeMode: "contain",
    },
    cardContainer: {
      width: itemSize,
      marginTop: 20,
      margin: 10,
      alignItems: "center",
    },
    iconWrapper: {
      backgroundColor: "#f1f4f6",
      padding: 15,
      borderRadius: 50,
      marginBottom: 10,
    },
    icon: {
      width: 40,
      height: 40,
      resizeMode: "contain",
    },
    label: {
      textAlign: "center",
      fontSize: 14,
      fontWeight: "500",
    },
    cardNurces: {
      flexDirection: "row",
      borderRadius: 20,
      padding: 16,
      alignItems: "center",
      margin: 16,
    },
    leftNurces: {
      flex: 1,
      paddingRight: 10,
    },
    title: {
      color: "#fff",
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 10,
    },
    bullet: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 6,
    },
    bulletText: {
      color: "#fff",
      fontSize: 14,
      marginLeft: 8,
    },
    buttonNurces: {
      backgroundColor: "#fff",
      borderRadius: 20,
      paddingHorizontal: 14,
      paddingVertical: 8,
      flexDirection: "row",
      alignItems: "center",
      alignSelf: "flex-start",
      marginTop: 10,
    },
    buttonTextNurces: {
      color: "#00c2cb",
      fontWeight: "bold",
      fontSize: 14,
    },
    image: {
      width: 90,
      height: 90,
      resizeMode: "contain",
    },
  });

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.greenContainer}>
        <Text style={styles.topText}>Greater Noida</Text>

        <TouchableOpacity
          onPress={() => alert("Join Provider")}
          style={styles.careProviderContainer}
        >
          <Text style={styles.careProviderText}>Join as a Care Provider →</Text>
          <Text style={styles.careProviderTextDesc}>
            For Nurses, Caretakers, and Physios
          </Text>
        </TouchableOpacity>

        <View style={styles.card}>
          {/* Logo and Message */}
          <Image
            source={require("../../assets/images/icon.png")}
            style={styles.logo}
          />
          <View style={styles.left}>
            <View style={styles.chatBubble}>
              <Text style={styles.chatText}>
                Hi! I am AI Alia. How can I help you?
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                alert("Chat with Alia");
              }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Tap To chat</Text>
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={16}
                color="#6a1b9a"
                style={{ marginLeft: 4 }}
              />
            </TouchableOpacity>
          </View>

          {/* Doctor Image */}
          <Image
            source={require("../../assets/images/nurces-group-image.png")}
            style={styles.doctor}
          />
        </View>
      </View>

      <View style={{ marginTop: 60 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginLeft: 20,
            marginTop: 50,
          }}
        >
          Service Categories
        </Text>

        <FlatList
          data={services}
          keyExtractor={(item) => item.id}
          numColumns={numColumns}
          contentContainerStyle={styles.container}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                if (item.unimplemented) {
                  handleNotImplemented();
                } else {
                  router.push(item.path);
                }
              }}
              style={styles.cardContainer}
            >
              <View style={styles.iconWrapper}>
                <Image source={item.icon} style={styles.icon} />
              </View>
              <Text style={styles.label}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginLeft: 20,
            marginTop: 20,
          }}
        >
          Professionals
        </Text>

        <LinearGradient
          colors={["#00c2cb", "#f5f5f5"]}
          style={styles.cardNurces}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.leftNurces}>
            <Text style={styles.title}>At Home Nursing Care</Text>
            <View style={styles.bullet}>
              <Ionicons name="checkmark-circle" size={18} color="white" />
              <Text style={styles.bulletText}>
                Expert Medical Equipment Management
              </Text>
            </View>
            <View style={styles.bullet}>
              <Ionicons name="checkmark-circle" size={18} color="white" />
              <Text style={styles.bulletText}>
                Support for bedridden patients
              </Text>
            </View>
            <View style={styles.bullet}>
              <Ionicons name="checkmark-circle" size={18} color="white" />
              <Text style={styles.bulletText}>
                Timely Medication & Injection Delivery
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => {
                alert("Book Nurses");
              }}
              style={styles.buttonNurces}
            >
              <Text style={styles.buttonTextNurces}>Book Nurses</Text>
              <Ionicons
                name="arrow-forward"
                size={16}
                color="#7b61ff"
                style={{ marginLeft: 6 }}
              />
            </TouchableOpacity>
          </View>

          <Image
            source={require("../../assets/images/nurces-group-image.png")}
            style={styles.image}
          />
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

export default HomeContent;
