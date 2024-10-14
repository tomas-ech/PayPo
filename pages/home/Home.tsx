import React, { useState } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../../constants/colors';
import { BillItem } from '../../components/BillItem';

export const Home = () => {
    const testData = [
        {
            name: 'Cuentas con Paposhis',
            icon: '',
            state: 'pending'
        },
        {
            name: 'Cumple Valen V',
            icon: '',
            state: 'pending'
        },
        {
            name: 'Cumple Vanesa',
            icon: '',
            state: 'solved'
        },
    ]

    const [billData, setBillData] = useState(testData)

    return (
        <View style={styles.billsWrapper}>
            <Text style={styles.sectionTitle}>PayPoshis</Text>
            <View style={styles.billsList}>
                {
                    billData.map((bill, index) => (
                        <BillItem key={bill.name + index} label={bill.name} state={bill.state} />
                    ))
                }
            </View>
            <View style={styles.homeFooter}>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => {
                    const newData = [...billData, {
                        name: 'Nueva cuenta',
                        icon: '',
                        state: 'pending'
                    }]

                    setBillData(newData)
                }}
            >
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    billsWrapper: {
        flex: 1,
        paddingTop: 30,
        paddingHorizontal: 20,
        // borderWidth: 2,
        // borderColor: 'blue',
    },
    sectionTitle: {
        color: colors.text,
        fontSize: 30,
        fontWeight: 'bold',
        height: 60,
        // borderWidth: 2,
        // borderColor: 'green',
    },
    billsList: {
        flex: 1,
        flexDirection: 'column',
        // borderWidth: 2,
        // borderColor: 'red',
        // borderStyle: 'solid',
    },
    homeFooter: {
        height: 100,
        borderWidth: 2,
        borderColor: 'orange',
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        backgroundColor: colors.accent,
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: colors.primary,
        fontSize: 20,
        textAlign: 'center',
        width: '100%',
    }
});
