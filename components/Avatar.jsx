import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none">
      <Image
        src="/avatar.png"
        alt="avatar"
        className="translate-z-0 w-full h-full"
        height="384"
        width="384"
      />
    </div>
  );
};

export default Avatar;
