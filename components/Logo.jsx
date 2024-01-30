import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

import logoLight from "../public/assets/Header/logo-light.png";
import logoDark from "../public/assets/Header/logo-dark.png";


const Logo = () => {
  const { theme } = useTheme();
  const logo = theme === "dark" ? logoDark : logoLight;
  return (
    <Link href="/">
      <Image
        src={logo}
        width={100}
        height={110}
        priority
        alt="logo"
        className="scale-150 "
      />
    </Link>
  );
};

export default Logo;
