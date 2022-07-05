import React from "react"
import { Image, StyleSheet } from "react-native"
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import ShopList from "./shopList"
import OrderList from "./orderList"
import AuthNavigator from "./screens/AuthNavigator"

const BAG = require('./icons/bag.png')
const SHOP = require('./icons/shop.png')

const Tab = createBottomTabNavigator()

const TabBarOptions = {
    showLabel: false,
    activeTintColor: '#9381ff',
    style: {
        height: '10%',
    }
}

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator TabBarOptions={TabBarOptions}>
                <Tab.Screen
                    name="Shop List"
                    component={ShopList}
                    options={{
                        tabBarIcon: () => (
                            <Image source={SHOP} style={styles.icon}/>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Order List"
                    component={OrderList}
                    
                    options={{
                        tabBarIcon: () => (
                            <Image source={BAG} style={styles.icon}/>
                        ),
                    }}
                />
                
                <Tab.Screen
                    name="Autorization"
                    component={AuthNavigator}
                    options={{
                        headerShown: false,
                        tabBarIcon: () => (
                            <Image source={BAG} style={styles.icon}/>
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    icon: {
        height: 20,
        width: 20,
    }
})

export default RootNavigator