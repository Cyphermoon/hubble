import React from 'react'
import SocialIcon from './SocialIcon'
import { Container } from './styles/Container.style'
import Flex from './styles/Flex.styled'
import { StyledFooter } from './styles/Footer.styled'

const Footer = () => {
  return (
    <StyledFooter>
        <Container> 
            <img src="/images/logo_white.svg" alt="footer_logo" />

            <Flex>
                <ul>
                    <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </li>
                    <li>+1-543-123-4567</li>
                    <li>example@huddle.com</li>
                </ul>
                <ul>
                    <li>About Us</li>
                    <li>What We Do</li>
                    <li>FAQ</li>
                </ul>

                <ul>
                    <li>Career</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
            </Flex>
            <SocialIcon />
            <p>&copy; Huddle All right reserved</p>
        </Container>
    </StyledFooter>
  )
}

export default Footer