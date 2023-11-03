import Image from "next/image";
import Link from "next/link";

interface CTAButtonProps {
  iconURL: string;
  iconAlt: string;
  text: string;
  pageURL: string;
}

export default function CTAButton({
  iconURL,
  iconAlt,
  text,
  pageURL,
}: CTAButtonProps) {
  return (
    <Link
      href={pageURL}
      className="flex w-fit items-center justify-center gap-5 rounded-md bg-green px-8 py-4 text-white transition-all duration-200 hover:bg-green-dark hover:shadow"
    >
      <Image src={iconURL} alt={iconAlt} width={16} height={16} />
      <p>{text}</p>
    </Link>
  );
}
