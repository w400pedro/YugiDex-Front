import React, {useState,setState} from 'react';
import './style.css'
import { CreateCarta} from '../../pages/api'
function RegistrationForm() {
    //nome, tipo, nivel, genero, ataque, defesa, texto
    
    const [Name, setName] = useState(null);
    const [tipo, settipo] = useState(null);
    const [nivel,setnivel] = useState(null);
    const [genero,setgenero] = useState(null);
    const [ataque,setataque] = useState(null);
    const [defesa,setdefesa] = useState(null);
    const [texto,settexto] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "Name"){
            setName(value);
        }
        if(id === "tipo"){
            settipo(value);
        }
        if(id === "nivel"){
            setnivel(value);
        }
        if(id === "genero"){
            setgenero(value);
        }
        if(id === "ataque"){
            setataque(value);
        }
        if(id === "defesa"){
            setdefesa(value);
        }
        if(id === "texto"){
            settexto(value);
        }

    }

    const handleSubmit  = () => {
        console.log(Name,tipo,nivel,genero,ataque,defesa,texto);

        const createCarta = async()=>{
            const user = await CreateCarta(Name , tipo ,nivel, genero, ataque, defesa, texto);
            console.log('user',user)
        }
        createCarta()

    }

    return(
        <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="Name">Name </label>
                    <input className="form__input" type="text" value={Name} onChange = {(e) => handleInputChange(e)} id="Name" placeholder="Name"/>
                </div>
                <div className="tipo">
                    <label className="form__label" for="tipo">tipo </label>
                    <input  type="tipo" id="tipo" className="form__input" value={tipo} onChange = {(e) => handleInputChange(e)} placeholder="tipo"/>
                </div>
                <div className="nivel">
                    <label className="form__label" for="nivel">nivel </label>
                    <input className="form__input" type="nivel"  id="nivel" value={nivel} onChange = {(e) => handleInputChange(e)} placeholder="nivel"/>
                </div>
                <div className="genero">
                    <label className="form__label" for="genero">genero </label>
                    <input className="form__input" type="genero"  id="genero" value={genero} onChange = {(e) => handleInputChange(e)} placeholder="genero"/>
                </div>
                <div className="ataque">
                    <label className="form__label" for="ataque">ataque </label>
                    <input className="form__input" type="ataque"  id="ataque" value={ataque} onChange = {(e) => handleInputChange(e)} placeholder="ataque"/>
                </div>
                <div className="defesa">
                    <label className="form__label" for="defesa">defesa </label>
                    <input className="form__input" type="defesa"  id="defesa" value={defesa} onChange = {(e) => handleInputChange(e)} placeholder="defesa"/>
                </div>
                <div className="texto">
                    <label className="form__label" for="texto">texto </label>
                    <input className="form__input" type="texto"  id="texto" value={texto} onChange = {(e) => handleInputChange(e)} placeholder="texto"/>
                </div>
            </div>
            <div class="footer">
                <button onClick={()=>handleSubmit()} type="submit" class="btn">Register</button>
            </div>
        </div>
       
    )       
}

export default RegistrationForm