import { useState } from "react";
import Login from "./Login";
import Alunos from "./Alunos";
import Menu from "./Menu";

function App() {
  // Controla se o usuário está logado
  const [logado, setLogado] = useState(false);
  // Se não estiver logado → mostra tela de login
  if (!logado) {
    return <Login onLogin={() => setLogado(true)} />;
  }
  // Se estiver logado → mostra o sistema
  return (
    <>
      {/* Menu superior com botão de logout */}
      <Menu onLogout={() => setLogado(false)} />
      {/* Conteúdo principal */}
      <Alunos />
    </>
  );
}
export default App;