import {createStackNavigator} from '@react-navigation/stack'
import Document from '../screens/Document'
import React from 'react'

const Stack = createStackNavigator ()

export default function DocumentStack() {
    return (
       <Stack.Navigator>
           <Stack.Screen
             name="document"
             component={Document}
             options= {{title:"Documentos Del Cliente"}}
           />
       </Stack.Navigator>
       
    )
}

