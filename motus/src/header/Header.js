import React, { useState } from 'react';
import {
    HeaderNavLink,
    HeaderNavList,
    HeaderNavListItem,
    HeaderRow,
    HeaderWrapper,
} from "./headerStyles";

const navLinks = [
    { path: '/', label: 'О чем мы' },
    { path: '/podcasts', label: 'Подкасты' },
    { path: '/register', label: 'Регистрация' },
    { path: '/subscribe', label: 'Подписка' }
];

const Header = () => {
    const [activePath, setActivePath] = useState(navLinks[0].path);

    const handleNavClick = (path) => {
        setActivePath(path);
    };

    const isActive = (path) => {
        return activePath === path ? 'selected' : '';
    };

    return (
        <HeaderWrapper>
            <HeaderRow>
                <HeaderNavList>
                    {navLinks.map((link, index) => (
                        <HeaderNavListItem key={index}>
                            <HeaderNavLink
                                onClick={() => handleNavClick(link.path)}
                                className={isActive(link.path)}
                            >
                                {link.label}
                            </HeaderNavLink>
                        </HeaderNavListItem>
                    ))}
                </HeaderNavList>
            </HeaderRow>
        </HeaderWrapper>
    );
};

export default Header;
