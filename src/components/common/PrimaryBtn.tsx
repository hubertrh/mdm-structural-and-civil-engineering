import Image from "next/image";
import Link from "next/link";

type PrimaryBtnProps = {
  iconURL: string;
  iconAlt: string;
  text: string;
  pageURL: string;
};

export default function PrimaryBtn({
  iconURL,
  iconAlt,
  text,
  pageURL,
}: PrimaryBtnProps) {
  return (
    <Link
      href={pageURL}
      className="flex w-max items-center justify-center gap-5 rounded-md bg-green px-6 py-4 text-xl text-white transition-all duration-200 hover:bg-green-dark hover:shadow sm:px-8 sm:text-lg"
    >
      <Image
        className="h-[16px] w-[16px] sm:h-[20px] sm:w-[20px]"
        src={iconURL}
        alt={iconAlt}
        width={20}
        height={20}
      />
      <p>{text}</p>
    </Link>
  );
}
