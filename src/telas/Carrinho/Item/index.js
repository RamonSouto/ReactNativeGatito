import React, { useState } from 'react';
import { Text, View } from 'react-native';
import estilos from "./estilos";
import CampoInteiro from '../../../componentes/CampoInteiro';
import Botao from '../../../componentes/Botao';

export default function Item(item) {

    const [quantidade, setQuantidade] = useState(item.quantidade)
    const [total, setTotal] = useState(item.preco * item.quantidade)

    const atualizaQuantidadeTotal = (novaQuantidade) =>{
        setQuantidade(novaQuantidade);
        calculaTotal(novaQuantidade)
    }
    const calculaTotal = (novaQuantidade) =>{
        setTotal(novaQuantidade * item.preco)
    }

    return(
        <>
            <View style={estilos.informacao}>
                <Text style={estilos.nome}>{item.nome}</Text>
                <Text style={estilos.descricao}>{item.descricao}</Text>
                <Text style={estilos.preco}>
                    {Intl.NumberFormat('pt-BR',{
                        style:'currency',
                        currency: 'BRL'
                    }).format(item.preco)}</Text>
            </View>
            
            <View style={estilos.carrinho}>
                <View>
                    <View style={estilos.valor}>
                        <Text style={estilos.descricao}>Quantidade:</Text>
                        <CampoInteiro estilos={estilos.quantidade} valor={quantidade} acao={atualizaQuantidadeTotal}/>
                    </View>
                    <View style={estilos.valor}>
                        <Text style={estilos.descricao}>Total:</Text>
                        <Text style={estilos.preco}>
                            {Intl.NumberFormat('pt-BR',{
                                style:'currency',
                                currency: 'BRL'
                            }).format(total)}
                        </Text>
                        
                    </View>
                </View>
                <Botao valor='Remover do carrinho' acao={()=>{}} />
            </View>

            <View style={estilos.divisor} />
        </>
    )
}