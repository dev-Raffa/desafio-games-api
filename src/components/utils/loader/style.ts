'use client'
import { styled, keyframes } from "styled-components"

const rotate = keyframes`
    from{
      transform: rotate(0deg)
    }
    to{
      transform: rotate(360deg);
    }
`

export const LoaderStyle = styled.div`
  display: flex;
  height: 7rem;
  width: 7rem;
  background-color: ${({theme})=> theme.colors.primary};
  align-items: center;
  justify-content: center;
  animation: ${rotate} ease-in 0.6s infinite;

  svg{
    height: 100%;
    width: 100%;
  }
`