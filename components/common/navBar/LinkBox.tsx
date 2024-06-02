"use client";
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import navConstants from "@/constants/navConstants";
interface LinkProps {
    name: string;
    link: string;
}
const LinkItem: React.FC<LinkProps> = ({ name, link }) => {
    const pathname = usePathname();
    console.log(pathname, link, "pathss");
    return (
        <Link
            className={`link text-[16px] hover:text-[#AAD0FF] ${pathname === `${link}` ? 'active text-[#AAD0F0]' : ''} cursor-pointer`}
            href={`${link}`}
        >
            {name}
        </Link>
    );
};

interface LinkBoxProps {
    className?: string;
}

const LinkBox: React.FC<LinkBoxProps> = ({ className }) => {
    return (
        <nav className={`flex justify-between items-center w-[250px] ${className}`}>

            {navConstants.map((el: LinkProps, index: number) => (
                <LinkItem key={index} name={el.name} link={el.link} />
            ))}
        </nav>
    );
};

export default LinkBox;
