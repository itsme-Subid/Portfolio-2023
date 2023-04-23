import Footer from "../components/Footer";
import Header from "../components/Header";

const pageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default pageLayout;
