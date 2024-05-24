import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className='flex flex-col items-center justify-center my-8 sm:mt-16'>
      <img src={logo} alt="A canvas" className='w-44 h-44 mb-8 object-contain' />
      <h1 className=' text-2xl font-semibold tracking-widest text-center uppercase text-[#9a3412] m-0 sm:text-4xl font-myHeader'>ReactArt</h1>
      <p className='text-center text-[#a39191] m-0'>A community of artists and art-lovers.</p>
    </header>
  );
}
