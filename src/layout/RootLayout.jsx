import {Outlet} from "react-router-dom"
import BottomNavigation from "../components/common/BottomNavigation"
import styled from "styled-components"

export default function RootLayout(){
    return(
        <AppLayout>
            <main className="app-content">
                <Outlet />
            </main>
            <BottomNavigation />
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
