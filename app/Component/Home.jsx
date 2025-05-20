// Home.js
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useEffect, useState } from "react";
import AccountScreen from "../AccountPage/AccountScreen";
import HomeContent from "../Pages/HomeContent";
import Booking from "../Pages/Booking";

const Tab = createBottomTabNavigator();

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  useEffect(() => {
    const checkLogin = async () => {
      const userLoggedIn = true; 
      setIsLoggedIn(userLoggedIn);
    };

    checkLogin();
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Booking") {
            iconName = focused ? "calendar" : "calendar-outline";
          } else if (route.name === "Account") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "lightgreen",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeContent} />
      {isLoggedIn && <Tab.Screen name="Booking" component={Booking} />}
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default Home;
