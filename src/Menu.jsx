import { AppBar, Toolbar, Typography, Button } from "@mui/material";

function Menu({ onLogout }) {
    return (
        // AppBar cria o menu superior padrão Material Design
        <AppBar position="static">
            <Toolbar>
                {/* Título do sistema */}
                {/* flexGrow empurra o botão para a direita */}
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Sistema de Alunos
                </Typography>
                {/* Botão de logout */}
                {/* Chama a função que está no App.js */}
                <Button color="inherit" onClick={onLogout}>
                    Sair
                </Button>
            </Toolbar>
        </AppBar>
    );
}
export default Menu;