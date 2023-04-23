import Footer from "../components/Footer";
import Header from "../components/Header";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, x: "-100vw" },
  show: { opacity: 1, x: 0 },
};

const pageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <Header />
      {children}
      <Footer />
    </motion.div>
  );
};

export default pageLayout;
