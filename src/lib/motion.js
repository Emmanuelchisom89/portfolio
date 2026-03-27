export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const slideFadeIn = (direction = "up", delay = 0) => {
  const x = direction === "left" ? -50 : direction === "right" ? 50 : 0;
  const y = direction === "up" ? 50 : direction === "down" ? -50 : 0;

  return {
    hidden: { opacity: 0, x, y },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.9,
        delay,
        ease: [0.42, 0, 0.58, 1], // smoother ease (cubic-bezier)
      },
    },
  };
};

export const cardPop = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
