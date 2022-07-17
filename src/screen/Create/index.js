import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { View, Text, TextInput, SafeAreaView } from 'react-native';
import { Button, Input, Title } from '../../component';
import { CREATE_ITEMS_TOGGLE_OPTIONS } from '../../constant';
import { CreateItemContext } from '../../context';
import CreateSubscriptions from './Create_Subscriptions';
import CreateWage from './Create_Wage';


export default CreateMenu = () => {
    const [toggle, setToggle] = useState(0);
    const { goBack } = useNavigation()
    const { submit, ...machineContext } = useContext(CreateItemContext);
    const FormComp = {
        0: CreateSubscriptions,
        1: CreateWage,
        2: CreateSubscriptions,
    }[toggle];

    if (!FormComp) goBack();

    console.log('-> Toggle :', machineContext);

    return (
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 12, flexDirection: 'column' }}>
            <Title value={`Créer un item`} />
            <Input type="toggle" items={CREATE_ITEMS_TOGGLE_OPTIONS} onChange={setToggle} value={toggle} wrapperStyle={{ marginBottom: 12 }} />
            <FormComp {...machineContext} />
            <Button onPress={submit} title={"Sauvegarder"} wrapperStyle={{ marginTop: 12 }} />
        </SafeAreaView>
    )
}
