import insta_icon from "../assets/instagram_icon.png"
import pinterest_icon from "../assets/pinterest_icon.png"
import mail_icon from "../assets/mail_icon.png"

const Footer = () => {
  return (
    <div id="footer-container" className="mt-[100px] p-[5px] w-full h-[200px] bg-[#3B3B3B] text-white flex flex-col justify-center items-center inset-x-0 bottom-0 font-montserrat">
        <div id="socials-container" className="flex border-0 border-red-300 w-[250px] h-[50px] text-white justify-evenly items-center p-2">
          <a href="https://www.instagram.com/">
            <div className="size-[23px] border-0 border-red-500">
              <img src={insta_icon} alt="instagram icon" />
            </div>
          </a>
          <a href="https://www.pinterest.com/">
            <div className="size-[23px] border-0 border-blue-500">
              <img src={pinterest_icon} alt="pinterest icon" />
            </div>
          </a>
          <a href="https://www.google.com/">
            <div className="size-[23px] border-0 border-green-500">
              <img src={mail_icon} alt="mail icon" />
            </div>
          </a>
        </div>
        
        <div id="copyright-container" className="self-center mt-12 text-sm text-center text-white tracking-[2.85px] max-md:mt-10">
            © 2024 Rishik Pulipaka. All Rights Reserved.
        </div>
        
    </div>
  )
}

export default Footer