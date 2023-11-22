import Lenis from "@studio-freight/lenis";
import { createContext } from "react";

const LenisContext = createContext<Lenis | null>(null);

export default LenisContext;
