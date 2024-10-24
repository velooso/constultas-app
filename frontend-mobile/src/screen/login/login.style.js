import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
    container: {
        backgroundColor: COLORS.white,
        flex: 1,
        padding: 50,
        justifyContent: "space-between"
        
    },
    containerLogo: {
        alignItems: "center",
    },
    containerInput: {
        marginBottom: 10
    },

    input: {
        backgroundColor: COLORS.gray5,
        padding: 15,
        borderRadius: 5
    },
    footer: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    link: {
        color: COLORS.blue,
        fontSize: FONT_SIZE.md
    },
    text: {
        color: COLORS.gray3,
        fontSize: FONT_SIZE.md
    },
    logo: {
        width: 100,
        height: 23
    }
}  