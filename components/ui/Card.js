import { View,StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Card({children}){
    return <View style={styles.inputContainer}>{children}</View>
}

export default Card;

const styles=StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 24,
        borderRadius: 8,
        marginTop: 36,
        padding: 16,
        backgroundColor: Colors.primary800,
        elevation: 4,
      },
});
