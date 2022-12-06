import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import VehicleData from "./components/VehicleData.android";
import Brands from "./components/Brands.android";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BrandVehicles from "./components/BrandVehicles";
import VehicleYears from "./components/VehicleYears";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import UserContext from "./components/contexts/UserContext";
import Home from "./components/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <UserContext>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Brands" component={Brands} />
          <Stack.Screen name="LoginPage" component={LoginPage} />
          <Stack.Screen name="RegisterPage" component={RegisterPage} />
          <Stack.Screen name="VehicleData" component={VehicleData} />
          <Stack.Screen name="Years" component={VehicleYears} />
          <Stack.Screen name="Brand Vehicles" component={BrandVehicles} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext>
  );
}
