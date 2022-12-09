import React, {useState,setState} from 'react';
import './style.css'
import { CreateUser} from '../../pages/api'
function MostraCarta() {
    
    const [Name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "Name"){
            setName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }

    }

    const handleSubmit  = () => {
        console.log(Name,email,password);

        let body = {
            nome : Name,
            email: email,
            senha: password,
        }
        const createUser = async()=>{
            const user = await CreateUser(Name , email ,password);
            console.log('user',user)
        }
        createUser()

    }

    // <div className="form">
    //         <div className="form-body">
    //             <div className="username">
    //                 <label className="form__label" for="Name">Nome </label>
    //                 <input className="form__input" type="text" value={Name} onChange = {(e) => handleInputChange(e)} id="Name" placeholder="Nome"/>
    //             </div>
    //             <div className="email">
    //                 <label className="form__label" for="email">Email </label>
    //                 <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
    //             </div>
    //             <div className="password">
    //                 <label className="form__label" for="password">Senha </label>
    //                 <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Senha"/>
    //             </div>
    //         </div>
    //         <div class="footer">
    //             <button onClick={()=>handleSubmit()} type="submit" class="btn">Registrar</button>
    //         </div>
    //     </div>
    return(
        <div className='Cartas username'>
        <h3 className='h3'>Mostra Carta</h3>
        <div>
            <p>Nome: </p>
            <p>Tipo: </p>
        </div>
        <div>
            <p>Nivel: </p>
            <p>Vida: </p>
        </div>
        <div>
            <p>Defesa: </p>
            <p>Texto: </p>
        </div>
        </div>
    )       
}
export default MostraCarta