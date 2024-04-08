import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { GoalNav } from "../GoalNav/GoalNav"
import { WeightNav } from "../WeightNav/WeightNav";
import { IconClose, IconMenu, MobileMenu, ButtonClose, DivLogo, Backdrop, DivMenu, Box } from './MobileContainer.styled';
import { PageNav } from '../PageNav/PageNav';
import sprite from 'assets/images/sprite.svg';

export const MobileContainer = () => {
    const mobileVersion = useMediaQuery({ query: '(max-width:833px)' });

    const [openModal, setOpenModal] = useState(false);

    const isOpenModal = () => {
        setOpenModal(!openModal);
    };

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.code === 'Escape') {
                setOpenModal(false);
            }
        };

        if (openModal) {
            document.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden';
        } else document.body.style.overflow = 'unset';

        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [openModal, setOpenModal]);

    return (
        <>
            <Box>
                <DivLogo>
                    <IconMenu onClick={isOpenModal}>
                        <use href={`${sprite}#icon-menu`}></use>
                    </IconMenu>
                </DivLogo>
                <DivMenu>
                    <GoalNav setOpenModal={setOpenModal} />
                    <WeightNav setOpenModal={setOpenModal} />
                </DivMenu>
            </Box>
            {openModal ? (
                <Backdrop onClick={isOpenModal}>
                    <MobileMenu onClick={(e) => e.stopPropagation()}>
                        <ButtonClose
                            onClick={isOpenModal}>
                            <IconClose>
                                <use href={`${sprite}#icon-close-circle`}></use>
                            </IconClose>
                        </ButtonClose>
                        {mobileVersion ? (
                            <>
                                <PageNav setOpenModal={setOpenModal} />
                                <GoalNav setOpenModal={setOpenModal} />
                                <WeightNav setOpenModal={setOpenModal} />
                            </>
                        ) : (
                            <PageNav setOpenModal={setOpenModal} />
                        )}
                    </MobileMenu>
                </Backdrop>
            ) : undefined}
        </>
    );
};