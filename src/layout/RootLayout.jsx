import { Outlet, useLocation } from "react-router-dom";
import BottomNavigation from "../components/common/BottomNavigation";
import styled from "styled-components";

export default function RootLayout() {
  const location = useLocation();

  const hiddenNavigationPaths = [
    "/MissionPhotoUpload",
    "/BettingHistory",
  ];

  const shouldHideBottomNavigation =
    hiddenNavigationPaths.includes(location.pathname);

  return (
    <AppLayout>
      <main
        className={`app-content ${
          shouldHideBottomNavigation ? "full-page" : ""
        }`}
      >
        <Outlet />
      </main>

      {!shouldHideBottomNavigation && <BottomNavigation />}
    </AppLayout>
  );
}

const AppLayout = styled.div`
  width: 100%;
  max-width: 390px;
  height: 100dvh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  position: relative;
  overflow: hidden;

  background-color: #ffffff;

  .app-content {
    width: 100%;
    height: 100%;

    padding: 30px;
    padding-bottom: 120px;

    box-sizing: border-box;

    overflow-y: auto;
    overflow-x: hidden;

    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .app-content.full-page {
    padding-bottom: 30px;
  }
`;