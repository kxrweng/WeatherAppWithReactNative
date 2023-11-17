import React from 'react'
import {View,SafeAreaView,Text,StyleSheet} from 'react-native'
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText'
import {weatherType} from "../utilities/weatherType"

const CurrentWeather = ( {weatherData}) => {
  const {
    wrapper,
    container,
    tempStyles,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message} = styles

    console.log(weatherData);
    const {main : {temp, feels_like, temp_max, temp_min},weather} = weatherData

    const weatherCondition = weather[0]?.main
    console.log(weatherCondition)
    return (
      <SafeAreaView
       style = {[
        wrapper, 
        { backgroundColor : weatherType[weatherCondition]?.backgroundColor} 
        ]}
        >
       
        <View style = {container}>
        <Feather name = {weatherType[weatherCondition]?.icon} 
        size = {100} color = "black" />
          <Text style = {tempStyles}>{`${temp}°C`}</Text>
          <Text style = {feels}>{`Feels like ${feels_like}`} </Text>
          <RowText 
          messageOne = {`High : ${temp_max}°C `}
          messageTwo = { `Low : ${temp_min}°C`} 
          containerStyle = {highLowWrapper} 
          messageOneStyle = {highLow} 
          messageTwoStyle = {highLow} />
        
        </View>
          <RowText 
          messageOne = {weather[0]?.description}
          messageTwo = {weatherType[weatherCondition]?.message}
          containerStyle = {bodyWrapper} 
          messageOneStyle = {description} 
          messageTwoStyle = {message} />
      
      </SafeAreaView>
    )
  }
  
  
  const styles = StyleSheet.create({
    wrapper : {
      flex : 1,
    },
    container : {
      flex : 1,
      alignItems : 'center',
      justifyContent: 'center'
    },
    tempStyles : {
      color : 'black',
      fontSize : 48
    },
    feels : {
      fontSize : 30,
      color : 'black'
    },
    bodyWrapper : {
      paddingLeft : 25,
      paddingRight : 25,
      marginBottom : 40,
      justifyContent : "center",
      alignItems : "flex-start"
    },
    description : {
      fontSize : 43
    },

    highLowWrapper:{
      flexDirection : "row"
    },

    message : {
      fontSize : 25
    },
    highLow : {
      fontSize : 20
    }

  })
  export default CurrentWeather