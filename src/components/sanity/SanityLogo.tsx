import Image from "next/image";
import Favicon from "@/app/favicon.ico";

const StudioLogo = (props: any) => (
  <Image src={Favicon} alt="Sanity Logo" width={25} height={25} />
);

export default StudioLogo;
