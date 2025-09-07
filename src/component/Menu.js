import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View,Text, TouchableOpacity,StyleSheet,Image } from "react-native";

const Menu = () => {
    const navigation = useNavigation()
  return (
    <View style = {styles.menuContainer} >

        <TouchableOpacity 
            style = {styles.buttonStyle}
            onPress={() => navigation.navigate("Course")}>
            {/* <Text>Course</Text> */}
            <Image 
                style={styles.iconStyle}
                source={{uri: 'https://img.icons8.com/?size=100&id=kmUrp7YjifpP&format=png&color=000000'}}
                
            />
        </TouchableOpacity>

        <TouchableOpacity 
            style = {styles.buttonStyle}
            onPress={() => navigation.navigate("About")}>
            <Image 
                style={styles.iconStyle}
                source={{uri: 'https://img.icons8.com/?size=100&id=1jq0PLG2hznd&format=png&color=000000'}}
            />
        </TouchableOpacity>

        <TouchableOpacity 
            style = {styles.buttonStyle}
            onPress={() => navigation.navigate("Student")}>
            
            <Image 
                style={styles.iconStyle}
                source={{uri: 'https://img.icons8.com/?size=100&id=40323&format=png&color=000000'}}
            />
            
            
        </TouchableOpacity>

        <TouchableOpacity 
            style = {styles.buttonStyle}
            onPress={() => navigation.navigate("Contact")}>
            <Image 
                style={styles.iconStyle}
                source={{uri: 'https://img.icons8.com/?size=100&id=13731&format=png&color=000000'}}
            />
        </TouchableOpacity>


    </View>
  );
}
const styles = StyleSheet.create({
    menuContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        padding: 10,
        justifyContent: "space-evenly",
    },
    textStyle:{
        fontSize: 20,
        color: "#4c5dab",
        fontWeight: "bold",
        textTransform: "uppercase",
    },

    iconStyle:{
        width: '100%',
        height: 30,
        aspectRatio:1,
    },
});

export default Menu;