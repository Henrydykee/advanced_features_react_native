import { Pressable , StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({iconName , color, size, onPress}:{iconName : string, color : string, size : number, onPress : () => void}) {
  return (
    <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
      <Ionicons name={iconName as keyof typeof Ionicons.glyphMap} size={size} color={color} />
    </Pressable>
  );
}
export default IconButton;


const styles = StyleSheet.create({
  button:{
    padding: 8,
    margin: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  pressed:{
    opacity: 0.75,
  }
});
