'use client'

import { styled } from "styled-components"
import { styledInput } from "../types";

export const InputStyled = styled.input<styledInput>`
outline: none;
  ${({alignx})=> alignx && `justify-content: ${alignx};`}
  ${({aligny})=> aligny && `align-items: ${aligny};`}
  ${({margin})=> margin && `margin: ${margin};`}
  ${({padding})=> padding && `padding: ${padding};`}
  ${({gap})=> gap && `gap: ${gap};`}
  ${({height})=> height && `height: ${height};`}
  ${({maxheight})=> maxheight && `max-height: ${maxheight};`}
  ${({minheight})=> minheight && `min-height: ${minheight};`}
  ${({width})=> width && `width: ${width};`}
  ${({maxwidth})=> maxwidth && `max-width: ${maxwidth};`}
  ${({minwidth})=> minwidth && `min-width: ${minwidth};`}
  ${({borderradius})=> borderradius && `border-radius: ${borderradius};`}
  ${({border})=> border && `border: ${border};`}
  ${({boxshadow})=>boxshadow && `box-shadow:${boxshadow};`}
  ${({fontsize})=>fontsize && `font-size:${fontsize};`}
  ${({ bgcolor, theme }) =>
    bgcolor != undefined
      && theme.colors[bgcolor]
        ? `background-color:${theme.colors[bgcolor]};`
        : `background-color:${bgcolor};`
  }
  ${({ fontcolor, theme }) =>
    fontcolor != undefined
      && theme.typography.colors[fontcolor]
        ? `color:${theme.typography.colors[fontcolor]};`
        : `color:${fontcolor};`
  }
  ${({overflow}) => overflow && `overflow: ${overflow};`}
  ${({zindex})=> zindex && `z-index: ${zindex};`}
`