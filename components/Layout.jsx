import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='bg-sky-600 mb-8 py-4'>
        <div className='container mx-auto flex justify-center flex-col text-center'>
          {
            router.pathname !== '/' 
            ?
            (<>
              <p className="mx-auto text-xtream text-white font-medium">
                Microsft Edge incluye un lector de texto, presiona la combinación de teclas:
              </p>
              <p className="mx-auto text-xtream text-white font-medium">
                <span className="font-bold">Ctrl</span> + <span className="font-bold">Shift</span> + <span className="font-bold">U</span>
              </p>
              <p className="mx-auto text-2xl bg-yellow-400 text-rose-900 font-bold">
                  Da click <a className='font-extrabold' href='https://www.microsoft.com/es-es/edge?r=1' target="_blank noopener">aqui</a> si no tienes este navegador
              </p>
            </>)          
            :
            (
              <>
                <p className="mx-auto text-xtream text-white font-medium">
                  Material adicional de clase            
                </p>
                <h1 className="text-xtream text-white font-extrabold">Javascript básico</h1>
              </>
            )
            
          }          
        </div>
        {/* <a href='https://www.microsoft.com/es-es/edge?r=1'>Como instalar Microsoft Edge</a> */}
      </div>
      <main className='container font-bold mx-auto flex-2'>{children}</main>
    </div>
  );
}