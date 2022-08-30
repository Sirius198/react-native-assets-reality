import { Image } from "react-native";

type ICryptoIcon = {
    size?: number;
    name: string;
}

const CryptoIcon = ({ size = 30, name }: ICryptoIcon) => {
    return <Image
        source={{ uri: `https://xk8s6gfm71.execute-api.eu-west-2.amazonaws.com/Prod/?style=color&size=${size}&currency=${name}` }}
        style={{ width: size, height: size }}
    />
};

export default CryptoIcon;