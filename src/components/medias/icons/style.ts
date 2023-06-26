'use client'
import { styled } from "styled-components";

export type IconStyleProps = {
  height:string;
  width:string;
  color:string;
}
export const StyledIcon = styled.div<IconStyleProps>`
  ${({height})=> height && `height: ${height};`}
  ${({width})=> width && `width: ${width};`}
  ${({color})=> color && `color: ${color};`}

  svg{
    width: 100%;
    height: 100%;
  }

`