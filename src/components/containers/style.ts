'use client'

import { styled } from "styled-components";
import { blockProps } from "./types";

export const BlockStyle = styled('div')<blockProps>`
  ${({position})=> position && `position: ${position};`}
  ${({left})=> left && `left: ${left};`}
  ${({top})=> top && `top: ${top};`}
  ${({right})=> right && `right: ${right};`}
  ${({bottom})=> bottom && `bottom: ${bottom};`}
  ${({display})=> display && `display: ${display};`}
  ${({columns})=> columns && `columns: ${columns};`}
  ${({templatecolumns})=> templatecolumns && `grid-template-columns: ${templatecolumns};`}
  ${({rows})=> rows && `rows: ${rows};`}
  ${({templaterows})=> templaterows && `grid-template-rows: ${templaterows};`}
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
  ${({opacity})=> opacity && `opacity: ${opacity};`}
  ${({transition})=> transition && `transition: ${transition};`}
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

  ${({before})=> before && `&&::before { ${before} }`}

  ::-webkit-scrollbar {
    width: 0;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.secundary};
  }
  ::-webkit-scrollbar-thumb {
    width:5px;
    background-color: #ffffff4a;
    border-radius: 20px;
    border: 5px solid ${({ theme }) => theme.colors.primary};
  }
`