import React from 'react'
import {StatusBar, SafeAreaView,Text,StyleSheet,ImageBackground,View } from 'react-native'
import IconText from '../components/IconText.jsx'
import moment from 'moment'
const City = ({weatherData}) => {
    const {container, cityName, countryName, populationWrapper, riseSetWrapper,populationText,riseSetText,rowLayout,imageLayout, cityText} = styles
    const {name,country,population,sunrise,sunset} = weatherData
    return (
        <SafeAreaView style = {container}>
            <StatusBar></StatusBar>
            <ImageBackground source = {require("../../assets/marbleBackground.jpg")} style = {imageLayout}>
            <Text style = {[cityName,cityText]}>{name}</Text>
            <Text style = {[countryName,cityText]}>{country}</Text>
            <View style = {[populationWrapper, rowLayout]}>
            <IconText 
            iconName = "user" 
            iconColor = "black"
            bodyText = {`Population : ${population}`} 
            bodyTextStyles = {populationText}/>
            
            </View>
       
            <View style = {[riseSetWrapper, rowLayout]}>
                <IconText
                iconName = "sunrise"
                iconColor = "black"
                bodyText = {moment(sunrise).format('h:mm:ss a')}
                bodyTextStyles = {riseSetText}>
                </IconText>

                <IconText
                iconName = "sunset"
                iconColor = "black"
                bodyText = {moment(sunset).format('h:mm:ss a')}
                bodyTextStyles = {riseSetText}>
                </IconText>
      
            </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    },

    imageLayout : {
        flex : 1,
    },
    cityName : {
        fontSize : 40,
    },

    countryName : {
        fontSize : 30,
    },

    cityText : {
        justifyContent :"center",
        fontWeight : "bold",
        alignSelf : "center",
        
    },

    populationWrapper : {
        
        justifyContent : "center",
        marginTop : 30
    },

    populationText : {
        marginLeft : 7.5,
        fontSize : 25,
        
    },
    riseSetWrapper : {
       
        justifyContent : "space-around",
        marginTop : 30
    },

    riseSetText : {
        fontSize : 20,
    },
    rowLayout : {
        flexDirection : "row",
        alignItems : "center"
    }
})
export default City