import { useState } from "react";
import {
	Image,
	Linking,
	Pressable,
	StyleSheet,
	Text,
	View,
} from "react-native";

import Hyperlink from "react-native-hyperlink";

import { GLOBAL_STYLES } from "../../constants/styles";

import WishlistDelete from "./WishlistDelete";

function WishlistCard({
	title,
	description,
	price,
	imagePath,
	editStatus,
	itemId,
	onDelete,
}) {
	const [isDeleteVisible, setIsDeleteVisible] = useState(false);

	function considerDelete() {
		console.log("modal open");
		setIsDeleteVisible(true);
	}

	// this one
	function deleteItem() {
		onDelete(itemId);
		setIsDeleteVisible(false);
	}

	function cancelDelete() {
		console.log("item not deleted");
		setIsDeleteVisible(false);
	}

	return (
		<View style={{ paddingLeft: "5%", paddingRight: "5%" }}>
			{/* Wishlist Card */}
			<View style={styles.card}>
				<View style={{ width: "65%", flexWrap: "wrap" }}>
					<Text style={styles.titleText}>{title}</Text>

					<Hyperlink linkDefault={true} linkStyle={styles.linkStyle}>
						<Text style={styles.descriptionText}>{description}</Text>
					</Hyperlink>

					<Text style={styles.priceText}>${price}</Text>
				</View>

				<View style={{ marginLeft: 15 }}>
					<Image
						source={{ uri: imagePath }}
						style={[{ width: 100, height: 100 }]}
					/>
				</View>
			</View>

			{/* Delete Button (Conditional rendering)*/}
			<View style={{ position: "absolute", top: -15, left: 10 }}>
				{!editStatus ? (
					<View />
				) : (
					<Pressable onPress={considerDelete} style={styles.button}>
						<Text style={styles.buttonText}>—</Text>
					</Pressable>
				)}
			</View>

			{/* Delete Item Popup */}
			<View>
				<WishlistDelete
					isVisible={isDeleteVisible}
					onYes={deleteItem}
					onNo={cancelDelete}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		padding: 10,
		backgroundColor: GLOBAL_STYLES.colors.yellow300,
		borderWidth: 3,
		borderColor: GLOBAL_STYLES.colors.orange300,
		borderRadius: 10,
		flexDirection: "row",
		alignItems: "center",
		flexWrap: "wrap",
		marginBottom: 20,
	},
	titleText: {
		fontFamily: "BaiJamjuree-Bold",
		fontSize: 20,
		color: GLOBAL_STYLES.colors.orange700,
	},
	descriptionText: {
		fontFamily: "BaiJamjuree-Regular",
		fontSize: 11,
		color: GLOBAL_STYLES.colors.brown700,
	},
	linkStyle: {
		fontFamily: "BaiJamjuree-Regular",
		fontSize: 11,
		color: GLOBAL_STYLES.colors.blue300,
	},
	priceText: {
		fontFamily: "BaiJamjuree-SemiBold",
		fontSize: 17,
		color: GLOBAL_STYLES.colors.blue300,
	},
	imageStyle: {
		width: 100,
		height: 100,
		marginLeft: 15,
		borderRadius: 10,
	},
	button: {
		paddingTop: 3,
		paddingBottom: 3,
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: GLOBAL_STYLES.colors.blue300,
		borderRadius: 100,
		alignItems: "center",
		justifyContent: "center",
	},
	buttonText: {
		fontFamily: "BaiJamjuree-Bold",
		color: GLOBAL_STYLES.colors.brown300,
	},
});

export default WishlistCard;
