import { useEffect, useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet, ScrollView } from "react-native"
import Typography from "../../common/typography/Typography";

const PortfolioButtons = ({activeId, onChange}) => {
    const styles = buttonListStyles;
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        setActiveIndex(activeId);
    }, [activeId]);

    return (
        <ScrollView horizontal style={{ marginTop: 0 }} showsHorizontalScrollIndicator={false}>
            {[1, 2, 3, 4].map((value, index) => (
                <PfButton
                    key={index}
                    active={index === activeIndex}
                    index={index}
                    onPress={i => {setActiveIndex(i); onChange(i); }}
                />
            ))}
        </ScrollView>
    )
};

const PfButton = ({ active, index, onPress }) => {
    const styles = buttonStyle;
    return (
        <TouchableOpacity
            style={{
                ...styles.container,
                ...(active ? styles.activeColor : styles.normalColor)
            }}
            onPress={() => onPress(index)}
        >
            <Typography
                style={{
                    ...styles.innerText,
                    ...(active ? styles.innerTextActiveColor : styles.innerTextNormalColor)
                }}
                // variant={active ? 'primary' : 'secondary'}
            >
                Portfolio {index + 1}
            </Typography>
            {/* <Text ></Text> */}
        </TouchableOpacity>
    )
}

const buttonListStyles = StyleSheet.create({
    container: {

    }
});

const buttonStyle = StyleSheet.create({
    container: {
        marginRight: 30,
        // marginLeft: 40,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
        borderWidth: 1,
    },
    activeColor: {
        backgroundColor: '#3e7eff',
        borderColor: '#3e7eff'
    },
    normalColor: {
        borderColor: '#EFEFFA',
        // borderColor: 'red',
    },
    innerText: {
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    innerTextActiveColor: {
        color: '#fff',
    },
    innerTextNormalColor: {
        color: '#8a8b9d',
    }
});

export default PortfolioButtons;