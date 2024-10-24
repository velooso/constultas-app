import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    item:{
        borderWidth: 1,
        borderColor: COLORS.gray4,
        paddingTop: 20,
        paddingBottom: 10
    },
    title:{
        fontSize: FONT_SIZE.md,
        color: COLORS.gray4,
        paddingBottom:5,
        paddingTop: 3,
        paddingLeft: 5
    },
    text: {
        marginLeft: 10,
        fontSize: FONT_SIZE.lg,
        color: COLORS.gray1,
        paddingBottom: 20
    }
}