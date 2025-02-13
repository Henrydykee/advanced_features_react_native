import { StatusBar } from 'expo-status-bar';

import AddPlacesScreen from './screens/add_place_screen';
import  { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllPlacesScreen from './screens/all_places_screen';
import IconButton from './components/ui/icon_button';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar style='dark' />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AllPlaces" component={AllPlacesScreen}  options={{
          headerRight : () => {
            return (
              <IconButton iconName='add' color='black' size={24} onPress={() => console.log('Add Place')} />
            )
          }
        }}/>
        <Stack.Screen name="AddPlace" component={AddPlacesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}
