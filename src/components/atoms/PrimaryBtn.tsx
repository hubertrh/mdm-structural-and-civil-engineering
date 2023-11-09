import Image from "next/image";
import Link from "next/link";

interface PrimaryBtnProps {
  iconURL: string;
  iconAlt: string;
  text: string;
  pageURL: string;
}

export default function PrimaryBtn({
  iconURL,
  iconAlt,
  text,
  pageURL,
}: PrimaryBtnProps) {
  return (
    <Link
      href={pageURL}
      className="flex w-max items-center justify-center gap-5 rounded-md bg-green px-8 py-4 text-white transition-all duration-200 hover:bg-green-dark hover:shadow"
    >
      <Image src={iconURL} alt={iconAlt} width={20} height={20} />
      <p>{text}</p>
    </Link>
  );
}
