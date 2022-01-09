import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer } from '@react-navigation/native';
import homeScreen from '../screens/homeScreen'

const screens = {
    default: {
        screen: homeScreen
    }
}

const scoutStack = createNativeStackNavigator();

export default scoutStack;