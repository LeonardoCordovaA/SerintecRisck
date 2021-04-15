import {createStackNavigator} from '@react-navigation/stack'
import PendingInspections from '../screens/PendingInspections'
import React from 'react'

const Stack = createStackNavigator ()


export default function PendingInspectionsStack() {
    return (
       <Stack.Navigator>
           <Stack.Screen
             name="pendingInspections"
             component={PendingInspections}
             options= {{title:"Inspecciones Pendientes"}}
           />
       </Stack.Navigator>
       
       
    )
}

