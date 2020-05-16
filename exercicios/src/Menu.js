import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar';
import {Inverter, MegaSena} from './componentes/Multi';
import Contador from './componentes/Contador';
import ValidarProps from './componentes/ValidarProps';
import Evento from './componentes/Evento';
import Avo from './componentes/ComunicacaoDireta';
import { TextoSincronizado } from './componentes/ComunicacaoIndireta';
import ListaFlex from './componentes/ListaFlex';
import Flex from './componentes/Flex';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const ParImparM = ({navigation}) => <ParImpar numero={30} />;

const MegaSenaM = ({navigation}) => <MegaSena numeros={6} />;

const SimplesM = ({navigation}) => <Simples texto="Olá Mundo" />;

const InverterM = ({navigation}) => <Inverter texto="React Native" />;

const ContadorM = ({navigation}) => <Contador numero={0} />;

const ValidarPropsM = ({navigation}) => <ValidarProps ano={20} />;

const EventoM = ({navigation}) => <Evento />;

const AvoM = ({navigation}) => <Avo nome='João' sobrenome='Rhianne' />;

const TextoSincronizadoM = ({navigation}) => <TextoSincronizado />;

const ListaFlexM = ({navigation}) => <ListaFlex />;

const FlexM = ({navigation}) => <Flex />;

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Simples" component={SimplesM} />
        <Drawer.Screen name="Inverter" component={InverterM} />
        <Drawer.Screen name="Par ou Impar" component={ParImparM} />
        <Drawer.Screen name="MegaSena" component={MegaSenaM} />
        <Drawer.Screen name="Contador" component={ContadorM} />
        <Drawer.Screen name="Validar Props" component={ValidarPropsM} />
        <Drawer.Screen name="Evento" component={EventoM} />
        <Drawer.Screen name="Comunicação Direta" component={AvoM} />
        <Drawer.Screen name="Comunicação Indireta" component={TextoSincronizadoM} />
        <Drawer.Screen name="Lista Flex" component={ListaFlexM} />
        <Drawer.Screen name="Flex Box" component={FlexM} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
