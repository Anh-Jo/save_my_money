import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View, Text, TextInput, SafeAreaView } from 'react-native';
import { Button, Input, Title } from '../../component';
import { FREQUENCIE_LIST } from '../../constant';
import { CreateItemContext } from '../../context';

/**
 *  id: ID!
    name: String
    Pricings: [Pricing] @hasMany(indexName: "bySubscriptions", fields: ["id"])
    startAt: AWSTimestamp
    referer: String
    endAt: AWSTimestamp
 */
export default CreateSubscription = ({ updateAttribute, name, amount, frequencies, startAt, endAt }) => {
    return (
        <>
            <Input
                type="text"
                label="Nom de la dépense"
                value={name}
                wrapperStyle={{ marginVertical: 12 }}
                onChangeText={e => updateAttribute({ value: e, attr: 'name' })}
            />
            <Input
                type="number"
                label="Montant (en euro)"
                value={amount}
                wrapperStyle={{ marginVertical: 12 }}
                onChangeText={e => updateAttribute({ value: e, attr: 'amount' })}
            />
            <Input
                type="toggle"
                label="Pour combien de temps"
                value={frequencies}
                items={FREQUENCIE_LIST}
                wrapperStyle={{ marginVertical: 12 }}
                onChange={(index) => updateAttribute({ value: FREQUENCIE_LIST[index].toUpperCase(), attr: 'frequencies' })}
            />
            <Input
                type="date"
                label="Date de début"
                value={startAt}
                items={FREQUENCIE_LIST}
                wrapperStyle={{ marginVertical: 6 }}
                onChange={(value) => updateAttribute({ value, attr: 'startAt' })}
            />
            <Input
                type="date"
                label="Date de fin (optionnel)"
                value={endAt}
                items={FREQUENCIE_LIST}
                wrapperStyle={{ marginVertical: 6 }}
                onChange={(value) => updateAttribute({ value, attr: 'endAt' })}
            />
        </>
    )
}
