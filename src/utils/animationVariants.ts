export const containerVariants = {
  open: {
    transition: { staggerChildren: 0.05, delayChildren: 0.05 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const itemVariants = {
  open: (isActive: boolean) => ({
    x: isActive ? 12 : 0,
    opacity: 1,
  }),
  closed: {
    x: 50,
    opacity: 0,
  },
};

export const slideUp = {
  initial: { y: "100%" },
  open: (wordIndex: number) => ({
    y: 0,
    transition: { duration: 0.4, delay: wordIndex * 0.02 },
  }),
  closed: { y: "100%" },
};
