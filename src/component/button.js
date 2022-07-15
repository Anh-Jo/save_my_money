import React, { useRef } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Animated } from 'react-native';

export const Button = ({ title = "", onPress }) => {
    const touchableRef = useRef(new Animated.Value(1)).current

    const handlePressStyleIn = () => {
        Animated.timing(touchableRef, {
            toValue: 0.95,
            duration: 200,
            useNativeDriver: true
        }).start()
    }
    const handlePressStyleOut = () => {
        Animated.timing(touchableRef, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true
        }).start()
    }
    const styles = StyleSheet.create({
        wrapper: {
            paddingHorizontal: 12,
            paddingVertical: 12,
            backgroundColor: '#716969',
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            elevation: 6,
            transform: [
                { scale: touchableRef }
            ],
        },
        text: {
            fontSize: 18,
            color: '#FBFBFB'
        }
    });

    return <Animated.View
        onPress={onPress}
        style={styles.wrapper}
        onTouchStart={handlePressStyleIn}
        onTouchEnd={handlePressStyleOut}
    >
        <Text style={styles.text}>{title}</Text>
    </Animated.View>
}