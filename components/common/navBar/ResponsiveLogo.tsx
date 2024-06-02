import Logo from "./Logo";
import Image from "next/image";
import "./style.css";
import { useRef } from "react";
import Link from "next/link";

const ResponsiveLogo = ({nLogoBoxVisible, logoClass}:{nLogoBoxVisible:boolean, logoClass?:string}) => {
    const nLogoRef: any = useRef(null);
    const secLogoRef: any = useRef(null);
    const handleMouseEnter = () => {
        if (secLogoRef.current) {
            secLogoRef.current.classList.add("non-n-logo-hover");
        }

        if (nLogoRef.current) {
            nLogoRef.current.classList.add("n-logo-hover");
        }

        console.log(secLogoRef.current, nLogoRef.current);
    };

    const handleMouseLeave = () => {
        if (secLogoRef.current) {
            secLogoRef.current.classList.remove("non-n-logo-hover");
        }

        if (nLogoRef.current) {
            nLogoRef.current.classList.remove("n-logo-hover");
        }
    };
    return (
        <Link href="/" className={`absolute nth-logo w-[180px] ${nLogoBoxVisible ? 'n-logobox-visible' : 'n-logobox-hidden'}`}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Image className="absolute -top-[25px] n-logo" onMouseEnter={handleMouseEnter} src="/images/common/logo/nLogo.png" width={35} height={25} alt="logo" ref={nLogoRef}
                            />
                            <div className="absolute -top-[15px] non-n-logo" ref={secLogoRef}>
                                <Logo className={`${logoClass}`} />
                            </div>
                        </Link>
    )
}

export default ResponsiveLogo;