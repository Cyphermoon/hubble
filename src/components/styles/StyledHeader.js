import styled from "styled-components"

export const StyledHeader = styled.header`
    background-color:${({theme}) => theme.colors.header};
    padding:50px 0;
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;

    @media all and (max-width:${({theme}) => theme.breakpoint.mobile}){
        flex-direction:column;
    }
`

export const Logo = styled.img`
@media screen and (max-width:${({theme}) => theme.breakpoint.mobile}){
    margin-bottom:2.5em
}
`

export const Image = styled.img`
    width:500px;
    object-fit:cover;


    @media screen and (max-width:${({theme}) => theme.breakpoint.mobile}){
        margin:40px 0 30px
    }
`