import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center">
      <div>
        <Link href={'/'} className="flex cursor-pointer">
          <Image src={'/page-logo.webp'} alt="Page Logo" width={150} height={20} />
        </Link>
      </div>
      <nav className="flex gap-10">
        <Link href={'/items'}>아이템</Link>
        <Link href={'/champions'}>챔피언</Link>
      </nav>
    </header>
  );
};

export default Header;
