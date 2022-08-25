import { View, ActivityIndicator } from "react-native";

const LoadingScreen = () => {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {/* <Typography>Loading assets...</Typography> */}
            <ActivityIndicator size={"large"} />
        </View>
    )
};

export default LoadingScreen;