import React from "react"
import Inicio from "./Inicio.jsx"
import Sobre from "./Sobre.jsx"
import Projetos from "./Projetos.jsx"
import * as S from "./Style.jsx"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

//BrowserRouter: Sempre será o primeiro, a função dele é ser a caixa que vai englobar/envolver todo o nosso caminho (navegação)

//Routes: Dentro dessa caixa é onde começaremos a arquitetar nossos caminhos. Determina para onde cada rota vai.
// <Routes> 
// <Route/> Início
// <Route/> Sobre
// <Route/> Projetos
// </Routes>

//Route: <Route /> Específico para cada rota, uma Route para cada arquivo navegável (início, sobre e projetos)

//Link: Quando eu clicar em um lugar me leva para outro lugar dentro do meu código/página. O link vem dentro da <li>

function Navegacao() {

  return (
  <BrowserRouter>
  <S.Navegacao> 
    <S.Lista>
      {/* to = para, um link para tal lugar (sobre, projetos e início / ) */}
      <li> <Link to="/"> Início </Link> </li>
      <li> <Link to="/Sobre"> Sobre </Link> </li>
      <li> <Link to="/Projetos"> Projetos </Link> </li>
    </S.Lista>
  </S.Navegacao>

<Routes> 
{/* path (caminho) : Configura os dois, link to = "/Sobre" path="Sobre" */}
 {/* element: configura para qual componente quero ir, element={<Sobre/>} */}

<Route path="/" element={ <Inicio /> } />
<Route path="Sobre" element = { <Sobre /> } />
<Route path="Projetos" element = { <Projetos /> } />

</Routes>

  </BrowserRouter>
  )
}

export default Navegacao