import Footer from "./footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ComplexNavbar } from "./navbar";

export function Layout({ children }) {
    return (
        <>
            {/* <Header /> */}
            <ComplexNavbar></ComplexNavbar>
            <ToastContainer />
            <main>{children}</main>
            <Footer />
        </>
    );
}
