import { createStackNavigator } from '@react-navigation/stack'
import Form from '../components/Form'
import ClientList from '../components/ClientList'
import react from 'react';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator
            initialRouteName='Form'
        >
            <Stack.Screen name="Form" component={Form} />
            <Stack.Screen name="Clients" component={ClientList} />
        </Stack.Navigator>
    );
}

export default MyStack;