import Typography from "../typography/Typography"

const ModalTitle = ({ title, ...rest }) => {
    return (
        <Typography weight="SemiBold" size={18} {...rest}>{title}</Typography>
    )
}

export default ModalTitle