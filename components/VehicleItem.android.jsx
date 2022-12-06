import React from 'react'
import {Text, View} from'react-native'

const VehicleItem = ({attr, value, children}) => {
  return ( 
    <View style={{marginVertical: 6}}>
      <Text style={{fontWeight: "300", letterSpacing: 0.5, fontSize: 16}}>{attr || 'prop'}</Text>
      <Text style={{fontWeight: "600", fontSize: 15}}>{children}</Text>
    </View>
  )
}

export default VehicleItem