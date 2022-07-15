import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Title = ({ value, headerRightAction, headerLeftAction }) => {
    const styles = StyleSheet.create({
        wrapper: {
            marginBottom: 12,
            paddingHorizontal: 6,
            paddingVertical: 12,
            flexDirection: 'row'
        },
        text: {
            fontSize: 28,
            textAlign: 'center'
        },
        subWrapper: {
            flex: 5,
            marginHorizontal: 2,
        },
        iconWrapper: {
            width: 30,
            backgroundColor: 'red',
            marginHorizontal: 2
        }
    });
    
    return <View style={styles.wrapper}>
        <View style={styles.iconWrapper}>
            {Boolean(headerLeftAction) && (<Text>Action de droite</Text>)}
        </View>
        <View style={styles.subWrapper}>
            <Text style={styles.text}>{value}</Text>
        </View>
        <View style={styles.iconWrapper}>
            {Boolean(headerRightAction) && (<Text>{headerRightAction}</Text>)}
        </View>
    </View>
}