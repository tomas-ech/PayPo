import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../constants/colors';

interface billItemProps {
    label: string,
    state: string,
}

export const BillItem = ({ label, state }: billItemProps) => {
    return (
        <View style={styles.billContainer}>
            <Text style={styles.billText}>{label}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    billContainer: {
        backgroundColor: colors.secondary,
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderWidth: 2,     
        borderColor: colors.border,
        borderStyle: 'solid',
        borderRadius: 15,
        marginBottom: 10,
    },
    billText: {
        color: colors.text,
    },
});