import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import MenuScreenComedor from './MenuScreen';
import LocationScreen from './LocationScreen';
import ComedoresScreen from './ComedorScreen';
import { ComedorContext } from './ComedorScreen';

const Tab = createBottomTabNavigator();

export default function App() {
    const [comedorActual, setComedorActual] = React.useState(null);
    return (
        <ComedorContext.Provider value={{ comedorActual, setComedorActual }}>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;
                            switch (route.name) {
                                case 'Comedores':
                                    iconName = focused ? 'fast-food' : 'fast-food-outline';
                                    break;
                                case 'Menu':
                                    iconName = focused ? 'cafe' : 'cafe-outline';
                                    break;
                                case 'Location':
                                    iconName = focused ? 'location' : 'location-outline';
                                    break;
                            }
                            return <Ionicons name={iconName} size={size} color={color} />;
                        },
                        tabBarLabel: ({ color }) => {
                            return <Text style={{ color }}>{route.name}</Text>;
                        },
                        tabBarActiveTintColor: 'tomato',
                        tabBarInactiveTintColor: 'gray',
                        tabBarStyle: {
                            height: 50,
                        },
                    })}
                >
                    <Tab.Screen name="Comedores" component={ComedoresScreen} />
                    <Tab.Screen name="Menu" component={MenuScreenComedor} />
                    <Tab.Screen name="Location" component={LocationScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        </ComedorContext.Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F9F8F8',
    },
    button: {
        marginBottom: 20,
        padding: 0,
        width: '90%',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
    },
    buttonITCR: {
        backgroundColor: '#4A5899',
    },
    buttonDeportiva: {
        backgroundColor: '#DDD8B8',
    },
    buttonLago: {
        backgroundColor: '#B3CBB9',
    },
    imageStyle: {
        width: 325,
        height: 325,
        resizeMode: 'contain',
    },
});