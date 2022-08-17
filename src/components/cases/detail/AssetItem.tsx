import { useTheme } from "@react-navigation/native";
import { View } from "react-native"
// import { SvgUri } from "react-native-svg";
import styled from "styled-components/native";
import Divider from "../../common/divider";
import IconBox from "../../common/svg/IconBox";
import Typography from "../../common/typography/Typography";

const AssetItem = () => {
    const { colors } = useTheme();
    return (
        <Wrapper style={{ backgroundColor: colors.card}}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {/* <SvgUri
                    width="100"
                    height="100"
                    uri="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/debian.svg"
                /> */}
                {/* <SVGImg width={30} height={30} /> */}
                <IconBox name="bitcoin" width={30} height={30} />
                <View style={{ marginLeft: 10 }}>
                    <Typography weight="Bold">BTC</Typography>
                    <Typography variant="secondary" size={12}>Bitcoin</Typography>
                </View>
            </View>

            <Divider />

            <Div>
                <View>
                    <Typography variant="percent" size={16} weight="Bold">+1.53%</Typography>
                    <Typography variant="secondary" size={12}>24% Change</Typography>
                </View>
                <View>
                    <Typography variant="primary" size={16} weight="Bold" right>£52019.75</Typography>
                    <Typography variant="secondary" size={12} right>USD Value</Typography>
                </View>
            </Div>

            <Divider />

            <Div>
                <View>
                    <Typography variant="primary" size={16} weight="Bold">1.42 BTC</Typography>
                    <Typography variant="secondary" size={12}>Balance</Typography>
                </View>

                <IconBox name="qrcode" color='#FAFAFF' />
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