import { Text, View } from "react-native";
import { styles } from "../abaprofile/abaprofile.style.js";

function AbaProfile(){
    return <View style={styles.container}>
        <View style={styles.item}>
            <Text style={styles.title}>Nome</Text>
            <Text style={styles.text}>Gabriel da Luz Veloso</Text>
        </View>
        <View style={styles.item}>
            <Text style={styles.title}>E-mail</Text>
            <Text style={styles.text}>gveloso@teste.com.br</Text>
        </View>
    </View>
}

export default AbaProfile;