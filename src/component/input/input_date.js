import React, { useCallback, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { Button } from '../button';
import dayjs from 'dayjs'

export const DatePickerCustom = ({ label = "", customStyleInput, value, onChange, ...props }) => {
    const [open, setOpen] = useState(false);

    const handleChange = (date) => {
        toggleModal()
        onChange(date)
    }

    const toggleModal = () => setOpen(!open)

    return (
        <>

            <TouchableOpacity activeOpacity={.5} onPress={toggleModal} style={styles.wrapper}>
                <Text style={styles.text}>
                    {value ? dayjs(value).format('DD MMMM YYYY') : 'Cliquer pour ajouter'}
                </Text>
            </TouchableOpacity>

            <DatePicker
                modal
                title={"Date de début"}
                mode="date"
                open={open}
                date={value || new Date()}
                onConfirm={handleChange}
                onCancel={toggleModal}
            />
        </>

    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'white',
        borderRadius: 4,
        paddingVertical: 12
    },
    text: {
        fontSize: 14,
        textAlign: 'center'
    }
});