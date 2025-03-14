import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-3">
        <div>
          <Link href={'/'} className="flex justify-center cursor-pointer w-auto min-w-[400px] border-b-2">
            <Image src={'/page-logo.webp'} alt="Page Logo" width={150} height={20} />
          </Link>
        </div>
        <nav className="flex gap-10 text-xl font-bold">
          <Link href={'/items'}>아이템</Link>
          <Link href={'/champions'}>챔피언</Link>
          <Link href={'/rotation'}>로테이션</Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
