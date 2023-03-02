import { Helmet } from "react-helmet";
import Navbar from "src/components/Navbar";

function Layout({ title, content, children }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={content} />
      </Helmet>
      <Navbar />
      <main className="main">{children}</main>
    </>
  );
}

export default Layout;
