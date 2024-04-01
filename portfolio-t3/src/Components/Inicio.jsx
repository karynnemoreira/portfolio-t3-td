import React from "react"
import Perfil from "./imagensPortfolio/perfil.png"
import Instagram from "./imagensPortfolio/instagram.png"
import Facebook from "./imagensPortfolio/facebook.png"
import Linkedin from "./imagensPortfolio/linkedin.png"
import * as S from "./Style.jsx"

function Inicio() {
  return (
    <S.Inicio>
      <img src={Perfil} alt="minha foto" />
      
      <h2>Olá! Eu sou Mariah</h2>
      <p>Não esqueça seu caderno</p>

      <S.RedesSociais>
      <img src={Instagram} alt="" />
      <img src={Facebook} alt="" />
      <img src={Linkedin} alt="" />
      </S.RedesSociais>

    </S.Inicio>
  )
}

export default Inicio