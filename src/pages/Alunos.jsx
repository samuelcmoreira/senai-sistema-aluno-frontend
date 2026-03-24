import { useEffect, useState } from "react";
// Componentes visuais do MUI
import {
    Container,
    Typography,
    Paper,
    TextField,
    Snackbar,
    Alert,
    IconButton,
    Button
} from "@mui/material";
// Tabela avançada
import { DataGrid } from "@mui/x-data-grid";
// Ícone de excluir
import DeleteIcon from '@mui/icons-material/Delete';
// Importando nossa API (boa prática)
import { getAlunos, criarAluno, deletarAluno } from "../services/api";
function Alunos() {
    /*
    ==============================
    🧠 ESTADOS DO COMPONENTE
    ==============================
    */
    // Lista de alunos vindos da API
    const [alunos, setAlunos] = useState([]);
    // Campo de busca
    const [busca, setBusca] = useState("");
    // Campos do formulário
    const [nome, setNome] = useState("");
    const [curso, setCurso] = useState("");
    // Controle do Snackbar (alerta)
    const [openAlert, setOpenAlert] = useState(false);
    const [mensagem, setMensagem] = useState("");
    const [tipo, setTipo] = useState("success"); // success | error
    /*
    ==============================
    🔄 FUNÇÃO: CARREGAR ALUNOS
    ==============================
    Busca dados da API
    */
    const carregarAlunos = async () => {
        try {
            const data = await getAlunos(); // chama API
            setAlunos(data); // atualiza estado
        } catch {
            // Se der erro → mostra alerta
            setMensagem("Erro ao carregar dados!");
            setTipo("error");
            setOpenAlert(true);

        }
    };
    /*
    ==============================
    ⚙️ useEffect
    ==============================
    Executa automaticamente ao carregar a tela
    */
    useEffect(() => {
        carregarAlunos();
    }, []);
    /*
    ==============================
    ➕ CRIAR NOVO ALUNO
    ==============================
    */
    const handleCriar = async () => {
        try {
            // Envia dados para API
            await criarAluno({ nome, curso });
            // Feedback para o usuário
            setMensagem("Aluno criado com sucesso!");
            setTipo("success");
            setOpenAlert(true);
            // Limpa formulário
            setNome("");
            setCurso("");
            // Atualiza lista automaticamente
            carregarAlunos();
        } catch {
            setMensagem("Erro ao criar aluno!");
            setTipo("error");
            setOpenAlert(true);
        }
    };
    /*
    ==============================
    ❌ DELETAR ALUNO
    ==============================
    */
    const handleEliminar = async (id, nome) => {
        try {
            await deletarAluno(id);
            setMensagem(`Aluno ${nome} removido!`);
            setTipo("success");
            setOpenAlert(true);
            // Atualiza lista após exclusão
            carregarAlunos();
        } catch {
            setMensagem("Erro ao deletar!");
            setTipo("error");
            setOpenAlert(true);
        }
    };
    /*
    ==============================
    
    📊 CONFIGURAÇÃO DA TABELA
    ==============================
    */
    const colunas = [
        { field: "matricula", headerName: "ID", flex: 0.5 },
        { field: "nome", headerName: "Nome", flex: 2 },
        { field: "curso", headerName: "Curso", flex: 1 },
        {
            field: "acoes",
            headerName: "Ações",
            flex: 0.5,
            // renderCell permite colocar botão dentro da tabela
            renderCell: (params) => (
                <IconButton
                    color="error"
                    onClick={() =>
                        handleEliminar(params.row.matricula, params.row.nome)
                    }
                >
                    <DeleteIcon />
                </IconButton>
            ),
        },
    ];
    /*
    ==============================
    🔍 FILTRO DE BUSCA
    ==============================
    */
    const alunosFiltrados = alunos.filter((a) =>
        a.nome.toLowerCase().includes(busca.toLowerCase())
    );
    /*
    ==============================
    🎨 RENDERIZAÇÃO
    ==============================
    */
    return (
        <Container>
            <Typography variant="h4" sx={{ my: 3 }}>
                Gestão de Alunos (CRUD)
            </Typography>
            {/* ================= FORMULÁRIO ================= */}
            <TextField
                label="Nome"
                fullWidth
                sx={{ mb: 2 }}
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
            <TextField
                label="Curso"
                fullWidth
                sx={{ mb: 2 }}
                value={curso}
                onChange={(e) => setCurso(e.target.value)}
            />
            <Button
                variant="contained"

                onClick={handleCriar}
                sx={{ mb: 3 }}
            >
                Adicionar Aluno
            </Button>
            {/* ================= BUSCA ================= */}
            <TextField
                fullWidth
                label="Pesquisar aluno..."
                sx={{ mb: 3 }}
                onChange={(e) => setBusca(e.target.value)}
            />
            {/* ================= TABELA ================= */}
            <Paper sx={{ height: 400 }}>
                <DataGrid
                    rows={alunosFiltrados}
                    columns={colunas}
                    getRowId={(row) => row.matricula}
                />
            </Paper>
            {/* ================= ALERTA ================= */}
            <Snackbar
                open={openAlert}
                autoHideDuration={3000}
                onClose={() => setOpenAlert(false)}
            >
                <Alert severity={tipo} variant="filled">
                    {mensagem}
                </Alert>
            </Snackbar>
        </Container>
    );
}
export default Alunos;