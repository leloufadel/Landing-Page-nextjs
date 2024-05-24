import Image from "next/image";

const Logo = () => {
  return (
    <div className="">
      <Image
        alt="Logo"
        src="/images/logo.svg"
        quality={100}
        width={50}
        height={50}
      />
    </div>
  );
};

export default Logo;
