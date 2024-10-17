import { COLORS, FONT_SIZE } from "../../constants/theme.js";
export const styles = {
    appointment: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 12,
        borderWidth: 1,
        borderColor: COLORS.gray4
    },
    name: {
        fontSize: FONT_SIZE.lg,
        color: COLORS.gray1,
        marginBottom: 2
    },
    specialty: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.gray3,
        marginBottom: 4
    },
    icon: {
        width: 25,
        height: 25,
        marginRight: 5
    },
    booking: {
        flexDirection: "row",
    },
    bookingDate: {
        marginTop: 5,
        fontSize: FONT_SIZE.sm,
        color: COLORS.gray3
    },
    bookingHour: {
        marginTop: 5,
        color: COLORS.gray3,
        fontSize: FONT_SIZE.sm
    },
    container: {
        flexDirection: "row"
    },
    containerBooking: {
        flex: 1,
        paddingTop: 5
    }
}