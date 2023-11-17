import { Feather } from '@expo/vector-icons';
import CurrentWeather from '../screens/CurrentWeather'
import UpcomingWeather from '../screens/UpcomingWeather'
import City from "../screens/City"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator()

const Tabs = ({weather}) => {
    return (
<Tab.Navigator screenOptions ={{
        tabBarActiveTintColor : "#c78a44",
        tabBarInactiveTintColor : "black",
        tabBarStyle : {
            backgroundColor : "#e2e0d4"
        },
        headerStyle : {
            backgroundColor : "#959595"
        },
        headerTitleStyle : {
            fontWeight : "bold",
            fontSize : 25,
            color : "#565c5e"
        }
      }}>
        <Tab.Screen name = "Current" 
        options = {{tabBarIcon : ({focused}) => {
          return (<Feather name = "droplet"
          size = {25}
          color = {focused ? "#d8b26e" : "black"}
          />) 
        } 
        }}>
          {() => <CurrentWeather weatherData = {weather.list[0]} />}
          </Tab.Screen>
        <Tab.Screen name = "Upcoming" 
        options = {{tabBarIcon : ({focused}) => {
          return  <Feather name = "clock"
          size = {25}
          color = {focused ? "#d8b26e" : "black"}
          />
    
        }
        }} >
          {() => <UpcomingWeather weatherData = {weather.list} />}
        </Tab.Screen>
        <Tab.Screen name = "City" 
        options = {{
          tabBarIcon : ({focused}) =>{
            return (
            <Feather name = "home"
            size = {25}
            color = {focused ? "#d8b26e" : "black"}
            />
            )
          } 
        }}>
          {() => <City weatherData = {weather.city} />} 
          </Tab.Screen>
      </Tab.Navigator>
    )
}

export default Tabs