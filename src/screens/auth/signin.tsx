import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import PrimaryButton from '../../components/common/buttons/PrimaryButton';
import FormInput from '../../components/common/form/FormInput';
import Typography from '../../components/common/typography/Typography';
import { Authenticate } from '../../redux/actions/authActions';

// type SigninProps {
//     navigatin: any;
// }

const Signin = ({ navigation }) => {

    const [email, setEmail] = useState('devprogrammer22@gmail.com');
    const [password, setPassword] = useState('CnQFq2*UWKgaIB');
    const dispatch = useDispatch();
    const auth = useSelector((state: any) => state.auth);

    useEffect(() => {
        if (auth.isAuthenticated) {
            navigation.navigate("TwoFactor");
        }
    }, [auth]);

    // dispatch({ type: "clear_all" });

    const onSignin = () => {
        dispatch(Authenticate({ email, password }))
    }

    return (
        <Wrapper>
            <Typography size={25} weight="Bold" align='center'>Welcome to Asset Reality</Typography>
            <Typography align='center' variant='secondary' mb={50}>Enter your details to login</Typography>

            <FormInput
                placeholder='Email'
                value={email}
                onChangeText={setEmail}
            />
            <FormInput
                placeholder='Password'
                value={password}
                onChangeText={setPassword}
            />

            <PrimaryButton
                style={{ marginTop: 50 }}
                onPress={onSignin}
            >
                Sign In
            </PrimaryButton>

            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                <RecoveryButton>
                    <Typography variant='secondary'>Recover account</Typography>
                </RecoveryButton>
            </View>
        </Wrapper>
    )
};

const Wrapper = styled.View`
    flex: 1;
    background-color: #fff;
    justify-content: center;
    padding: 0 10% 0 10%;
`;

const RecoveryButton = styled.TouchableOpacity`
    // background-color: blue;
`;

export default Signin;