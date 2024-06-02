import Link from 'next/link';
import TiltContainer from '../TiltContainer';

import Image from "next/image";
const Logo: React.FC<{ className?:string }> = ({ className="" }): JSX.Element => {

    return (
        <TiltContainer className= {`relative ${className}`}>
          <Link href="/">
            <Image src="/images/common/logo/logo.png" alt="THUNDAL" width={180} height={450} className=""/>
          </Link>
        </TiltContainer>
    );
};

export default Logo;
