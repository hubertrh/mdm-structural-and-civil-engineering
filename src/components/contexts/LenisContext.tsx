import Lenis from "@studio-freight/lenis";
import { createContext } from "react";

const LenisContext = createContext<Lenis | null>(null);

export default LenisContext;

// FIXME: Use LenisContext to create custom Link component instead of Next.js Link due to the issue of not being able to scroll to the top of the page when navigating to a new page
