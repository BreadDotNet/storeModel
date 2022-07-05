import React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SignUp from "./SignUp"
import Login from "./Login"

const Stack = createNativeStackNavigator()

const AuthNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="SignUp">
            <Stack.Screen name="SignUp" component={SignUp}/>
            <Stack.Screen name="Login" component={Login}/>
        </Stack.Navigator>
    )
}

export default AuthNavigator