import { Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import MainScreen from "./screens";
import AuthMain from "./screens/auth";

const AppContainer: React.FC<{}> = () => {
    const { is2FAuthenticated } = useSelector((state: any) => state.auth);
    const auth = useSelector((state: any) => state.auth);
    // const dispatch = useDispatch();
    // dispatch({ type: "clear_all" });

    return auth.isAuthenticated ? <MainScreen /> : <AuthMain />
};

export default AppContainer;