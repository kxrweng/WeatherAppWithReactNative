import React, {useState,useEffect}from 'react'
import { ActivityIndicator, View, StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import { useGetWeather } from "./src/hooks/useGetWeather"
import ErrorItem from "./src/components/ErrorItem"
import * as Location from 'expo-location'
//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
//dk how to import env file fk me
const App = () => {
  const [loading,error,weather] = useGetWeather()

  if(weather && weather.list){
    return (
      <NavigationContainer>
        <Tabs weather = {weather}/>
      </NavigationContainer>
    )
  }
 
    return (
      <View style = {styles.container} >
        {error ? (
          <ErrorItem />
        ) : (
        <ActivityIndicator size = {"large"} color = {"green"} /> 
        )}
      </View>
    )
  }

const styles = StyleSheet.create({
  container : {
    justifyContent : "center",
    flex : 1
  }
})
export default App