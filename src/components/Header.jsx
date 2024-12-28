const Header = () => {
  return (
    <header id="navbar" className="bg-[#76726A] px-[120px] w-100 h-[151px] flex items-center justify-between text-white font-montserrat">

        {/* Logo */}
        <a href="/home">
          <div className="flex">
            <div className="">
              <h1 className="text-3xl font-semibold tracking-[10px]">
                RISHIK P
              </h1>
              <h1 className="text-3xl font-bold tracking-[14.5px]">
                SHOOTS
              </h1>     
            </div>
            <div className="shrink-0 w-[1px] border-white border-solid border-[2px] h-[70px]" />
          </div>
        </a>

        {/* Links */}
        <nav>
          <ul className="flex space-x-[54px] tracking-[6px]">
            <li className="hover:scale-125 ease-in-out duration-200"><div className="p-2"><a href="/home">home</a></div></li>
            <li className="hover:scale-125 ease-in-out duration-200"><div className="p-2"><a href="/about">about</a></div></li>
            <li className="hover:scale-125 ease-in-out duration-200"><div className="p-2"><a href="/gallery">gallery</a></div></li>
            <li className="hover:scale-125 ease-in-out duration-200"><div className="p-2"><a href="/booking">booking</a></div></li>
          </ul>
        </nav>

      </header>
  )
}

export default Header