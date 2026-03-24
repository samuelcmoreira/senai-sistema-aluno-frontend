// URL base da API (backend)
const API_URL = "http://localhost:8080/api/alunos";
/*
==============================
📥 GET - Buscar alunos
==============================
Função responsável por ir até a API
e retornar a lista de alunos
*/
export const getAlunos = async () => {
    // Faz a requisição HTTP
    const response = await fetch(API_URL);
    // Verifica se houve erro na requisição
    if (!response.ok) {
        throw new Error("Erro ao buscar alunos");
    }
    // Converte a resposta para JSON
    return response.json();
};
/*
==============================
➕ POST - Criar aluno
==============================
Envia um novo aluno para o servidor
*/
export const criarAluno = async (aluno) => {
    const response = await fetch(API_URL, {
        method: "POST", // Define método HTTP
        headers: {
            "Content-Type": "application/json", // Indica envio em JSON
        },
        body: JSON.stringify(aluno), // Converte objeto JS → JSON
    });
    // Tratamento de erro
    if (!response.ok) {
        throw new Error("Erro ao criar aluno");
    }
    return response.json();
};
/*
==============================
❌ DELETE - Remover aluno
==============================
Remove um aluno pelo ID (matricula)
*/
export const deletarAluno = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {

        method: "DELETE",
    });
    if (!response.ok) {
        throw new Error("Erro ao deletar aluno");
    }
};