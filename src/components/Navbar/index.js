import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SidebarItem } from 'react-rainbow-components';
import { GiWaterPolo, GiChessKnight } from 'react-icons/gi';
import { DARK_WHITE, LIGHT_BLACK } from '../../colors';
import { NavbarContainer, Top, StyledLogo, StyledIcon, Bar } from './style';

const theme = {
    rainbow: {
        palette: {
            mainBackground: DARK_WHITE,
            brand: LIGHT_BLACK,
        },
    },
};

const Navbar = () => {
    const [selectedItem, setSelectedItem] = useState('soccer');
    const { push } = useHistory();

    function handleOnSelect(event, selectedItem) {
        setSelectedItem(selectedItem);
        push(`/sport/${selectedItem}`);
    }

    return (
        <NavbarContainer theme={theme}>
            <Top>
                <StyledLogo />
                <Bar selectedItem={selectedItem} onSelect={handleOnSelect}>
                    <SidebarItem
                        icon={<StyledIcon />}
                        name="soccer"
                        label="Soccer"
                    />
                    <SidebarItem
                        icon={<StyledIcon as={GiWaterPolo} />}
                        name="polo"
                        label="Water Polo"
                    />
                    <SidebarItem
                        icon={<StyledIcon as={GiChessKnight} />}
                        name="chess"
                        label="Chess"
                    />
                </Bar>
            </Top>
        </NavbarContainer>
    );
};

export default Navbar;
