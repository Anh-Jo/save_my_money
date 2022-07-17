import React from 'react';
import { View, Text } from 'react-native';
import { Input } from '../../component';
import { FREQUENCIE_LIST } from '../../constant';

export default CreateWage = ({ name, amount, frequencies, updateAttribute }) => {
    return (
        <>
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
                onChange={(index) => updateAttribute({ value: FREQUENCIE_LIST[index].toUpperCase(), attr: 'frequencies' })}
            />
        </>
    )
}