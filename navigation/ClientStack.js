import {createStackNavigator} from '@react-navigation/stack'
import Client from '../screens/Client'
import React from 'react'

const Stack = createStackNavigator ()

export default function ClientStack() {
    return (
       <Stack.Navigator>
           <Stack.Screen
             name="client"
             component={Client}
             options= {{title:"Datos Del Cliente"}}
           />
       </Stack.Navigator>
       
       
    )
}

