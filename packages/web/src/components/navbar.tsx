import Logo from '../images/Logo.svg';

const Navbar = () => {
  return (
    <header className='w-full px-7 flex flex-row items-center justify-between h-24 '>
        <img src={Logo} alt="Logo" className='img-custom ml-1 rotate-90'/>
        {/* <p className='text-xl font-sans self-center'>Nepal 🇳🇵</p> */}
    </header>
  )
}

export default Navbar
