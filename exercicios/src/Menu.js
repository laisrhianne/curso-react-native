
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar';
import {Inverter, MegaSena} from './componentes/Multi';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function ParImparM({navigation}) {
  return (
    <ParImpar numero={30} />
  );
}

function MegaSenaM({navigation}) {
  return (
    <MegaSena numeros={6} />
  );
}

function SimplesM({navigation}) {
  return (
    <Simples texto='Olá Mundo' />
  );
}

function InverterM({navigation}) {
  return (
    <Inverter texto='React Native' />
  );
}

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
      </Drawer.Navigator>
    </NavigationContainer>
  );
}