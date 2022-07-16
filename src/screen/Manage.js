import { useNavigation } from '@react-navigation/native';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import React, { useContext, useEffect, useState } from 'react';
import { Modal, View, Text, Button, SafeAreaView, ActivityIndicator, FlatList, ScrollView } from 'react-native';
import { CardItem, Title } from '../component';
import { ItemsContext } from '../context';
import { onCreateWage } from '../graphql/subscriptions'

export default Manage = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { items = [] } = useContext(ItemsContext);
    console.log('ITems : ', items)
    const [isLoading, setIsLoading] = useState(false);
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
            <Button onPress={navigateToModal} title={"Créer une dépense"} />
            <ScrollView style={{ flex: 1, alignContent: 'center', padding: 12 }}>
                {items.map((item) => <CardItem {...item} key={item.id} />)}
            </ScrollView>
        </SafeAreaView>
    )
}