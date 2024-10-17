import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./doctor.style.js";

function Doctor(props){
        return <TouchableOpacity style={styles.container}>
            <Image source={props.icon} style={styles.icon}/>
            <View>
                <Text style={styles.name}>
                    {props.text}
                </Text> 
                <Text style={styles.specialty}>
                    {props.specialty}
                </Text>
            </View>
        </TouchableOpacity>
}

export default Doctor;