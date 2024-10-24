import { View, Text } from "react-native";
import { ptBR } from "../../constants/calendar";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { Picker } from "@react-native-picker/picker";
import { styles } from '../scheduler/scheduler.style.js';
import { useState } from "react";
import Button from "../../components/button/button.jsx";


LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale= 'pt-br';


function Scheduler() {

    const [selectedDay, setSelectedDay] = useState(new Date().toISOString().slice(0, 10));
    const [selectedHour, setSelectedHour] = useState("");

    return <View style={styles.container}>
        <View>

        
        <Calendar theme={styles.theme}
        onDayPress={(day) => {
            setSelectedDay(day.dateString)
        }}
        markedDates={{
            [selectedDay] : {selected: true}
        }}
        minDate={new Date().toDateString()}
            />

            <View>
                <Text style={styles.hour}>Horário</Text>
            </View>

            <View>    
                <Picker 
                selectedValue={selectedHour}
                onValueChange={(itemValue, itemIndex) => 
                    setSelectedHour(itemValue)
                }>
                    <Picker.Item label="09:10" value="09:10"/>
                    <Picker.Item label="09:20" value="09:20"/>
                    <Picker.Item label="09:30" value="09:30"/>
                </Picker>
                </View>        
        </View>
            <View style={styles.containerButton}>
                <Button text="Confirmar reserva"/>   
            </View>
    </View>
}

export default Scheduler;