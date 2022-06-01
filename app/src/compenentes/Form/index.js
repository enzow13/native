import React, { useState } from 'react';
import { TextInput, View, Text, Button } from 'react-native';
import ResultCalc from './ResultCalc';

export default function Form() {

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageCalc, setmessageCalc] = useState("Preencha o peso e altura");
    const [Calc, setCalc] = useState(null)
    const [TextButton, settextButton] = useState("Calcular")

    function CalcularResultado() {
        return setCalc((weight/(height*height)).toFixed(2))
    }

    function ValidationCalc() {
        if (weight != null && height != null) {
            CalcularResultado()
            setHeight(null)
            setWeight(null)
            setmessageCalc("Seu IMC é igual:")
            settextButton("Calcular Novamente")
            return
        }
        setCalc(null)
        setmessageCalc("Preencha o peso e altura")
        settextButton("Calcular")
    }

    return (
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput placeholder='Ex: 1.75' keyboardType='numeric'></TextInput>
                <Text>Peso</Text>
                <TextInput placeholder='Ex: 58' keyboardType='numeric'></TextInput>
                <Button title='Calcular'/>
            </View>
            <ResultCalc messageResultCalc={messageCalc} resultCalc={Calc}/>
        </View>
    )
}