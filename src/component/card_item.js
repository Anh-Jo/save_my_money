import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';

export const CardItem = ({ name, amount, frequencies, type }) => {
    const colors = {
        'wage': '#79e096'
    }[type]
    const styles = StyleSheet.create({
        wrapper: {
            flexDirection: 'row',
            backgroundColor: colors,
            borderRadius: 6,
            paddingHorizontal: 12,
            paddingVertical: 20,
            justifyContent: 'space-between',
            marginVertical: 6,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 9
        },
        title: {
            fontSize: 18,
            color: 'black',
            fontWeight: 'bold'
        },
        frequencies: {
            fontSize: 14,
        },
        amount: {
            fontSize: 18,
            fontWeight: 'bold',
        },
        amountWrapper: {
            justifyContent: 'center',
            alignItems: 'center'
        }
    });

    const frequenceWord = {
        'MONTHLY': 'Mensuel',
        'WEEKLY': 'Hebdomadaire',
        'YEARLY': 'Annuel',
    }

    return (
        <View style={styles.wrapper}>
            <View>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.frequencies}>{frequenceWord[frequencies]}</Text>
            </View>
            <View style={styles.amountWrapper}>
                <Text style={styles.amount}>{amount / 100}€</Text>
            </View>
        </View>
    )
}
