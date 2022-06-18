import { useRouter } from 'next/router';
import navigator from '../utils/navigator';

export default function Layout({ children }) {
  const router = useRouter();
  const navigatorBrand = navigator(); 

  return (
    <div className='flex flex-col w-screen'>
      <div className='bg-sky-600 mb-8 py-4'>
        <div className='container mx-auto flex justify-center flex-col text-center'>
          { router.pathname !== '/' && navigatorBrand }
          { router.pathname === '/' && (
            <>
              <p className="mx-auto md:text-xtream text-white font-medium">Material adicional de clase</p>
              <h1 className="md:md:text-xtream text-white font-extrabold">Javascript básico</h1>
            </>
          ) }
        </div>
      </div>
      <main className='container md:text-font-base font-bold mx-auto flex-2'>{children}</main>
    </div>
  );
}