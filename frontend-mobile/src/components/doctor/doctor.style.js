import { COLORS, FONT_SIZE } from "../../constants/theme"
export const styles ={
    container: {
        flex: 1,
        marginBottom: 5,
        borderWidth: 1,
        padding: 12,
        borderColor: COLORS.gray4,
        flexDirection: "row"
    },
    icon: {
        width: 50,
        height: 50,
        marginRight: 10
    },
    name: {
        marginTop: 10,
        fontSize: FONT_SIZE.md,
        color: COLORS.gray1,
        marginBottom: 5
    },
    specialty: {
        color: COLORS.gray3,
        fontSize: FONT_SIZE.sm
    }
}