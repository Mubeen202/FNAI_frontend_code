import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import GlobalApi from '../Utils/Services/GlobalApi'

export default function Slider() {

    useEffect(()=>{
        data();
    },[])
    const data = async()=>{
        await GlobalApi.sliderData().then((response)=>{
            console.log('this is response', response)
        }).catch()
    }
  return (
    <View>
      <Text>Slider</Text>
    </View>
  )
}