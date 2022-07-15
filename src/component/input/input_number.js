import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

export const NumberInputCustom = ({ label = "", customStyleInput, ...props }) => {
    const styles = StyleSheet.create({
        input: {
            backgroundColor: 'white',
            paddingHorizontal: 4,
            paddingVertical: 12,
            fontSize: 18,
            borderRadius: 4,
            fontSize: 16,
            ...customStyleInput
        },
    });
    return (
        <TextInput {...props} keyboardType={"number-pad"} style={styles.input} />
    )
}
