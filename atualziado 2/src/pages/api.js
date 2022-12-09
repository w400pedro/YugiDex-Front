import axios from "axios";

const BASE_API = "http://localhost:3001";
//const BASE_API = "https://yugidex-production.up.railway.app";

const token = localStorage.getItem('token')

export async function CreateUser(nome ,email, senha) {
    try {
        const response = await axios.post(`${BASE_API}/user/cadastrar`, {
            nome:nome,
            email: email,
            senha: senha
        })
        return response.data;
    } catch (error) {
        return null;
    }
}
export async function CreateCarta(nome ,tipo ,nivel, genero, ataque, defesa, texto) {
    try {
        const response = await axios.post(`${BASE_API}/carta/cadastrar`, {
            nome : nome,
            tipo: tipo,
            nivel: nivel,
            genero: genero,
            ataque: ataque,
            defesa: defesa,
            texto: texto,
        })
        return response.data;
    } catch (error) {
        return null;
    }
}

export async function LoginUser(email, senha) {
    try {
        const response = await axios.post(`${BASE_API}/user/auth`, {
            email: email,
            senha: senha
        })
        return response.data;
    } catch (error) {
        return null;
    }
}
