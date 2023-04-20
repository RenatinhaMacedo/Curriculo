import React from 'react';
import { View, Text, Button } from 'react-native';

const Experiencias = ({ navigation }) => {
    return (
        <View>
            <Text> Testando as Experiências</Text>
            <Button 
                title="Voltar"
                onPress={ () => navigation.goBack() }
            />
        </View>
    );
}

export default Experiencias;