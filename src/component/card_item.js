import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';

export const CardItem = ({ name, amount, frequencies }) => {
    const { width } = useWindowDimensions()
    console.log('cardItem : ', { name, amount, frequencies });


    const styles = StyleSheet.create({
        wrapper: {
            flexDirection: 'row',
            backgroundColor: 'red',
            borderRadius: 6,
            paddingHorizontal: 12,
            paddingVertical: 20,
            justifyContent: 'space-between',
            marginVertical: 6
        },
        title: {
            fontSize: 22,
            color: 'black'
        },
        frequencies: {
            fontSize: 16,
        },
        amount: {
            fontSize: 22,
            fontWeight: 'bold',
        },
        amountWrapper: {
            justifyContent: 'center',
            alignItems: 'center'
        }
    })

    return (
        <View style={styles.wrapper}>
            <View>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.frequencies}>{frequencies}</Text>
            </View>
            <View style={styles.amountWrapper}>

                <Text style={styles.amount}>{amount / 100}€</Text>
            </View>
        </View>
    )
}
