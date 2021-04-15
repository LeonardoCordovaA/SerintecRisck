import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'

import SerintecStack from './SerintecStack'
import AccountStack from './AccountStack'
import ClientStack from './ClientStack'
import PendingInspectionsStack from './PendingInspectionsStack'

import { enableScreens } from 'react-native-screens';

enableScreens(true);

const Tab = createBottomTabNavigator()

export default function Navigation() {


    
    const screenOptions = (route, color) => {
        let iconName
        switch (route.name){
            case "account":
            iconName = "user-circle-outline"
            break;
            case "serintec":
            iconName = "house-circle"
            break;
            case "pendinginspections":
            iconName = "bell-circle_outline"
            break;case "client":
            iconName = "user-badge"
            break;
        }
        
        <Icon
            type="material-comunity"
            name={iconName}
            zise={22}
            color={color} 
         />
        
    }
    
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="account"
                tabBarOptions={{
                    inactiveTintColor: "#98858c",
                    activeTintColor:"#514e61"
                }}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color}) => screenOptions(route, color)
                })}
            >
                 <Tab.Screen
                    name="account"
                    component={AccountStack}
                    options={{title:"Acceso"}}
                />
                <Tab.Screen
                    name="serintec"
                    component={SerintecStack}
                    options={{title: "Serintec"}}
                />
                <Tab.Screen
                    name="pendinginspections"
                    component={PendingInspectionsStack}
                    options={{title: "Notificaciones"}}
                />
                <Tab.Screen
                    name="client"
                    component={ClientStack}
                    options={{title:"Clientes"}}
                />
                
            </Tab.Navigator>
        </NavigationContainer>
    )
}
