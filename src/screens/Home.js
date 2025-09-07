import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Menu from '../component/Menu'

const Home = (props) => {
  const description = "This is a sample description for the app. It provides an overview of the app's features and functionalities.";
 return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image 
          style={styles.headerImage}
          resizeMode="contain"
          source={require("../../assets/graphic.png")}
        />


        <Text style={styles.mainHeader}>Welcome to</Text>
        <Text
          style={[styles.mainheader, 
          {
            fontSize: 33,
          color: "#4c5dab",
          marginTop: 0,
          textTransform: "uppercase",
          },
        ]}>{props.channelName}
        </Text>
        <Text style={styles.paraStyle} > {description} </Text>

        <View style={styles.menuStyle}>
          <View style={styles.lineStyle}></View>
          <Menu />
          <View style={[styles.lineStyle,
            {
              marginVertical:10,
            },
          ]}></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    textAlign: 'center',
    
  },

  homeTop:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  headerImage:{
    height: undefined,
    width:"100%",
    aspectRatio: 1,
    display: "flex",
    justifyContent: "stretch",
    marginTop: 40,
    borderRadius: 20,
  },
  mainHeader:{
    fontSize: 30,
    color: "#344055",
    fontWeight: "500",
    textTransform: "uppercase",
  },
  paraStyle:{
    textAlign: "center",
    fontSize: 19,
    color: "#7d7d7d",
    paddingBottom: 30,
    lineHeight: 26,
    marginTop: 20,
  },

  lineStyle:{
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: "grey",
  }

  
});


export default Home