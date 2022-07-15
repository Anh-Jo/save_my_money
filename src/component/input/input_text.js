import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

export const TextInputCustom = ({ customStyleInput, ...props }) => {
    const styles = StyleSheet.create({
        input: {
            backgroundColor: 'white',
            color: 'black',
            paddingHorizontal: 4,
            paddingVertical: 12,
            fontSize: 18,
            borderRadius: 4,
            fontSize: 16,
            ...customStyleInput
        },
    });

    return (
        <TextInput {...props} style={styles.input} />
    )
}
