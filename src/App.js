// Importação do hook useState do React
// Ele permite controlar estados dentro do componente
import { useState } from "react";
// Importação dos componentes do sistema
import Login from "./Login";
import Dashboard from "./Dashboard";
import Alunos from "./Alunos";
import Menu from "./Menu";
// Componente principal da aplicação
function App() {
  // Estado que controla se o usuário está logado ou não
  // Inicialmente começa como false
  const [logado, setLogado] = useState(false);

  // NOVO ESTADO: Controla qual tela exibir dentro do sistema
  // Pode ser 'dashboard' ou 'alunos'
  const [telaAtiva, setTelaAtiva] = useState("dashboard");
  // Se o usuário NÃO estiver logado
  // exibimos apenas a tela de login
  if (!logado) {
    // onLogin é uma função enviada para o componente Login
    // Quando o login for realizado com sucesso
    // setLogado(true) será executado

    return <Login onLogin={() => setLogado(true)} />;
  }
  // Se o usuário estiver logado
  // exibimos o sistema
  return (
    <>
      {/* Passamos a função setTelaAtiva para o Menu poder mudar a tela */}
      <Menu
        onLogout={() => setLogado(false)}
        setTelaAtiva={setTelaAtiva}
      />
      {/* RENDERIZAÇÃO CONDICIONAL */}
      {/* Se a telaAtiva for 'dashboard', mostra Dashboard. Se for 'alunos', mostra Alunos. */}
      {telaAtiva === "dashboard" && <Dashboard />}
      {telaAtiva === "alunos" && <Alunos />}
    </>
  );
}
// Exportação do componente principal
export default App;