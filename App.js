import { Text, SafeAreaView, StyleSheet } from 'react-native';
import colors from './colours';


// You can import supported modules from npm
import { Card } from 'react-native-paper';
import CharacterList from './components/characterList'

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        My first React native work ever !
      </Text>
      <CharacterList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    marginTop:50,
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
