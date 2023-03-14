import { useEffect, useState } from "react"
import HelloWorld from "./HelloWorld.jsx";
import Parent from "./Parent.jsx";
import Frutaitem from './Frutaitem';
import './App.css'
import api from "./Api.jsx";
import { Button, Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";



function App() {

  const [nomeDesejado, setNomeDesejado] = useState("");
  const [data, setData] = useState(null);

  const cesto_frutas = [
     {
      nome:"banana",
      quantidade:12,
     },
     {
      nome:"maça",
      quantidade:3,
     },
     {
      nome:"melancia",
      quantidade:1,
     }
  ];

  // useEffect( () => {
  //   const loadData = async () => {
  //     const response = await api.getUser(nomeDesejado);
  //     setData(response);

  //   }
  //   loadData();      
  // } , [nomeDesejado]);

  const loadData = async () => {
    const response = await api.getUser(nomeDesejado);
    setData(response);

  }

  function buscar (event){
    event.preventDefault();
    loadData();

  }



  return (
    <div className="App">
      <HelloWorld nome="Eneas" idade="38"/>
      <HelloWorld nome="Joao"idade="25"/>
      <HelloWorld nome="Halesson"idade="22"/>

      <Parent>
        <HelloWorld nome="Filho" idade="30"/>
        <h4>Titulo filho</h4>
      </Parent>


      {
        cesto_frutas.map( (fruta) => {

          return (
            <Frutaitem nome={fruta.nome} quantidade={fruta.quantidade} 
            className="fruta"/>
          )

        })
      }
      <input onChange={ (e) => {setNomeDesejado(e.target.value) } } ></input>
      <Button onClick={buscar} sx={{backgroundColor:"success"}}>Carregar</Button>
      <p>{nomeDesejado}</p>
      <br/>
      {}
      { data?( <Card sx={{maxWidth: 345}}>
        <CardHeader title={data.name} suheader={data.login}></CardHeader>
        <CardMedia component="img" height="194" image={data.avatar_url} alt="user" />
        <CardContent><Typography>Repositórios Públicos: {data.public_repos}</Typography></CardContent>
      </Card>): null }

      


    </div>
  )
}



export default App
