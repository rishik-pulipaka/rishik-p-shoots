import insta_icon from "../../public/instagram_icon.png"
import pinterest_icon from "../../public/pinterest_icon.png"
import mail_icon from "../../public/mail_icon.png"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
        <div id="footer-container" className="mt-[100px] p-[5px] w-full h-[200px] bg-primary text-white flex flex-col justify-center items-center inset-x-0 bottom-0 font-montserrat">
          <div id="socials-container" className="flex w-[250px] h-[50px] text-white justify-evenly items-center p-2">
            <Link href="https://www.instagram.com/">
              <div className="size-[23px]">
                <Image src={insta_icon} alt="instagram icon" />
              </div>
            </Link>
            <Link href="https://www.pinterest.com/">
              <div className="size-[23px]">
                <Image src={pinterest_icon} alt="pinterest icon" />
              </div>
            </Link>
            <Link href="https://www.google.com/">
              <div className="size-[23px]">
                <Image src={mail_icon} alt="mail icon" />
              </div>
            </Link>
          </div>        
        <div id="copyright-container" className="self-center mt-12 text-sm text-center text-white tracking-[2.85px] max-md:mt-10">
            © 2025 Rishik P Shoots. All Rights Reserved.
        </div>
        
    </div>
    )
}