import { StatusBar } from 'expo-status-bar';
import AddPlacesScreen from './screens/add_place_screen';
import  { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllPlacesScreen from './screens/all_places_screen';
import IconButton from './components/ui/icon_button';
import { Colors } from './utils/color';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar style='inverted' />
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle : { backgroundColor : Colors.gray700},
        headerTintColor : Colors.accent500,
        contentStyle : {
          backgroundColor : Colors.gray700
        }
      }}>
        <Stack.Screen name="AllPlaces" component={AllPlacesScreen}  options= {({navigation}) => ({
          headerRight : () => {
            return (
              <IconButton iconName='add' color={Colors.accent500} size={24} onPress={() => navigation.navigate('AddPlace')} />
            )
          },
          headerTitle : "Your Favorite Places"
        })}/>
        <Stack.Screen name="AddPlace" component={AddPlacesScreen} options={{
          headerTitle : "Add Place"
        }} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}
