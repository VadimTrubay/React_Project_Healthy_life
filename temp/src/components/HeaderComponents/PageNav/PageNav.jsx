import { useMediaQuery } from 'react-responsive';
import { NavBox, StyledLink } from "./PageNav.styled";

export const PageNav = ({ setOpenModal }) => {
    const mobileTabletVersion = useMediaQuery({ query: '(max-width:1439px)' });

    const handleClick = () => {
        if (mobileTabletVersion) {
            setOpenModal(false)
        }
    }
    
    return (
        <NavBox onClick={handleClick}>
            <StyledLink to="/main">
                Home
            </StyledLink>
            <StyledLink to="/dashboard">
                Dashboard
            </StyledLink>
            <StyledLink to="/diary">
                Diary
            </StyledLink>
            <StyledLink to="/recommended-food">
                Recommended
            </StyledLink>
        </NavBox>
    );
};