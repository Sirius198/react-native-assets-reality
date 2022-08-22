import Typography from "../typography/Typography"

const ModalTitle = ({ title, weight = "SemiBold", ...rest }) => {
    return (
        <Typography weight={weight} size={18} {...rest}>{title}</Typography>
    )
}

export default ModalTitle