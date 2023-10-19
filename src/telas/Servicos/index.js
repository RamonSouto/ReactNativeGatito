import React from 'react';
import { FlatList } from 'react-native';
import Item from './Item';
import TelaPadrao from '../../componentes/TelaPadrao';

const servicos = [
    {
        id: 1,
        nome: "Banho",
        preco: 79.9,
        descricao: "NÃO DE BANHO NO SEU GATO! Mas se precisar nós damos."
    },
    {
        id: 2,
        nome: "Vacaina V4",
        preco: 89.9,
        descricao: "Uma dose da vaciana V4, seu gato precisa de duas."
    },
    {
        id: 3,
        nome: "Vacaina Antirrábica",
        preco: 99.9,
        descricao: "Uma dose da vaciana Antirrábica, seu gato precisa de uma por ano."
    }
]

export default function Servicos() {
    return(
        <TelaPadrao>
            <FlatList
                data={servicos}
                removeClippedSubviews={false}
                renderItem={ ({item}) => <Item {...item}/> }
                keyExtractor={({id}) => String(id)}
            />
        </TelaPadrao>
    )
}