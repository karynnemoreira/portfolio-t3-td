import styled from "styled-components"

export const Navegacao = styled.nav`
    background-color: pink;
    font-family: "Sevillana", cursive;
`

export const Lista = styled.ul`
display: flex;
justify-content: space-evenly;
align-items: center;
height: 20vh;
list-style: none;
font-family: "Sevillana", cursive;

a{
     text-decoration: none;
    color: black; 
    font-size: 2rem;
}

a:hover{
color: white;
font-weight: 800;
}

@media(min-width: 320px) and (max-width: 768px){
    display: flex;
    flex-direction: column;
    height: 50vh;
    a:hover{
        font-size: 2.5rem;
        color: purple;
    }

}

`

//---estilização do componente inicio

export const Inicio = styled.main`
background-color: black;
display: flex;
justify-content: space-evenly;
flex-direction: column;
align-items: center;
height: 80vh;

img{
    border-radius: 50%;
}


h2, p{
    color: white;
}

@media(min-width: 320px) and (max-width: 768px){
    height: 100vh;


    img{
        width: 70vw;
    }

    h2,p{
        font-size: 2rem;
        text-align: center;
    }
}


`

export const RedesSociais = styled.div`
width: 30vw;
display: flex;
justify-content: space-evenly;

img{
    width: 3vw;
}

@media(min-width: 320px) and (max-width: 768px){

    width: 80vw;
    justify-content: space-evenly;
    img{
        width: 15vw;
    }
}

`

//---estilização do componente sobre

export const Sobre = styled.main`
    display: flex;
    justify-content: space-evenly;
`

export const Estudos = styled.section`
border: solid red;
    display: flex;
     flex-direction: column; 
    align-items: center;
    justify-content: space-evenly;
    height: 50vh;
    width: 30vw;
`

export const Habilidades = styled.section`
border: solid; 
height: 50vh;
width: 30vw;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;

div{
    display: flex;
    align-items: center;
}

img{
    height: 7vh;
}


`
