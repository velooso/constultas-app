import { Text, View, FlatList } from "react-native";
import { styles } from "./abahome.style.js";
import icon from "../../constants/icon.js";
import { doctors } from "../../constants/data.js";
import Doctor from "../../components/doctor/doctor.jsx";

function AbaHome() {
    return <View style={styles.container}>
            <Text style={styles.text}>Agende seus serviços médicos</Text>
            <FlatList data={doctors}
                keyExtractor={(doc) => doc.id_doctor}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return <Doctor 
                    icon={item.icon == "M" ? icon.male : icon.female}
                    text={item.name}
                    specialty={item.specialty}
                    />
                }}
            />
        
     </View>
       
}

export default AbaHome;