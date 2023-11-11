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
