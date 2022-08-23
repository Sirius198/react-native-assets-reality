import { useEffect, useState } from 'react';
import styled from 'styled-components/native';

export default function OneDigitInput({ onChange = null, ...rest }) {

    const [value, setValue] = useState('');

    useEffect(() => {
        // const l = value.length;
        // if (l > 0) {
        //     if (l > 1) {
        //         setValue(value.substring(0, 1));
        //     }
        // }
    }, [value]);

    return (
        <Wrapper
            value={value}
            onChangeText={(v) => v.length <= 1 && setValue(v)}
            {...rest}
        />
    )
}

const Wrapper = styled.TextInput`
    width: 52px;
    height: 52px;
    border: 1px solid rgb(230, 230, 248);
    border-radius: 10px;
    text-align: center;
    font-size: 30px;
`;