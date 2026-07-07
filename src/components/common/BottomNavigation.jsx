import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";
import { MdHomeFilled } from "react-icons/md";
import { RiCoinsFill } from "react-icons/ri";
import { MdOutlineShoppingBag } from "react-icons/md";

export default function Footer(){
    const navigate = useNavigate();

    const menuItems = [
        { path: "/", label: "홈" , icon: MdHomeFilled, },
        { path: "/BettingMain", label: "베팅", icon: RiCoinsFill , },
        { path: "/Shop", label: "구매샵" , icon: MdOutlineShoppingBag },
    ];

    return (
        <FooterContainer>
        {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;

            return (
            <NavigationButton
                key={item.path}
                type="button"
                $isActive={isActive}
                onClick={() => navigate(item.path)}
            >            
                <Icon />
                <span>{item.label}</span>
            </NavigationButton>
            );
        })}
        </FooterContainer>
    );
}

const FooterContainer = styled.footer`
    position: fixed;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);

    width: calc(100% - 40px);
    max-width: 300px;
    height: 50px;
    padding: 5px;

    display: grid;
    grid-template-columns: repeat(3, 1fr);

    background-color: #ffffff;
    border: 2px solid #A5A5A5;
    border-radius: 999px;

    z-index: 100;
`;

const NavigationButton = styled.button`

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 999px;

    background-color: ${({ $isActive }) =>
        $isActive ? "#eee8e8" : "transparent"};

    color: ${({ $isActive }) =>
        $isActive ? "#111111" : "#aaaaaa"};

    cursor: pointer;
    svg {
        width: 20px;
        height: 20px;
    }

    span {
        font-size: 12px;
        font-weight: 700;
    }
`;