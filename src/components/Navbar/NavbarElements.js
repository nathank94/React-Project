import styled from 'styled-components'

export const Nav = styled.nav`
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: center;
    font-weight: 700;
`;

export const NavLink = styled(Link)`
    color: #fff;
    font-size: 2rem;
    display: flex;
    align-itenms: center;
    text-decoration: none;
    cursor: pointer;
    
    @media screen