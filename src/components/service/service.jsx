import { Image, Text, View } from "react-native";
import icon from "../../constants/icon.js";
import { styles } from "../../components/service/service.style.js";

function Service(props){
    return <View style={styles.container}>
        <View style={styles.service}>
            <Text>{props.description}</Text>
            <Text>{props.price}</Text>
        </View>
    </View>
}

export default Service;