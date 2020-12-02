import React from 'react';
import { SafeAreaView, ScrollView, Linking, Alert, StatusBar } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import colors from '../constants/colors';
import { FirstRowItem, RowItem, RowSeparator } from '../components/RowItem';



const openUrl = (url) =>{
    Linking.openURL(url).catch(()=>{
        Alert.alert('Desculpe, algo deu errado.', "Por Favor, tente novamente.")
    });

}

export default () => {
  return (
    <SafeAreaView style={{flex:1}}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.white}/>
        
        <ScrollView>
            <RowItem
                text="Temas"
                onPress={() => alert('todo!')}
                rightIcon={<Entypo name="chevron-right" size={20} color={colors.blue} />}
            />            

            <RowSeparator />

            <RowItem
                text="O Básico sobre React Native"
                onPress={() => openUrl('https://learn.reactnativeschool.com/p/react-native-basics-build-a-currency-converter')}
                rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
            />

            <RowSeparator />

            <RowItem
                text="Exemplos de React Native"
                onPress={() => openLink('https://reactnativebyexample.com')}
                rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
            />
            
            
        </ScrollView>
    </SafeAreaView>
  );
};