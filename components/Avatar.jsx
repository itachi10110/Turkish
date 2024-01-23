import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none">
      <Image
        src="/avatar.png"
        alt="avatar"
      />
    </div>
  );
};

export default Avatar;
