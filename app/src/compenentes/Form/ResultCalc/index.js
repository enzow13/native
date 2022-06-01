import React from 'react';
import { View, Text } from 'react-native';

export default function ResultCalc(props) {
    return (
        <View>
            <Text>{props.resultCalc}</Text>
            <Text>{props.messageResultCalc}</Text>
        </View>
    )
}