import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import styles from './AppEstilo';
import Titulo from './components/Titulo';
import Card from './components/Card';
import Sinopse from './components/Sinopse';
import Participantes from './components/Participantes';


export default function App() {
  return (
    <View style={styles.container}>
      <Titulo/>     
      <Card/>
      <Sinopse/>
      <Participantes/>
      <StatusBar style="auto" />
    </View>
  );
}
