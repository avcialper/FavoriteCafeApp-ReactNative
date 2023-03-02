import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import styles from "./Card.style"

const Card = ({ item, addRemove, favList, position }) => {

    // Icon color state
    const [isFavorite, setIsFavorite] = useState(item.isFavorite)
    // Card visible state
    const [visible, setVisible] = useState(true)

    // Add or remove in favList and change isFavorite value
    function setChange() {
        item = { ...item, isFavorite: !isFavorite }
        setIsFavorite(item.isFavorite)
        addRemove(item.isFavorite, item.id)
    }

    // To keep information saved after switch position changes and change favorite state in on position 
    useEffect(() => {
        // If current item in favList, icon is red
        for (const cafe of favList) {
            if (cafe.id === item.id) {
                setIsFavorite(true)
                break
            }
            setIsFavorite(false)
        };
        // If switch position on and item take of in list this card take of
        !isFavorite && position ? setVisible(false) : setVisible(true)
        // If favList is empty, all card icons color set white.
        if (favList.length == 0)
            setIsFavorite(false)
    }, [setChange])

    return (
        <View>{
            visible && <View style={styles.container}>
                <Text style={styles.name}>{item.name}</Text>
                <Icon
                    style={styles.icon}
                    color={isFavorite ? 'red' : 'white'}
                    name='heart'
                    onPress={setChange}
                />
            </View>
        }
        </View>
    );
};

export default Card;