import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container: {
        flex: 1,
        padding: 15, 
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.gray4,
        flexDirection: 'row'
    },
    service: {
        flex: 1,
        marginTop: 10,
    },
    description: {
        fontSize: FONT_SIZE.md,
        color: COLORS.gray3,
        marginBottom: 5
    },
    price: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.blue
    },
    containerButton: {
        marginTop: 5
    }
}