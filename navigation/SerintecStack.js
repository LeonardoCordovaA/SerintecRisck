import {createStackNavigator} from '@react-navigation/stack'
import Serintec from '../screens/Serintec'
import React from 'react'

const Stack = createStackNavigator ()

export default function SerintecStack() {
    return (
       <Stack.Navigator>
           <Stack.Screen
             name="serintec"
             component={Serintec}
             options= {{title:"Inicio"}}
           />
       </Stack.Navigator>
    )
}
