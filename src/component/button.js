import React, { useRef } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native';

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
    const AnimatedTouchable = Animated.createAnimatedComponent(View);
    return <TouchableWithoutFeedback
        onPress={onPress}
        onTouchStart={handlePressStyleIn}
        onTouchEnd={handlePressStyleOut}
    >
        <AnimatedTouchable
            style={styles.wrapper}
        >
            <Text style={styles.text}>{title}</Text>
        </AnimatedTouchable>
    </TouchableWithoutFeedback>
}