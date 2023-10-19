import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import estilos from "./estilos";
import CampoInteiro from '../../../componentes/CampoInteiro';
import Botao from '../../../componentes/Botao';

export default function Item(item) {

    const [quantidade, setQuantidade] = useState(1)
    const [total, setTotal] = useState(item.preco)
    const [expandir, setExpandir] = useState(false)

    const atualizaQuantidadeTotal = (novaQuantidade) =>{
        setQuantidade(novaQuantidade);
        calculaTotal(novaQuantidade)
    }
    
    const calculaTotal = (novaQuantidade) =>{
        setTotal(novaQuantidade * item.preco)
    }
    
    const inverteExpandir = () => {
        setExpandir(!expandir);
        atualizaQuantidadeTotal(1);
    }

    return(
        <>
            <TouchableOpacity style={estilos.informacao} onPress={inverteExpandir}>
                <Text style={estilos.nome}>{item.nome}</Text>
                <Text style={estilos.descricao}>{item.descricao}</Text>
                <Text style={estilos.preco}>
                    {Intl.NumberFormat('pt-BR',{
                        style:'currency',
                        currency: 'BRL'
                    }).format(item.preco)}</Text>
            </TouchableOpacity>
            
            {expandir &&
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
            }
            <View style={estilos.divisor} />
        </>
    )
}