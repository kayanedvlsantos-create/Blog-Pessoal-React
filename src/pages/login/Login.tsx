import {Link } from "react-router-dom";

function Login() {

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold" >
                <form className="flex justify-center items-center flex-col w-1/2 gap-4" >
                    <h2 className="text-slate-900 text-5xl ">Entrar</h2>
                    <div className="flex flex-col w-full">
                        <label htmlFor="usuario">E-mail</label>
                        <input
                            type="text"
                            id="usuario"
                            placeholder="usuario@email.com"
                            className="border-2 border-slate-700 rounded p-2"
                        />
                    </div>
                   <div className="flex flex-col w-full">
                    <label htmlFor="senha">Senha</label>
                    <input
                        type="password"
                        id="senha"
                        placeholder="Senha"
                        className="border-2 border-slate-700 rounded p-2"
                    />
                    </div> 
                    <button
                        type="submit"
                        className="rounded bg-yellow-200 flex justify-center
                        hover:bg-pink-400 text-pink-600 w-1/2 py-2">
                            <span>Entrar</span>
                        </button>

                        <hr className="border-slate-800 w-full" />

                        <p>
                            Ainda não tem uma conta?{' '}
                            <Link to="/cadastro" className="text-indigo-800 hover:underline">
                            Cadastre-se
                            </Link>
                        </p>
                </form>
                <div className="bg-[url('https://i.pinimg.com/564x/26/96/ab/2696ab30226944565efa60ec6724c937.jpg')] lg:block hidden bg-no-repeat
                       w-full min-h-screen bg-cover bg-center"
                       ></div>
            </div>
        </>
    );
}

export default Login;