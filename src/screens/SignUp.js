import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import axios from 'axios'

const SignUp = () => {

    // const test = async () => {
    //     try {
    //         const res = await axios.post('http://localhost:5000/login', {name: 'test123', password: '123'})
    //         console.log(res)
    //     }
    //     catch (err) {
    //         console.log(err)
    //     }
        
    // }

    return (
        <View>
            <View>
                <Text>Login</Text>
                <TextInput

                />
                <Button
                    title='Login'
                    // onPress={() => test(this)}
                >

                </Button>
            </View>
        </View>
    )
}
export default SignUp