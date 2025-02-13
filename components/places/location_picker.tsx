import { View, Text, Button, StyleSheet, Alert, Image } from "react-native";
import { Colors } from "../../utils/color";
import { getCurrentPositionAsync , requestForegroundPermissionsAsync } from "expo-location";
import getMapPreview from "../../utils/location";
import { useState } from "react";
function LocationPicker() {

    const [pickedLocation, setPickedLocation] = useState<{lat : number, lng : number} | null>(null);

    async function getLocationHandler (){
        const hasPermission = await requestForegroundPermissionsAsync();
        if(!hasPermission){
            Alert.alert("Permission not granted", "Please grant permission to use your location");
            return;
        }
        const location = await getCurrentPositionAsync();
        setPickedLocation({
            lat : location.coords.latitude,
            lng : location.coords.longitude,
        });
        console.log(location);
    }


   async function pickOnMapHandler (){
        const hasPermission = await requestForegroundPermissionsAsync();
        if(!hasPermission){
            Alert.alert("Permission not granted", "Please grant permission to use your location");
            return;
        }
    }

    // if(pickedLocation != null){
    //     return (
          
    //     )
    // }

    return (
        <View>
            <View style={styles.mapPreview}></View>
            {pickedLocation && (
                <Image style={styles.getMapPreview} source={{uri: getMapPreview(pickedLocation.lat, pickedLocation.lng)}}/>
            )}
            <View style={styles.actions}>
                <Button title="Get User Location" onPress={getLocationHandler}/>
                <Button title="Open Map" onPress={pickOnMapHandler}/>

            </View>
        </View>
    )
}   

export default LocationPicker;

const styles = StyleSheet.create({
    mapPreview : {
        width : "100%",
        height : 200,
        marginVertical : 8,
        backgroundColor : Colors.primary100,
    },

    actions : {
        flexDirection : "row",
        justifyContent : "space-around",
        alignItems : "center",
    },
    getMapPreview:{
        height:"100%",
        width:"100%"
    }

})