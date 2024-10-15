import { StyleSheet, View } from 'react-native';
import { colors } from './constants/colors';
import { Home } from './pages/home/Home';
import { BillsProvider } from './components/context/BillsProvider';

export default function App() {

  return (
    <BillsProvider>
      <View style={styles.container}>
        <Home />
      </View>
    </BillsProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    height: '100%',
  },
});
