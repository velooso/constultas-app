import { FlatList, Text, View, Image } from 'react-native';
import { doctors_services } from '../../constants/data.js';
import { styles } from './services.style.js';
import Service from '../../components/service/service.jsx';
import icon from '../../constants/icon.js';

function Services() {
    return <View style={styles.container}>
        <View style={styles.banner}>
            <Image source={icon.female} />
            <Text style={styles.name}>Dra. Adrielly</Text>
            <Text style={styles.specialty}>Pediatra</Text>
        </View>
        <FlatList data={doctors_services} 
            keyExtractor={(service) => service.id_service}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return <Service 
                description={item.description}
                price={item.price}
                />
            }} 

        />
    </View>
}

export default Services;