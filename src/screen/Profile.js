import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Title } from '../component';


export default Profile = () => {
    const gotoSettings = () => { }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Title value={"Profile"} headerRightAction={gotoSettings} />
        </SafeAreaView>
    )
}