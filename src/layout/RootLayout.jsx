import {Outlet} from "react-router-dom"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import styled from "styled-components"

export default function RootLayout(){
    return(
        <AppLayout>
            <Header />
            <main className="app-content">
                <Outlet />
            </main>
            <Footer />
        </AppLayout>
    );
}
const AppLayout = styled.div`
    width: 100%;
    max-width: 390px;
    min-height: 100dvh;
    margin: 0 auto;
    padding : 30px;

    display: flex;
    flex-direction: column;

    position: relative;
    background-color: #ffffff;
`;
