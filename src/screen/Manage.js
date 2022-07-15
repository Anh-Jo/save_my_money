import { useNavigation } from '@react-navigation/native';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { Modal, View, Text, Button, SafeAreaView, ActivityIndicator } from 'react-native';
import { CardItem, Title } from '../component';
import { onCreateWage } from '../graphql/subscriptions'

export default Manage = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    // const auth = useAut
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { navigate } = useNavigation();
    const navigateToModal = () => navigate('CreateSubscriptions');

    if (isLoading) {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator color={"blue"} />
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Title value={"Mes données"} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {items.map((item) => <CardItem {...item} />)}
                <Button onPress={navigateToModal} title={"Créer une dépense"} />
            </View>
        </SafeAreaView>
    )
}