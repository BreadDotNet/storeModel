import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { signUp } from '../redux/action/actions'

import axios from 'axios'
import { panHandlerName } from 'react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler'

const SignUp = ({navigation}) => {

    // const test = async () => {
    //     try {
    //         const res = await axios.post('http://192.168.100.3:8000/login', {name: 'test123', password: '123'})

    //         console.log(res.data.accessToken)
    //     }
    //     catch (err) {
    //         console.log(err)
    //     }
        
    // }

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const auth = useSelector((state) => state.authReducer)

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
                    onChange={(text) => {setName(text)}}
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
                    onChange={(text) => {setPassword(text)}}
                    placeholder='Enter your password'
                />
            </View>
            <View
                style={styles.buttonContainer}
            >
                <Button
                    title='SignUp'
                    onPress={() => dispatch(signUp(name, password))}
                />
            </View>
            <View
                style={styles.touchableContainer}
            >
                <TouchableOpacity
                    onPress={() => {navigation.navigate('Login')}}
                >
                    <Text
                        style={styles.text}
                    >If you have account, let's Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignUp

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