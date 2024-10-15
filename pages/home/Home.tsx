import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useBills } from '../../components/context/BillsProvider';
import { IBill } from '../../interfaces/Bills/IBill';
import { BillItem } from '../../components/BillItem';
import { colors } from '../../constants/colors';

export const Home = () => {
    const { billData, setBillData } = useBills()

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
                        const newData: IBill[] = [...billData, {
                            name: 'Nueva cuenta',
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
        height: '100%',
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
        height: 70,
        // borderWidth: 2,
        // borderColor: 'orange',
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        backgroundColor: colors.accent,
        width: 60,
        height: 60,
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
