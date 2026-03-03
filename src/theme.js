import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#f57c00", // Azul padrão do MUI
        },
        secondary: {
            main: "#fffc05", // Rosa padrão do MUI
        },
    },
    typography: {
        fontFamily: "Roboto, Arial, sans-serif", // Fonte padrão do MUI
    },
});

export default theme;