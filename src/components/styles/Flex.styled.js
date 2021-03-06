import styled from "styled-components"

 const  Flex = styled.div`
    display:flex;
    align-items:center;

    & > div,
    & > ul {
      flex: 1;
    }

    @media screen and (max-width:${({theme}) => theme.breakpoint.mobile}){
        flex-direction:column;
    }
`


export default Flex