import icon from "../../constants/icon.js";
import { appointments } from "../../constants/data.js";
import { Text, View, Image } from "react-native";
import Button from "../button/button.jsx";
import { styles } from "../appointment/appointment.style.js";

function Appointment(props){ 
    return <View style={styles.appointment}>
        <Text style={styles.name}>{props.service} - {props.doctor} </Text>
        <Text style={styles.specialty}>{props.specialty}</Text>

        <View style={styles.container}>
            <View style={styles.containerBooking}>
                 <View style={styles.booking}>
                    <Image style={styles.icon} source={icon.calendar}/>
                    <Text style={styles.bookingDate}>17/10/2024</Text>
                </View>
                <View style={styles.booking}>
                    <Image style={styles.icon} source={icon.clock}/>
                    <Text style={styles.bookingHour}>18:20h</Text>
                </View>
            </View>
            <View style={styles.containerButton}>
                <Button style={styles.button}  text="Cancelar Reserva" theme="danger" />
            </View>
        </View>
    </View>
}

export default Appointment;