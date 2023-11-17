import React, {useState,useEffect}from 'react'
import * as Location from 'expo-location'

export const useGetWeather = () =>{
    const [error,setError] = useState()
    const [loading, setLoading] = useState(true)
    let WEATHER_API_KEY = "cafec23189bf4509de5aa42d2c4eb712"
    const [weather,setWeather] = useState([])
    const [lat,setLat] = useState([])
    const [lon,setLon] = useState([])

    const fetchWeatherData = async () => {
        try {
        const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
        const data = await res.json();
        setWeather(data)
    
        } catch (error) {
          setError("Could not fetch weather")
        } finally{
          setLoading(false)
        }
      }
    
      useEffect(()=> {
        (async () => {
          let {status} = await Location.requestForegroundPermissionsAsync()
          if (status !== 'granted') {
            setError("Permission to Access Location Was Denied")
            return
          }
          let location = await Location.getCurrentPositionAsync({})
          setLat(location.coords.latitude)
          setLon(location.coords.longitude)
          await fetchWeatherData()
        }) ()
      }, [lat,lon])
      return [loading,error,weather]
}