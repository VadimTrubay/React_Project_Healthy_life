import { useMediaQuery } from 'react-responsive';
import { GoalNav } from "../GoalNav/GoalNav";
import { UserInfoNav } from "../UserInfoNav/UserInfoNav";
import { WeightNav } from "../WeightNav/WeightNav";
import { DesktopContainer, Box, BoxMenu } from "./ControlPanel.styled";
import { MobileContainer } from '../MobileContainer/MobileContainer';
import { PageNav } from '../PageNav/PageNav';

export const ControlPanel = () => {
    const tabletVersion = useMediaQuery({ query: '(max-width:1439px)' });
    
    return (
        <Box>
            {tabletVersion ? (
                <MobileContainer />
            ) : (
                <DesktopContainer>
                    <PageNav />
                    <BoxMenu>
                        <GoalNav />
                        <WeightNav />
                    </BoxMenu>
                </DesktopContainer>)}
            <UserInfoNav />
        </Box>
    );
};