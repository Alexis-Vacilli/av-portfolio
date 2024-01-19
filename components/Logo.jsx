import Image from "next/image";
import Link from "next/link";

import logo from "../public/assets/logo2.png";

const Logo = () => {
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
