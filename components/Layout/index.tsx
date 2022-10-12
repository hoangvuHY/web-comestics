import Header from "../Commons/Header";
import Footer from "../Commons/Footer";
export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      <div className="body">
        {children}
        <Footer />
      </div>
    </>
  );
}
