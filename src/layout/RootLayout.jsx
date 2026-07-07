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
    height: 100dvh;
    margin: 0 auto;
    padding : 30px;

    display: flex;
    flex-direction: column;

    position: relative;
    background-color: #ffffff;

    .app-content {
        width: 100%;
        height: 100%;

        padding-bottom: 120px;

        box-sizing: border-box;

        overflow-y: auto;
        overflow-x: hidden;

        /* 스크롤은 되지만 스크롤바는 숨김 */
        scrollbar-width: none;

        &::-webkit-scrollbar {
        display: none;
        }
    }
`;
