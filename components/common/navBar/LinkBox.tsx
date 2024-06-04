"use client";
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import navConstants from "@/constants/navConstants";
import { xBetween } from '@/utils/styles';
interface LinkProps {
    name: string;
    link: string;
}
const LinkItem: React.FC<LinkProps> = ({ name, link }) => {
    const pathname = usePathname();
    return (
        <Link
            className={`link text-punchText hover:text-riverSide ${pathname === `${link}` ? 'active text-darkCyan' : ''} cursor-pointer`}
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
        <nav className={`${xBetween} w-[250px] ${className}`}>

            {navConstants.map((el: LinkProps, index: number) => (
                <LinkItem key={index} name={el.name} link={el.link} />
            ))}
        </nav>
    );
};

export default LinkBox;
