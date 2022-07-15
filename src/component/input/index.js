import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NumberInputCustom } from './input_number';
import { TextInputCustom } from './input_text';
import { InputToggle } from './input_toggle';

export const Input = ({ label, type, wrapperStyle, ...props }) => {
    const Inp = selectInput(type)
    if (!Inp) return null;

    const styles = StyleSheet.create({
        wrapper: {
            flexDirection: 'column',
            ...wrapperStyle
        },
        label: {
            fontSize: 16,
            fontWeight: "bold",
            marginBottom: 6,
            color: "#0F0F0F"
        }
    })

    return <View style={styles.wrapper}>
        <Text style={styles.label} >{label}</Text>
        <Inp {...props} />
    </View>
}

const selectInput = (inputType) => {
    switch (inputType) {
        case "text": {
            return TextInputCustom
        }
        case "number": {
            return NumberInputCustom
        }
        case "toggle": {
            return InputToggle
        }
        default: false
    }
}
