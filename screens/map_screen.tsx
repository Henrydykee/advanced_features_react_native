import { View , Text, StyleSheet} from "react-native";
import MapView , {Marker} from "react-native-maps";

function MapScreen(){

    const region ={
        latitude:37.7749,
        longitude:-122.4194,
        latitudeDelta:0.0922,
        longitudeDelta:0.0421
    }

    return (
        <View style={styles.container}>
            <MapView initialRegion= {region} style={styles.map}>
                <Marker coordinate={region} title="My Marker" />
            </MapView>
        </View>
  
    )
}

export default MapScreen;


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    map:{
        width:"100%",
        height:"100%"
    }
})