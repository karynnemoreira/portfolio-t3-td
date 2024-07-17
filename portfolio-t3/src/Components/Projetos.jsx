import React from "react"
import Cao from "./imagensPortfolio/cao.png"
import Cruzeiro from "./imagensPortfolio/cruzeiro.png"
import Cartoon from "./imagensPortfolio/cartoon.png"
import TheWitcher from "./imagensPortfolio/homem.png"
import Patrocinadores from "./imagensPortfolio/patrocinadores.png"

function Projetos() {

  const desafios = [
    { imagem: Cao, titulo: "Fantastika", link: "https://www.outback.com.br/", descricao: "Html, Css, Responsivo" },
    { imagem: Cruzeiro, titulo: "Cruzeiro do Roberto Carlos", link: "https://www.outback.com.br/", descricao: "Lógica - JS" },
    { imagem: Cartoon, titulo: "Cartoon Network", link: "https://www.outback.com.br/", descricao: "React, Styled-components, useState, useEffect, map, filter, lógica" },
    { imagem: TheWitcher, titulo: "The Witcher", link: "https://www.outback.com.br/", descricao: "Html, Css, Position/Z-index" },
    { imagem: Patrocinadores, titulo: "Patrocinadores", link: "https://www.outback.com.br/", descricao: "Dom, useEffect, useState, styled-components, props" }
  ]


  return (
    <section>

      {desafios.map((item)=>(
        <div>
          <a href={item.link} target="_blank">   <img src={item.imagem} alt="" />  </a>
          <h2>{item.titulo}</h2>
          <h3>{item.descricao}</h3>
        </div>
      ))}

    </section>
  )
}

export default Projetos