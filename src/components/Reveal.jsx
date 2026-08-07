import { motion } from "framer-motion";

function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };

  const initial = directions[direction] || directions.up;

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...initial,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;