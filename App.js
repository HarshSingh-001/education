import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/screens/Home"; 
import About from "./src/screens/About";
import Contact from "./src/screens/Contact";
import Course from "./src/screens/Course";
import Student from "./src/screens/Student";
import {useFonts, JosefinSans_400Regular,JosefinSans_500Medium} from "@expo-google-fonts/josefin-sans";
import {Nunito_600SemiBold, Nunito_700Bold} from "@expo-google-fonts/nunito"
import AppLoading from 'expo-app-loading';

export default function App() {
  const Stack = createNativeStackNavigator();

  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });
  if(!fontsLoaded){
    <AppLoading />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        {/* Home Screen */}
        <Stack.Screen name="Home" >
          {(props) => <Home {...props} channelName={"Nisha bhaskar"} />}
        </Stack.Screen>

        {/* About Screen */}
        <Stack.Screen 
          name="About" 
          component={About} 
          options={{headerTitleStyle:{
            fontSize: 25,
            fontFamily:"Nunito_600SemiBold",
          },
            headerTitle: "About Us",
            headerTitleAlign: "center",
          }}
        />

        {/* Contact Screen */}
        <Stack.Screen 
          name="Contact" 
          component={Contact}
          options={{headerTitleStyle:{
            fontSize: 25,
            fontFamily:"Nunito_600SemiBold",
          },
            headerTitle: "Contact Us",
            headerTitleAlign: "center",
          }}
        />

        {/* Course Screen */}
        <Stack.Screen 
          name="Course" 
          component={Course} 
          options={{headerTitleStyle:{
            fontSize: 25,
            fontFamily:"Nunito_600SemiBold",
          },
            headerTitle: "Course Details",
            headerTitleAlign: "center",
          }}

        />
        
        {/* UserData Screen */}
        <Stack.Screen 
          name="Student" 
          component={Student}
          options={{headerTitleStyle:{
            fontSize: 25,
            fontFamily:"Nunito_600SemiBold",
          },
            headerTitle: "Student Details",
            headerTitleAlign: "center",
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({});
  

  