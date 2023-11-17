import React from 'react'
import {Text,View, StyleSheet} from 'react-native'
import { Feather} from '@expo/vector-icons'

const IconText = (props) => {
    const {textTheme, container} = styles
    const {iconName,iconColor,bodyText, bodyTextStyles} = props
    // console.log([iconName])
    return ( 
        <View style = {container}>
            {/* <Text>Hi</Text> */}
               <Feather name= {iconName} size={50} color= {iconColor} />
            <Text style = {[textTheme, bodyTextStyles]}>{bodyText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textTheme : {
        fontWeight : "bold",
    },
    container : {
        alignItems : "center"
    }
})

export default IconText

