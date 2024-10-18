import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-between',
        marginTop: 30,
        marginBottom: 30
    },
    theme: {
            selectedDayBackgroundColor: COLORS.blue,
            selectedDayTextColor: COLORS.white,
            todayTextColor: COLORS.red,
            arrowColor: COLORS.blue
    },
    hour: {
        fontSize : FONT_SIZE.lg,
        fontWeight: "bold",
        color: COLORS.gray3,
        marginTop: 20
    }
}