
const Categories = ({ containerStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      <div className="relative">
        <h2 className="text-lg uppercase font-semibold">Categories</h2>
        <span className="absolute left-0 top-full h-[5px] bg-primary w-[40px]"></span>
      </div>
      <ul className="mt-8 flex flex-col gap-y-3 font-normal">
        <li>Social</li>
        <li>Politics</li>
        <li>Sports</li>
        <li>Profession</li>
      </ul>
    </div>
  );
};

export default Categories;
