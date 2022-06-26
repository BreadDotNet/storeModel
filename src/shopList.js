import React, { useEffect } from "react"
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts, addToOrder, removeToOrder } from "./redux/actions"

const ShopList = () => {

    const {products, orders} = useSelector(state => state.productsReducer)

    const dispatch = useDispatch()

    const fetchProducts = () => dispatch(getProducts())

    const addToOrders = product => dispatch(addToOrder(product))

    const removeToOrders = product => dispatch(removeToOrder(product))

    const handleAddOrder = product => {
        addToOrders(product)
    }

    const handleRemoveOrder = product => {
        removeToOrders(product)
    }

    const exists = product => {
        if (orders.filter(item => item.id === product.id).length > 0) {
            console.log('Exist')
            return true
        }
        return false
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    const renderItem = ({item}) => {

        const IMAGE_URL = item.volumeInfo.imageLinks.thumbnail

        return(
            <View style={styles.productMainContainer}>
                <Image
                    source={{uri: IMAGE_URL}}
                    style={styles.productImage}
                    resizeMode='cover'
                />
                <View style={styles.productDescriptionContainer}>
                    <Text style={styles.productTitle}>{item.volumeInfo.title}</Text>
                    <TouchableOpacity
                        onPress={() => exists(item) ? handleRemoveOrder(item) : handleAddOrder(item)}
                        
                    >
                        <View style={styles.productButton}>
                            <Text style={exists(item) ? {color: 'red'} : {color: 'green'}}>Buy</Text>
                        </View>
                    </TouchableOpacity>
                    
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
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
    productButton: {
        paddingLeft: 26,
    },
})

export default ShopList