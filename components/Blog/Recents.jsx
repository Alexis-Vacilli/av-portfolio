
const Recents = ({ containerStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      <div className="relative">
        <h2 className="text-lg uppercase font-semibold">Recents Articles</h2>
        <span className="absolute left-0 top-full h-[5px] bg-primary w-[40px]"></span>
      </div>
      <ul className='mt-8 flex flex-col gap-y-3 font-light'>
        <li>The Main Thing For The Designer</li>
        <li>Follow Your Own Design Process</li>
        <li>Three Ways To Level Up Your Photography</li>
      </ul>
    </div>
  );
};

export default Recents;
