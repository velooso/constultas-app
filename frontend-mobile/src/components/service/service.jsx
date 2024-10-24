import { Image, Text, View } from "react-native";
import icon from "../../constants/icon.js";
import { styles } from "../../components/service/service.style.js";
import Button from '../button/button.jsx';

function Service(props){
    return <View style={styles.container}>
        <View style={styles.service}>
            <Text style={styles.description}>{props.description}</Text>
            <Text style={styles.price}>
                {new Intl.NumberFormat("pt-BR", 
                    {style: 'currency', currency: "BRL"})
                    .format(props.price)}
            </Text>
        </View>
        <View style={styles.containerButton}>
            <Button text='Agendar'/>
        </View>
    </View>
}

export default Service;