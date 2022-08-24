import { useTheme } from "@react-navigation/native";
import { View, TouchableOpacity, Image } from "react-native";
import { SvgUri } from "react-native-svg";
// import { SvgUri } from "react-native-svg";
import styled from "styled-components/native";
import { assets } from "../../../../react-native.config";
import IconWrapper from "../../common/base/IconWrapper";
import Divider from "../../common/divider";
import MySVG from "../../common/svg";
import IconBox from "../../common/svg/IconBox";
import Typography from "../../common/typography/Typography";

const AssetItem = ({ onQuickAction, asset }) => {

    const { dark, colors } = useTheme();

    return (
        <Wrapper style={{ backgroundColor: colors.card }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                    source={{ uri: "https://xk8s6gfm71.execute-api.eu-west-2.amazonaws.com/Prod/?style=color&size=30&currency=" + asset.asset_type.toLowerCase() }}
                    style={{ width: 30, height: 30 }}
                />
                {/* https://xk8s6gfm71.execute-api.eu-west-2.amazonaws.com/Prod/?style=color&currency=eth&size=30 */}
                {/* <MySVG.Bitcoin width={30} height={30} /> */}
                <View style={{ marginLeft: 10 }}>
                    <Typography weight="Bold">{asset.asset_type}</Typography>
                    <Typography variant="secondary" size={12}>{asset.asset_type}</Typography>
                </View>
            </View>

            <Divider />

            <Div>
                <View>
                    <Typography variant="percent" size={16} weight="Bold">{asset.daily_change}%</Typography>
                    <Typography variant="secondary" size={12}>24% Change</Typography>
                </View>
                <View>
                    <Typography variant="primary" size={16} weight="Bold" align="right">{asset.usd_value}</Typography>
                    <Typography variant="secondary" size={12} align="right">USD Value</Typography>
                </View>
            </Div>

            <Divider />

            <Div>
                <View>
                    <Typography variant="primary" size={16} weight="Bold">{asset.value} {asset.asset_type}</Typography>
                    <Typography variant="secondary" size={12}>Balance</Typography>
                </View>

                <TouchableOpacity onPress={onQuickAction}>
                    <IconWrapper size={42}>
                        <MySVG.QRCode />
                    </IconWrapper>
                </TouchableOpacity>
            </Div>
        </Wrapper>
    )
}

const Wrapper = styled.View`
    border-radius: 10px;
    background-color: #fff;
    padding: 20px;
    margin-bottom: 20px;
`;

const Div = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export default AssetItem;