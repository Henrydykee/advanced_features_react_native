import { View, Text, Image, Pressable, StyleSheet } from "react-native";

function PlaceRenderItem({ place }: { place: Place }) {
  function onPressedHandler() {}

  return (
    <Pressable onPress={onPressedHandler}>
      <View>
        <Image source={{ uri: place.imageUri }} />
        <View>
          <Text>{place.title}</Text>
          <Text>{place.address}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default PlaceRenderItem;

const styles = StyleSheet.create({});
