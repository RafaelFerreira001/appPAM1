import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

export default function Card(){
    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <Image
                    source={{uri:'https://br.web.img3.acsta.net/pictures/22/04/15/22/05/1348210.jpg'}}
                    style={styles.img}
                />
                <Text style={styles.texto}>
                A sequência do filme Jurassic World, a sexta parcela da série Jurassic Park e o terceiro filme da série Jurassic World.
                </Text>
            </View>
        </View>
    );
}