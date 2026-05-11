import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../../../contexts/AuthContext";
import type Tema from "../../../models/Tema";
import { buscar, deletar } from "../../../services/Service";

function DeletarTema() {

    const navigate = useNavigate()

    const [tema, setTema] = useState<Tema>({} as Tema)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
                alert("Sua sessão expirou, faça login novamente.")
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert("Você precisa estar logado.")
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarTema() {
        setIsLoading(true)

        try {
            await deletar(`/temas/${id}`, {
                headers: {
                    'Authorization': token
                }
            })
            alert("Tema deletado com sucesso!")
            navigate('/temas')
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
                alert("Sua sessão expirou, faça login novamente.")
            } else {
                alert("Ocorreu um erro ao deletar o tema. Por favor, tente novamente.")
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/temas")
    }

    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar Tema</h1>
            <p className='text-center font-semibold mb-4'>
                Squeak! Tem certeza que deseja deletar este tema? Essa ação não pode ser desfeita.
            </p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header
                    className='py-2 px-6 bg-[#48474C] text-white font-bold text-2xl'>
                        Tema
                    </header>
                    <p className='p-8 text-3xl bg-pink-200 h-full'>{tema.descricao}</p>
                    <div className="flex">
                        <button
                            className='w-full bg-[#48474C] text-white font-bold
                                        hover:bg-pink-500 flex items-center justify-center'
                                        onClick={deletarTema}>

                                            { isLoading ?
                                                <ClipLoader
                                                    color="#ffffff"
                                                    size={24}
                                                /> :
                                                <span>Sim</span>
                                            }
                                            
                                        </button>
                        <button
                            className='text-white bg-red-400 font-bold hover:bg-red-700 w-full py-2'
                            onClick={retornar}>
                                Não
                            </button>
                    </div>
            </div>
        </div>
    )
}
export default DeletarTema;