import Link from 'next/link';
import TiltContainer from '../TiltContainer';

import Image from "next/image";
const Logo: React.FC<{ className?:string, ref?: any }> = ({ className="", ref }): JSX.Element => {

    return (
        <TiltContainer className= {`relative ${className}`} ref={ref}>
          <Link href="/">
            <Image src="/images/common/logo/logo.png" alt="THUNDAL" width={180} height={450} className=""/>
          </Link>
        </TiltContainer>
    );
};

export default Logo;
