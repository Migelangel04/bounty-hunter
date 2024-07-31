import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import IconButton from "../../components/UI/IconButton";
import { GLOBAL_STYLES } from "../../constants/styles";
import BountiesListScreen from "../NestedScreens/BountiesListScreen";
import CreateBountyScreen from "../NestedScreens/CreateBountyScreen";

const BountiesListStack = createNativeStackNavigator();

function BountiesListStackScreen() {
	// const navigation = useNavigation();

	return (
		<BountiesListStack.Navigator>
			<BountiesListStack.Screen
				name="BountiesList"
				component={BountiesListScreen}
				options={{
					headerStyle: {
						backgroundColor: GLOBAL_STYLES.colors.brown300,
					},
					title: "",
					headerShadowVisible: false,
				}}
			/>
			<BountiesListStack.Screen
				name="CreateBounty"
				component={CreateBountyScreen}
				options={{
					headerStyle: {
						backgroundColor: GLOBAL_STYLES.colors.brown300,
					},
					headerShadowVisible: false,
					headerTitleAlign: "center",
					title: "",
				}}
			/>
		</BountiesListStack.Navigator>
	);
}

export default BountiesListStackScreen;
