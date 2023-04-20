
import React from 'react';
import { View, Text, Button } from "react-native";

const Sobre = ({ navigation }) => {
    return (
        <View>
            <Text >Sobre mim</Text>
            <Text>
                Meu nome é Renata, obrigada por chegar até aqui!
            </Text>

            <Button 
                title="Voltar"
                onPress={ () => navigation.goBack() }
            />
        </View>
    );
}

export default Sobre;
