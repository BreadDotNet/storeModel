import React from "react"
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { removeToOrder } from "./redux/actions"

const OrderList = () => {

    const {orders} = useSelector(state => state.productsReducer)

    const dispatch = useDispatch()

    const removeToOrders = product => dispatch(removeToOrder(product))

    const handleRemoveOrder = product => {
        removeToOrders(product)
    }

    const renderItem = ({item}) => {

        const IMAGE_URL = item.volumeInfo.imageLinks.thumbnail

        return (
            <View style={styles.productMainContainer}>
                <Image
                    source={{uri: IMAGE_URL}}
                    style={styles.productImage}
                    resizeMode='cover'
                />
                <View style={styles.productDescriptionContainer}>
                    <Text style={styles.productTitle}>{item.volumeInfo.title}</Text>
                    <TouchableOpacity
                        onPress={() => handleRemoveOrder(item)}
                    >
                        <View style={styles.productButton}>
                            <Text style={styles.productDelete}>Delete from order</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={orders}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flex: 1,
    },
    productMainContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 12,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    productDescriptionContainer: {
        flexDirection: 'column',
    },
    productImage: {
        width: 100,
        height: 150,
        borderRadius: 5,
    },
    productTitle: {
        paddingLeft: '5%',
        fontSize: 18,
        color: 'black',
    },
    productDelete: {
        fontSize: 16,
        color: 'red'
    },
    productButton: {
        paddingLeft: 26,
    },
})

export default OrderList