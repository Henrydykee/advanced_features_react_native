import { FlatList, Text, View, StyleSheet } from "react-native";
import PlaceRenderItem from "./place_item";
import { Colors } from "../utils/color";

function PlacesList({ places }: { places: Place[] }) {
  if (places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallBackText}>No places found.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={places}
      keyExtractor={(place) => place.id.toString()}
      renderItem={({ item }) => <PlaceRenderItem place={item} />}
    />
  );
}

export default PlacesList;

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fallBackText: {
    fontSize: 16,
    color: Colors.accent500,
  },
});
