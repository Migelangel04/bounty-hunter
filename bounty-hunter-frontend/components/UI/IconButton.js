import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

function IconButton({ icon, color, onPress, iconSize, disabled }) {
	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => pressed && styles.pressed}
			disabled={disabled}
		>
			<Ionicons name={icon} size={iconSize} color={color} />
		</Pressable>
	);
}

export default IconButton;

const styles = StyleSheet.create({
	pressed: {
		opacity: 0.6,
	},
});
