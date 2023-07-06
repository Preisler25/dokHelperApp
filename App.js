import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'; // Import the NavigationContainer

import HomeScreen from './components/Screens/HomeScreen';
import ProgramPage from './components/Screens/ProgramPage';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="ProgramPage" component={ProgramPage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
