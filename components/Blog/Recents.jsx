import Link from "next/link";

const Recents = ({ containerStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      <div className="relative">
        <h2 className="text-lg uppercase font-semibold">Recents Articles</h2>
        <span className="absolute left-0 top-full h-[5px] bg-primary w-[40px]"></span>
      </div>
      <ul className='mt-8 flex flex-col gap-y-3'>
        <li><Link href="/" className='link'>The Main Thing For The Designer</Link></li>
        <li><Link href='/'className='link' >Follow Your Own Design Process</Link></li>
        <li><Link href='/' className='link'>Three Ways To Level Up Your Photography</Link></li>
      </ul>
    </div>
  );
};

export default Recents;
