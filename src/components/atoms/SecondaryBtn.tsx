import Image from "next/image";
import Link from "next/link";

type SecondaryBtnProps = {
  text: string;
  pageURL?: string;
  position: "inside" | "outside";
};

export default function SecondaryBtn({
  text,
  pageURL,
  position,
}: SecondaryBtnProps) {
  const buttonClassList = pageURL
    ? "flex w-max items-center justify-center gap-2 opacity-100 transition-all duration-300 group-hover:opacity-100"
    : "absolute right-0 flex w-max items-center justify-center gap-2 opacity-100 transition-all duration-300 group-hover:opacity-100";

  const ButtonContent = () => {
    return (
      <button
        className={`${
          position === "inside"
            ? "bottom-0 px-6 py-4"
            : "top-full px-2 py-6 sm:py-3"
        } ${buttonClassList}
      }`}
      >
        <p className="text-lg text-blue-dark sm:text-base">{text}</p>
        <Image
          className="h-[16px] w-[16px]"
          src="/icons/arrow-right.svg"
          alt="Arrow right"
          width={16}
          height={16}
        />
      </button>
    );
  };

  return pageURL ? (
    <Link
      href={pageURL}
      className={`${
        position === "inside"
          ? "absolute bottom-0 right-0"
          : "absolute right-0 top-full"
      }
  }`}
    >
      <ButtonContent />
    </Link>
  ) : (
    <ButtonContent />
  );
}
