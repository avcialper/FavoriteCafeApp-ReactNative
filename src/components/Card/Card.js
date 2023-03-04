import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import styles from "./Card.style"

const Card = ({ item, cafeList, setCafeList, editFavList, position }) => {

    // Icon color state
    const [isFavorite, setIsFavorite] = useState(item.isFavorite)
    // Card visible state
    const [visible, setVisible] = useState(true)

    // Add or remove in favList and change isFavorite value
    function setChange() {
        const list = cafeList.map(cafe => {
            if (cafe.id === item.id)
                cafe.isFavorite = !cafe.isFavorite
            return cafe
        })
        setIsFavorite(item.isFavorite)
        setCafeList(list)
        editFavList()
    }

    // If switch position on and item take of in list this card take of
    useEffect(() => {
        !isFavorite && position ? setVisible(false) : setVisible(true)
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