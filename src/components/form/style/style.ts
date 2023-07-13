'use client'

import { styled } from "styled-components";
import { FlexStyle } from "../../types/global";
import { fieldForm } from "../types/types";

export const StyledForm = styled.form<FlexStyle>`
  display: flex;
  ${({position})=> position && `position: ${position};`}
  ${({left})=> left && `left: ${left};`}
  ${({top})=> top && `top: ${top};`}
  ${({right})=> right && `right: ${right};`}
  ${({bottom})=> bottom && `bottom: ${bottom};`}
  ${({direction})=> direction && `flex-direction: ${direction};`}
  ${({wrap})=> wrap && `flex-wrap: ${wrap};`}
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

export const StyledFieldForm = styled.label<fieldForm>`
  display: flex;
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