import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View, Text, TextInput, SafeAreaView } from 'react-native';
import { Button, Input, Title } from '../../component';
import { FREQUENCIE_LIST } from '../../constant';
import { CreateItemContext } from '../../context';

export default CreateSubscription = () => {
    const { updateAttribute, name, amount, frequencies } = useContext(CreateItemContext);
    return (
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 12, flexDirection: 'column' }}>
            <Title value={"Ajouter une dépense"} />
            <Input
                type="text"
                label="Nom de la dépense"
                value={name}
                wrapperStyle={{ marginVertical: 6 }}
                onChangeText={e => updateAttribute({ value: e, attr: 'name' })}
            />
            <Input
                type="number"
                label="Montant (en euro)"
                value={amount}
                wrapperStyle={{ marginVertical: 6 }}
                onChangeText={e => updateAttribute({ value: e, attr: 'amount' })}
            />
            <Input
                type="toggle"
                label="Pour combien de temps"
                value={frequencies}
                items={FREQUENCIE_LIST}
                wrapperStyle={{ marginVertical: 6 }}
                onChange={(index) => updateAttribute({ value: FREQUENCIE_LIST[index], attr: 'frequencies' })}
            />
            <Button onPress={() => { }} title={"Sauvegarder"} />
        </SafeAreaView>
    )
}
