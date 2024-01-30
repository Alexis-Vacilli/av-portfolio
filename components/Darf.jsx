<div className="flex justify-between gap-x-8">
  {/* text */}
  <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-5 text-center xl:text-left ">
    <h1 className="h1 bg-hero bg-right">Hello, my name is Alexis Vacilli</h1>
    <div className="text-sm font-bold mt-4 tracking-[4px] uppercase">
      I am{" "}
      <span className="secondary-font text-primary font-bold">
        Software Developer
      </span>
    </div>
    <p className="mt-4 subtitle max-w-[490px] mx-auto xl:mx-0">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident odio
      facere vitae similique? Quisquam sapiente quia voluptate blanditiis
      officia beatae!
    </p>
    {/* Socials */}
    <Socials
      containerStyles="flex gap-x-4 mx-auto xl:mx-0"
      iconsStyles="text-foreground text-[25px] hover:text-primary transition-all"
    />
  </div>
  {/* Image */}
  <div className="hidden xl:flex relative">
    {/* Child */}
    <div className="w-[400px] h-[400px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] mx-auto relative overflow-hidden">
      {/* Circular border */}
      <div className="w-full h-full relative rounded-full border-[15px] border-border">
        {/* Background Image */}
        <div className="absolute inset-0 bg-profile bg-cover rounded-full"></div>
      </div>
    </div>
  </div>
</div>;
{
  /* icon */
}
<div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12">
  {/* <RiArrowDownSLine className="text-3xl text-primary" /> */}
</div>;
