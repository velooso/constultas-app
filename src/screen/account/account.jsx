import { TextInput,Text, View, Image, TouchableOpacity } from "react-native";
import icon from "../../constants/icon.js";
import { styles } from "./account.style.js";
import Button from "../../components/button/button.jsx";

function Account() {
    return <View style={styles.container}>
        <View style={styles.containerLogo}>
            <Image source={icon.logo} style={styles.logo}/>
        </View>
        
        <View>
        <View style={styles.containerInput}>
            <TextInput placeholder="Nome" style={styles.input}></TextInput>
            </View>
            <View style={styles.containerInput}>
            <TextInput placeholder="E-mail" style={styles.input}></TextInput>
            </View>
            <View style={styles.containerInput}>
            <TextInput placeholder="Senha" style={styles.input}></TextInput>
            </View>
            <Button text= "Criar Conta"/>
        </View>
        <View style={styles.footer}>
            <Text style={styles.text}>Já tenho conta. </Text>
            <TouchableOpacity >
                <Text style={styles.link}>Fazer Login</Text>
            </TouchableOpacity>
        </View>
     </View>
       
}

export default Account;