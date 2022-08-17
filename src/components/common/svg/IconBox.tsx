import { useState } from "react";
import { View } from "react-native";

import WithdrawalSvg from "../../../assets/icons/case/withdrawal.svg";
import ReceiveSvg from "../../../assets/icons/case/receive.svg";
import FromSvg from "../../../assets/icons/case/from.svg";
import AmountSvg from "../../../assets/icons/case/amount.svg";
import GasFeeSvg from "../../../assets/icons/case/gasfee.svg";
import NavCaseSvg from "../../../assets/icons/nav/case.svg";
import NavClientSvg from "../../../assets/icons/nav/client.svg";
import NavActivitySvg from "../../../assets/icons/nav/activity.svg";
import NavSettingSvg from "../../../assets/icons/nav/setting.svg";
import NavProfileSvg from "../../../assets/icons/nav/profile.svg";
import NavCase2Svg from "../../../assets/icons/nav/case2.svg";
import NavClient2Svg from "../../../assets/icons/nav/client2.svg";
import NavActivity2Svg from "../../../assets/icons/nav/activity2.svg";
import NavSetting2Svg from "../../../assets/icons/nav/setting2.svg";
import NavProfile2Svg from "../../../assets/icons/nav/profile2.svg";

// Crypto Icons

import BitcoinSvg from "../../../assets/icons/crypto/btc_icon.svg";
import EthereumSvg from "../../../assets/icons/crypto/eth_icon.svg";
import SolanaSvg from "../../../assets/icons/crypto/solana_icon.svg";
import RippleSvg from "../../../assets/icons/crypto/xrp_icon.svg";
import LitecoinSvg from "../../../assets/icons/crypto/ltc_icon.svg";
import TetherSvg from "../../../assets/icons/crypto/tether_icon.svg";
import BinanceSvg from "../../../assets/icons/case/binance.svg";

// Profile Icons
import ProfileDarkModeSvg from "../../../assets/icons/profile/darkmode.svg";
import ProfilePrivacyPolicySvg from "../../../assets/icons/profile/privacy.svg";
import ProfileTermsOfUseSvg from "../../../assets/icons/profile/terms.svg";
import ProfileLicenseSvg from "../../../assets/icons/profile/license.svg";
import ProfileLogoutSvg from "../../../assets/icons/profile/logout.svg";

// Common
import QrCodeSvg from "../../../assets/icons/qrcode.svg";


const IconBox = ({ name, color = null, width = 20, height = 20, radius = 10, ...rest }) => {

    let icon = <View />;
    if (name == 'withdrawal') icon = <WithdrawalSvg width={width} height={height} {...rest} />
    else if (name == 'receive') icon = <ReceiveSvg width={width} height={height} {...rest} />
    else if (name == 'from') icon = <FromSvg width={width} height={height} {...rest} />
    else if (name == 'amount') icon = <AmountSvg width={width} height={height} {...rest} />
    else if (name == 'gasfee') icon = <GasFeeSvg width={width} height={height} {...rest} />
    else if (name == 'binance') icon = <BinanceSvg width={width} height={height} {...rest} />
    else if (name == 'bitcoin') icon = <BitcoinSvg width={width} height={height} {...rest} />
    else if (name == 'ethereum') icon = <EthereumSvg width={width} height={height} {...rest} />
    else if (name == 'solana') icon = <SolanaSvg width={width} height={height} {...rest} />
    else if (name == 'ripple') icon = <RippleSvg width={width} height={height} {...rest} />
    else if (name == 'litecoin') icon = <LitecoinSvg width={width} height={height} {...rest} />
    else if (name == 'tether') icon = <TetherSvg width={width} height={height} {...rest} />
    else if (name == 'nav-case') icon = <NavCaseSvg width={width} height={height} {...rest} />
    else if (name == 'nav-case2') icon = <NavCase2Svg width={width} height={height} {...rest} />
    else if (name == 'nav-client') icon = <NavClientSvg width={width} height={height} {...rest} />
    else if (name == 'nav-client2') icon = <NavClient2Svg width={width} height={height} {...rest} />
    else if (name == 'nav-activity') icon = <NavActivitySvg width={width} height={height} {...rest} />
    else if (name == 'nav-activity2') icon = <NavActivity2Svg width={width} height={height} {...rest} />
    else if (name == 'nav-setting') icon = <NavSettingSvg width={width} height={height} {...rest} />
    else if (name == 'nav-setting2') icon = <NavSetting2Svg width={width} height={height} {...rest} />
    else if (name == 'nav-profile') icon = <NavProfileSvg width={width} height={height} {...rest} />
    else if (name == 'nav-profile2') icon = <NavProfile2Svg width={width} height={height} {...rest} />
    else if (name == 'light') icon = <ProfileDarkModeSvg width={width} height={height} {...rest} />
    else if (name == 'privacy-policy') icon = <ProfilePrivacyPolicySvg width={width} height={height} {...rest} />
    else if (name == 'terms-of-use') icon = <ProfileTermsOfUseSvg width={width} height={height} {...rest} />
    else if (name == 'license') icon = <ProfileLicenseSvg width={width} height={height} {...rest} />
    else if (name == 'logout') icon = <ProfileLogoutSvg width={width} height={height} {...rest} />
    else if (name == 'qrcode') icon = <QrCodeSvg width={width} height={height} {...rest} />

    if (color == null)
        return icon;

    let backgroundColor = color;
    switch (color) {
        case 'blue':
            backgroundColor = 'rgba(62, 126, 255, 0.1)';
            break;
        case 'pink':
            backgroundColor = ('rgba(142, 62, 255, 0.06)');
            break;
        case 'red':
            backgroundColor = ('rgba(242, 147, 57, 0.1)');
            break;
        case 'green':
            backgroundColor = ('rgba(95, 220, 179, 0.13)');
            break;
        case 'yellow':
            backgroundColor = ('rgba(240, 185, 11, 0.1)');
            break;
        case 'normal':
            backgroundColor = 'rgb(247, 247, 254)';
            break;
    }

    return (
        <View style={{
            backgroundColor,
            borderRadius: radius,
            padding: 10
        }}>
            {icon}
        </View>
    )
};

export default IconBox;