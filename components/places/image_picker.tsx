import { View, Text, Button, Alert, Image, StyleSheet } from "react-native";
import { useState } from "react";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
  launchImageLibraryAsync,
} from "expo-image-picker";

function ImagePicker() {
  const [pickedImage, setPickedImage] = useState<string | undefined>();
  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  async function verifyPermissions() {
    if (cameraPermissionInformation?.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }
    if (cameraPermissionInformation?.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant permission to use this app."
      );
      return false;
    }
  }

  async function takeImageHandler() {
    // const hasPermission = await verifyPermissions();
    // if(!hasPermission){
    //     return;
    // }
    // const image = await launchCameraAsync({
    //     allowsEditing : true,
    //     aspect : [16,9],
    //     quality : 0.5
    // })
    // console.log(image);

    const image = await launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    if (!image.assets) return;
    setPickedImage(image.assets[0].uri);
  }

  return (
    <View>
      <View>
        {pickedImage ? (
          <Image
            source={{ uri: pickedImage }}
            style={styles.imagePreview}
          />
        ) : (
          <Text></Text>
        )}
      </View>
      <Button title="Take Image" onPress={takeImageHandler} />
    </View>
  );
}

export default ImagePicker;

const styles = StyleSheet.create({
    imagePreview : {
        width : "100%",
        height : 300,
        marginVertical : 8,
        borderRadius : 6,
        objectFit : "cover"
    }
})