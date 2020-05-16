import React from 'react';
import {ScrollView, View, FlatList, Text} from 'react-native';

const alunos = [
  {id: 1, nome: 'João', nota: 7.9},
  {id: 2, nome: 'Ana', nota: 8.5},
  {id: 3, nome: 'Bia', nota: 9.2},
  {id: 4, nome: 'Maria', nota: 7.6},
  {id: 5, nome: 'Pedro', nota: 5.4},
  {id: 6, nome: 'Rebeca', nota: 8.8},
  {id: 7, nome: 'Josué', nota: 7.8},
  {id: 8, nome: 'Bruna', nota: 6.5},
  {id: 9, nome: 'Jhon', nota: 4.3},
  {id: 10, nome: 'Marcelo', nota: 7.9},
  {id: 11, nome: 'Manuella', nota: 8.5},
  {id: 12, nome: 'Laís', nota: 9.2},
  {id: 13, nome: 'José', nota: 7.6},
  {id: 14, nome: 'Matheus', nota: 5.4},
  {id: 15, nome: 'Marcela', nota: 8.8},
  {id: 16, nome: 'Tobias', nota: 7.8},
  {id: 17, nome: 'Tom', nota: 2.4},
  {id: 18, nome: 'Amanda', nota: 5.3},
  {id: 19, nome: 'Gisele', nota: 3},
  {id: 20, nome: 'Victor', nota: 10},
];

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',
    
    // Flex
    // justifyContent: 'space-around'
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // justifyContent: 'space-around',
    // alignItems: 'flex-start',
}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{ fontWeight: 'bold' }}>Nota: {props.nota}</Text>
    </View>

export default props => {
    const renderItem = ({ item }) => {
        return <Aluno {...item} />
    }

    return (
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()} />
        </ScrollView>
    )
}
