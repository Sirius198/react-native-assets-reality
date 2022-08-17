import Typography from "../typography/Typography";

const FormLabel = ({ children, ...rest }) => {
    return (
        <Typography size={14} weight="Medium" style={{ marginBottom: 10 }} {...rest}>
            {children}
        </Typography>
    )
}

export default FormLabel;