import React from 'react'
import { StyledCard } from './styles/Card.styled'

const Card = ({id, title, body, image}) => {
  return (
    <StyledCard reversed={id % 2 === 0}>
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
        <div>
            <img src={`/images/${image}`} alt={`${title} sbg`} />
        </div>
    </StyledCard>
  )
}

export default Card     