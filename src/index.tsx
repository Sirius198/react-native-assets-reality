import { useSelector } from "react-redux";
import MainScreen from "./screens";
import AuthMain from "./screens/auth";

const AppContainer: React.FC<{}> = () => {
    const { is2FAuthenticated } = useSelector((state: any) => state.auth);

    return is2FAuthenticated ? <MainScreen /> : <AuthMain />
};

export default AppContainer;