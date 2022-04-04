import  {useState} from 'react';

export const Partida_catalogo = () => {

    const [totalesPartidas1,setotalesPartidas1] = useState ([]);
    const [totalesCategorias1,setotalesCategorias1] = useState ([]);
    const [porcentajesPartidas, setPorcentajesPartidas] = useState([]);
    const [porcentajesCategorias, setPorcentajesCategorias] = useState([]);
    const [divisaProy, setDivisaProy] = useState([]);
    const [porcentajesCI,setPorcentajesCI] = useState ([]);

    const getTotalPar = (tP) => {setotalesPartidas1(tP); console.log('Partidas:',totalesPartidas1);};
    const getTotalCats = (tC) => {setotalesCategorias1(tC); console.log('Categorias:',totalesCategorias1);};
    const getPorcentajesPar = (pPar) => {setPorcentajesPartidas(pPar); console.log('AM partidas',porcentajesPartidas);};
    const getPorcentajesCats = (pCats) => {setPorcentajesCategorias(pCats); console.log('AM categorias',porcentajesCategorias);};
    const getDivisaProy = (pDiv) => {setDivisaProy(pDiv); console.log('Divisa:',divisaProy);};
    const getPorcentajesCI = (pCI) =>{setPorcentajesCI(pCI); console.log('Cotos indirectos:',porcentajesCI);};

 return {
     getTotalPar,
     getTotalCats,
     getPorcentajesPar,
     getPorcentajesCats,
     getPorcentajesCI,
     getDivisaProy,
     totalesPartidas1,
     totalesCategorias1,
     porcentajesPartidas,
     porcentajesCategorias,
     porcentajesCI
   }
};