import Socials from "./ui/Socials";

const Footer = () => {
  return (
    <footer className="bg-accent/30 border-muted-foreground/20 dark:border-border/70 py-4">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between">
          {/* <Socials
            containerStyles="flex gap-x-2 mx-auto xl:mx-0 justify-center"
            iconsStyles="text-foreground text-[20px] hover:text-primary transition-all border border-input p-1 rounded-full"
          /> */}
          <div className="text-muted-foreground font-medium text-center">
            Copyright &copy;{" "}
            <span className="text-primary"> Alexis Vacilli.</span>All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
