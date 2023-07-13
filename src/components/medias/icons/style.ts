'use client'
import { styled } from "styled-components";

export type IconStyleProps = {
  height?:string;
  width?:string;
  color?:string;
}
export const StyledIcon = styled.svg<IconStyleProps>`
  ${({height})=> height && `height: ${height};`}
  ${({width})=> width && `width: ${width};`}
  ${({color})=> color && `color: ${color};`}
`