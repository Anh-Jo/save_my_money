import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Modal, View, Text, Button, SafeAreaView } from 'react-native';


export default Manage = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { navigate } = useNavigation();
    const navigateToModal = () => navigate('CreateSubscriptions')
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Manage Screen ! </Text>
                <Button onPress={navigateToModal} title={"Hit me"} />
            </View>
        </SafeAreaView>
    )
}