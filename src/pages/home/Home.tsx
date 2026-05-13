import ListaPostagens from "../../components/postagem/listapostagem/ListaPostagens"
import ModalPostagem from "../../components/postagem/modalpostagem/ModalPostagem"

function Home() {
  return (
   <>
   <div className="bg-[#48474C] flex justify-center">
    <div className="container grid grid-cols-2 text-pink-400">
     <div className="flex flex-col gap-4 items-center justify-center py-4">
      <h2 className="text-5xl font-bold">
        ratomanchado Blogue
      </h2>
      <p className='text-xl'>
        Squeak! O que te traz aqui hoje?
      </p>

      <div className="flex justify-around gap-4">

         <ModalPostagem />
         
      </div>
     </div>
     <div className="flex justify-center">
      <img
      src="https://i.pinimg.com/originals/fb/eb/94/fbeb94f4b758bb021bb2ef0b398fbbad.gif"
      alt="imagem Página Home"
      className='w-2/3'
      />
        </div>
      </div>    
   </div>

    <ListaPostagens />

   </> 
   )
}

export default Home