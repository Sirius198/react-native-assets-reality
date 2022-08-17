import { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native"
import CaseInfoPanel from '../../components/cases/CaseInfoPanel';
import AddCaseModal from "../../components/cases/modal/AddCaseModal";
import AddPortfolioModal from "../../components/cases/modal/AddPortfolioModal";
import WalletQRModal from "../../components/cases/modal/WalletQRModal";
import WalletSelectModal from "../../components/cases/modal/WalletSelectModal";
import StatView from '../../components/cases/StatView';
import PageHeader from "../../components/common/header";
import Typography from "../../components/common/typography/Typography";

const CaseMain = ({ onInspect }) => {
    const [walletSelectionModalVisible, setWalletSelectionModalVisible] = useState(false);

    return (
        <View style={styles.container}>

            <PageHeader
                title={<Typography size={18}>Cases</Typography>}
            />

            <View>
                <Typography variant="secondary" size={12}>Total Value</Typography>
                <Typography variant="currency" size={22} weight="SemiBold">£100,420.50</Typography>
            </View>

            {/* Statistics numbers */}
            <StatView portfolio={79} assets={32} terminated={2} active={12} />

            {/* Cold Wallet */}
            <View>
                <TouchableOpacity
                    style={styles.coldWalletButton}
                    onPress={() => setWalletSelectionModalVisible(true)}
                >
                    <Text style={{ color: '#3e7eff' }}>Cold Wallet</Text>
                </TouchableOpacity>
            </View>

            {/* List of cases */}
            {[1, 2, 3, 4, 5].map((_, index) => (
                <CaseInfoPanel key={index} onInspect={onInspect} />
            ))}

            {/* Modals */}
            <WalletSelectModal
                show={walletSelectionModalVisible}
                onClose={() => setWalletSelectionModalVisible(false)}
            />
            {/* <WalletQRModal show={true} /> */}
            {/* <AddCaseModal show={true} /> */}
            {/* <AddPortfolioModal show={true} /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    coldWalletButton: {
        borderColor: '#3e7eff',
        borderWidth: 1,
        color: '#3e7eff',
        fontSize: 14,
        width: '60%',
        alignItems: 'center',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
    },
    special: {
        position: 'absolute',
        bottom: 0,
    }
});

export default CaseMain;