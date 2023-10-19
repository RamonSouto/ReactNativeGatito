import React from 'react';
import { KeyboardAvoidingView, SafeAreaView, StatusBar } from 'react-native';
import estilosGlobais, {cores} from '../../estilos'
import estilos from "./estilos";

export default function TelaPadrao({children}) {
    return (
        <>
            <SafeAreaView style={ estilos.ajusteTela}>
                <StatusBar backgroundColor={cores.roxo}/>
                <KeyboardAvoidingView>
                    {children}
                </KeyboardAvoidingView>
            </SafeAreaView>
            <SafeAreaView style={ estilos.ajusteTelaBaixo }>

            </SafeAreaView>
        </>
    )
}