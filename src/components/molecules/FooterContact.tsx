import Image from "next/image";
import Link from "next/link";

export default function FooterContact() {
  return (
    <div className="flex flex-col gap-3">
      <p className="mb-1 font-medium">CONTACT US</p>
      <div className="flex flex-col leading-loose">
        <a
          className="underline underline-offset-4 transition-all duration-300 hover:text-green-dark hover:underline-offset-8"
          href="mailto:info@mdmengineers.com"
        >
          info@mdmengineers.com
        </a>
        <a
          className="underline underline-offset-4 transition-all duration-300 hover:text-green-dark hover:underline-offset-8"
          href="tel:+4407817085585"
        >
          +44 07817 085585
        </a>
      </div>
      <div className="flex gap-2">
        <div className="group flex flex-col">
          <Link
            className="decoration-transparent transition-all duration-300 group-hover:text-green-dark group-hover:underline group-hover:decoration-green-dark group-hover:underline-offset-4"
            href={"https://maps.app.goo.gl/znVy7jwCRkzEbVVo9"}
          >
            MDM&nbsp;Structural&nbsp;and&nbsp;Civil&nbsp;Engineering&nbsp;Ltd
          </Link>
          <Link
            className="decoration-transparent transition-all duration-300 group-hover:text-green-dark group-hover:underline group-hover:decoration-green-dark group-hover:underline-offset-4"
            href={"https://maps.app.goo.gl/znVy7jwCRkzEbVVo9"}
          >
            4&nbsp;Quilter&nbsp;Street,&nbsp;London,&nbsp;SE18&nbsp;1JG
          </Link>
        </div>
        <Image
          className="mt-1 h-[16px] w-[16px] hue-rotate-60 saturate-[10]"
          src="/icons/link-new-card.png"
          // alt="New card link icon"
          alt="TEMPORARY ICON"
          width={16}
          height={16}
        />
      </div>
    </div>
  );
}
