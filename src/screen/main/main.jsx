import { Image, Text } from 'react-native';
import icon from '../../constants/icon.js';
import {styles} from './main.style.js'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import AbaHome from '../abahome/abahome.jsx';
import AbaCalendar from '../abacalendar/abacalendar.jsx';
import AbaProfile from '../abaprofile/abaprofile.jsx';


const Tab = createBottomTabNavigator();


function Main(){
    return <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='home' component={AbaHome} options={{
                headerTitleAlign: "center",
                headerTitle: () => {
                    return <Image source={icon.logo} 
                    style={{width: 125, height: 29}}
                    
                    />
                },
                tabBarShowLabel: false,
                tabBarIcon: ({focused}) =>{
                    return <Image  source={icon.home} 
                    style={{width: 25,
                            height: 25,
                            opacity: focused ? 1 : 0.3}}
                    />
                }
            }}/>
            <Tab.Screen name='calendar' component={AbaCalendar} options={{
                headerTitleAlign: "center",
                headerTitle: () => {
                    return <Text style={styles.text}>Minhas Reservas</Text>
                },

                tabBarShowLabel: false,
                tabBarIcon: ({focused}) => {
                    return <Image source={icon.calendar}
                    style={{width: 25,
                        height: 25,
                        opacity: focused ? 1 : 0.3}}/>
                }
            }}/>
            <Tab.Screen name='profile' component={AbaProfile} options={{
                 headerTitleAlign: "center",
                 headerTitle: () => {
                     return <Text style={styles.text}>Minha Conta</Text>
                 },
 
                 tabBarShowLabel: false,
                 tabBarIcon: ({focused}) => {
                     return <Image source={icon.profile}
                     style={{width: 25,
                         height: 25,
                         opacity: focused ? 1 : 0.3}}/>
                 }
            }}/>
        </Tab.Navigator>
    </NavigationContainer>
}

export default Main;