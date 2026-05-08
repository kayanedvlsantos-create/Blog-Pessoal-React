import axios from "axios";

const api = axios.create({
    baseURL: 'https://blogpessoal-7d0a.onrender.com/'
})

export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {  // função anônima
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
}

export const login = async (url: string, dados: Object, setDados: Function) => {  // função anônima
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
}