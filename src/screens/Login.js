import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SignUp from './SignUp'
import axios from 'axios'

const Login = ({navigation}) => {

    const test = async () => {
        try {
            //const res = await axios.post('http://localhost:5000/login', {name: 'test123', password: '123'})
            const res = await axios({
                method: 'post',
                url: 'http://localhost:8000/login',
                data: {
                    name: 'test123',
                    password: '123'
                }
            })
            console.log(res)
        }
        catch (err) {
            console.log(err)
        }
        
    }

    return (
        <View
            style={styles.mainContainer}
        >
            <View
                style={styles.headerContainer}
            >
                <Text 
                    style={styles.title}
                >User ID</Text>
            </View>
            <View
                style={styles.inputContainer}
            >
                <TextInput
                    style={styles.input}
                    placeholder='Enter your login'
                />
            </View>
            <View
                style={styles.headerContainer}
            >
                <Text 
                    style={styles.title}
                >Password</Text>
            </View>
            <View
                style={styles.inputContainer}
            >
                <TextInput
                    style={styles.input}
                    placeholder='Enter your password'
                />
            </View>
            <View
                style={styles.buttonContainer}
            >
                <Button
                    title='Login'
                    onPress={() => test(this)}
                />
            </View>
            <View
                style={styles.touchableContainer}
            >
                <TouchableOpacity
                    onPress={() => {navigation.navigate('SignUp')}}
                >
                    <Text
                        style={styles.text}
                    >If you have no account, let's SignUp</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    mainContainer: {
        margin: '5%',
        flexDirection: 'column'
    },
    headerContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '2%'
    },
    inputContainer: {
        paddingBottom: '5%'
    },
    buttonContainer: {
        paddingBottom: 10
    },
    touchableContainer: {
        alignItems: 'center',
        paddingTop: '5%'
    },
    touchable: {

    },
    text: {
        color: 'blue'
    },
    title: {
        fontSize: 18,
        color: 'black'
    },
    input: {
        borderRadius: 5,
        color: 'black',
        backgroundColor: 'white'
    },

})