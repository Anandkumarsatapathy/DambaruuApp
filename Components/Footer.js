// import React from "react";
// import { Text, View } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import { Activity, HomeScreen, ParentQuiz2, Subscription2 } from "../Screen";
// const Tab = createBottomTabNavigator();
// const Footer = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;

//           if (route.name === "Home") {
//             iconName = focused
//               ? "ios-information-circle"
//               : "ios-information-circle-outline";
//           } else if (route.name === "Parent") {
//             iconName = focused ? "ios-list" : "ios-list-outline";
//           }
//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: "tomato",
//         tabBarInactiveTintColor: "gray",
//       })}
//     >
//       <Tab.Screen name="Home" component={ParentQuiz2} />
//       <Tab.Screen name="Parent" component={ParentQuiz2} />
//       <Tab.Screen name="Activity" component={Activity} />
//       <Tab.Screen name="Subscription" component={Subscription2} />
//     </Tab.Navigator>
//   );
// };
// export default Footer;
