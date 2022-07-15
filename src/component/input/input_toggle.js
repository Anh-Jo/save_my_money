import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { interopSymbols, isFunction } from 'xstate/lib/utils';

export const InputToggle = ({ label = "", items = [], onChange, ...props }) => {
    if (!items.length) return null;
    const [selected, setSelected] = useState(-1)
    const styles = StyleSheet.create({
        wrapper: {
            flexDirection: 'row'
        },
        input: {
            flex: 1,
            paddingHorizontal: 4,
            paddingVertical: 12,
            fontSize: 18,
            borderRadius: 4,
            fontSize: 16,
            justifyContent: 'center',
            alignItems: 'center'
        },
    });

    const handlePress = (index) => {
        if (selected !== index) {
            onChange(index)
            setSelected(index)
        }
    };

    return <View style={styles.wrapper}>
        {
            items.map((item, index) =>
                <TouchableOpacity
                    key={item}
                    activeOpacity={.5}
                    onPress={() => handlePress(index)}
                    style={{ ...styles.input, backgroundColor: selected === index ? '#BCABAE' : 'white' }}
                >
                    <Text>{item}</Text>
                </TouchableOpacity>
            )
        }
    </View>
}
