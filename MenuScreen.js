import React, { useState, useContext, route, } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { ComedorContext } from './ComedorScreen';
import { useRoute } from '@react-navigation/native';

export default function MenuScreenComedor({ navigation }) {

    const { comedorActual } = useContext(ComedorContext);

    const route = useRoute();

    const day = route.params?.day || 'LUN';

    React.useEffect(() => {
        Menu(day);
    }, [day, comedorActual]);

    const comedorStyles = {
        ITCR: {
            backColor: '#8492D4',
            itemColor: '#3C4B55',
            subItemColor: '#417FC2',
            backgroundColor: '#A4BFE3',
        },
        LaDeportiva: {
            backColor: '#F6F2DD',
            itemColor: '#494B45',
            subItemColor: '#B09464',
            backgroundColor: '#8E795C',
        },
        SodaDelLago: {
            backColor: '#D8EBDD',
            itemColor: '#3A4F47',
            subItemColor: '#94AF67',
            backgroundColor: '#778955',
        }
    };

    const currentStyles = comedorStyles[comedorActual];

    const menus = {
        ITCR: {
            LUN: ['Tostadas Francesas', 'Bolonesa', 'Tiramisu', 'Ribeye'],
            MAR: ['Huevos Benedictos', 'Cordon Blue', 'Enchilada', 'Morcilla'],
            MIE: ['Americano', 'Pavo Lamour', 'Fresas Confitadas', 'Solomillo'],
            JUE: ['Omelette', 'Dorado Asado', 'Prensadas', 'Hamburguesas'],
            VIE: ['Cereal', 'Sopa Marisco', 'Tres Leches', 'Pargo Entero'],
            SAB: ['Pancakes', 'Camarones Jumbo', 'Bombones', 'Pizza'],
        },
        LaDeportiva: {
            LUN: ['Panqueques de Arándano', 'Pasta Carbonara', 'Mousse de Chocolate', 'Pescado a la Parrilla'],
            MAR: ['Tostada de Aguacate', 'Pollo Teriyaki', 'Quesadillas de Champiñones', 'Brochetas de Res'],
            MIE: ['Sándwich Club', 'Ternera al Vino', 'Tartar de Atún', 'Costillas BBQ'],
            JUE: ['Huevos Rancheros', 'Pulpo a la Gallega', 'Empanadas de Queso', 'Steak con Papas'],
            VIE: ['Granola con Yogurt', 'Caldo de Mariscos', 'Brownie de Nuez', 'Paella Valenciana'],
            SAB: ['Waffles con Frutas', 'Ceviche Mixto', 'Bruschettas de Tomate', 'Lomo Saltado'],
        },
        SodaDelLago: {
            LUN: ['Tortilla Española', 'Ravioli de Espinacas', 'Flan de Vainilla', 'Salmón al Horno'],
            MAR: ['Crepes de Fresa', 'Risotto de Setas', 'Gazpacho Andaluz', 'Tacos al Pastor'],
            MIE: ['Burritos de Frijol', 'Estofado de Cordero', 'Pudding de Chía', 'Chuleta de Cerdo a la Mostaza'],
            JUE: ['Chilaquiles Verdes', 'Tagine de Pollo', 'Nachos con Guacamole', 'Bistec a la Pimienta'],
            VIE: ['Asaí Bowl', 'Curry de Garbanzos', 'Eclairs de Chocolate', 'Filete Mignon con Salsa Bernesa'],
            SAB: ['Gallo Pinto Premium', 'Spaghetti a la Bolognesa', 'Tartar de Mango', 'Barbacoa de Res'],
        },
    };

    const initialDesglose = [
        { name: 'Desayuno', hora: '8:00 - 10:00', key: '1' },
        { name: 'Almuerzo', hora: '11:00 - 2:00', key: '2' },
        { name: 'Cafe', hora: '3:00 - 5:00', key: '3' },
        { name: 'Cena', hora: '6:00 - 9:00', key: '4' },
    ];

    const [desglose, setDesglose] = useState([...initialDesglose]);

    const Menu = (day) => {
        const currentMenu = menus[comedorActual][day];
        setDesglose([...initialDesglose]);

        const updatedDesglose = initialDesglose.map((item, index) => ({
            ...item,
            meal: currentMenu[index]
        }));

        setDesglose(updatedDesglose);
    };

    return (
        <View style={[styles.container, { backgroundColor: currentStyles.backColor }]}>
            <View style={styles.boton}>
                <TouchableOpacity onPress={() => Menu('LUN')}>
                    <Text style={styles.textboton}>LUN</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Menu('MAR')}>
                    <Text style={styles.textboton}>MAR</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Menu('MIE')}>
                    <Text style={styles.textboton}>MIE</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Menu('JUE')}>
                    <Text style={styles.textboton}>JUE</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Menu('VIE')}>
                    <Text style={styles.textboton}>VIE</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Menu('SAB')}>
                    <Text style={styles.textboton}>SAB</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                keyExtractor={(item) => item.key.toString()}
                data={desglose}
                renderItem={({ item }) => (
                    <View style={[styles.Componente, { backgroundColor: currentStyles.backgroundColor }]}>
                        <Text style={[styles.item, { color: currentStyles.itemColor }]}>{item.name}</Text>
                        <Text style={[styles.subItem, { color: currentStyles.subItemColor }]}>{item.meal}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F8F8',
    },
    boton: {
        marginTop: 20,
        justifyContent: 'space-around',
        flexDirection: 'row',
        backgroundColor: '#37392E',
        padding: 20,
        borderRadius: 15,
        marginHorizontal: 10,
    },
    textboton: {
        color: 'white',
        fontWeight: 'bold',
    },
    item: {
        borderRadius: 30,
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 10,

    },
    subItem: {
        borderRadius: 30,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        margin: 25,

    },
    Componente: {
        backgroundColor: '#545863',
        borderRadius: 30,
        marginHorizontal: 25,
        marginVertical: 10,
        padding: 4,
    },
});