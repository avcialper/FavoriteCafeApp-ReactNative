import {StyleSheet, Dimensions} from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#4a1205',
        height: Dimensions.get("screen").height / 8,
        margin: 10,
        marginBottom: 5,
        padding: 12,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    name: {
        color: 'white',
        fontSize: 23,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    icon: {
        margin: 10,
        fontSize: 25,
    }
});