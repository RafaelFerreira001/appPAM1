import React from 'react';
import { View, Text} from 'react-native';
import styles from './styles';

export default function Participantes(){
    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.tit}>
                Feito por:
                </Text>
                <Text style={styles.texto}>
                Matheus Machado
                </Text>
                <Text style={styles.texto}>
                Rafael Ferreira
                </Text>
            </View>
        </View>
    );
}