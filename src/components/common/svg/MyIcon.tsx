import BitcoinSvg from "../../../assets/icons/crypto/btc_icon.svg";
import EthereumSvg from "../../../assets/icons/crypto/eth_icon.svg";
import CardanoSvg from "../../../assets/icons/crypto/cardano_icon.svg";
import RippleSvg from "../../../assets/icons/crypto/xrp_icon.svg";
import SolanaSvg from "../../../assets/icons/crypto/solana_icon.svg";
import DollarSvg from "../../../assets/icons/crypto/dollar_icon.svg";

// Settings
import UserSvg from "../../../assets/icons/settings/custodians_icon.svg";
import SettingEmailSvg from "../../../assets/icons/settings/email_settings_icon.svg";
import SettingInvoiceSvg from "../../../assets/icons/settings/invoices_icon.svg";
import GroupSvg from "../../../assets/icons/settings/custodians_icon.svg";
import CustodianSvg from "../../../assets/icons/settings/custodians_icon.svg";
import OrganisationSvg from "../../../assets/icons/settings/organisation_icon.svg";
import OrganisationNameSvg from "../../../assets/icons/settings/organisation_name_icon.svg";
import TrashSvg from "../../../assets/icons/settings/trash_icon.svg";
import FlagSvg from "../../../assets/icons/settings/country_flag_icon.svg";
import LocationSvg from "../../../assets/icons/settings/location_icon.svg";
import EmailSvg from "../../../assets/icons/settings/email_icon.svg";
import PhoneSvg from "../../../assets/icons/settings/phone_number_icon.svg";
import DownloadSvg from "../../../assets/icons/settings/download_icon.svg";

// Country
import CountryUKSvg from "../../../assets/icons/country/uk.svg";

// Common
import SearchSvg from "../../../assets/icons/common/search_icon.svg";

// Country
export const UK = props => <CountryUKSvg {...props} />

// Cryptocurrency
export const Bitcoin = props => <BitcoinSvg {...props} />
export const Ethereum = props => <EthereumSvg {...props} />
export const Cardano = props => <CardanoSvg {...props} />
export const Ripple = props => <RippleSvg {...props} />
export const Solana = props => <SolanaSvg {...props} />
export const Dollar = props => <DollarSvg {...props} />

// Settings
export const User = props => <UserSvg {...props} />
export const EmailSettings = props => <SettingEmailSvg {...props} />
export const Invoice = props => <SettingInvoiceSvg {...props} />
export const Group = props => <GroupSvg {...props} />
export const UserPlus = props => <CustodianSvg {...props} />
export const Organisation = props => <OrganisationSvg {...props} />
export const OrganisationName = props => <OrganisationNameSvg {...props} />
export const Trash = props => <TrashSvg {...props} />
export const Flag = props => <FlagSvg {...props} />
export const Location = props => <LocationSvg {...props} />
export const Email = props => <EmailSvg {...props} />
export const Phone = props => <PhoneSvg {...props} />
export const Download = props => <DownloadSvg {...props} />
export const Search = props => <SearchSvg {...props} />