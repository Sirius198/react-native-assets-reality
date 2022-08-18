import styled from 'styled-components/native';
import Avatar from '../../common/base/Avatar';

export default function AvatarList() {
    return (
        <Wrapper horizontal showsHorizontalScrollIndicator={false}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, index) => (
                <Avatar
                    key={index}
                    alt="HB"
                    style={{ marginRight: 10 }}
                    fontSize={14}
                    fontWeight="SemiBold"
                />
            ))}
        </Wrapper>
    )
}

const Wrapper = styled.ScrollView`
    // background-color: yellow;
    padding: 0;
    flex-grow: 0;
`;