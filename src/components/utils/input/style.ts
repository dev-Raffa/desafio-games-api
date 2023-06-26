'use client'

import { styled } from "styled-components"

export type inputStyle = {
    width: string;
    minwidth:string;
    height: string;
    border: string;
    borderradius: string;
    fontsize: string;
    padding: string;
}

export const InputStyled = styled.input<inputStyle>`
${({width})=>width && `width: ${width};`}
${({minwidth})=>minwidth && `min-width: ${minwidth};`}
${({height})=>height && `height: ${height};`}
${({border})=>border && `border: ${border};`}
${({borderradius})=>borderradius && `border-radius: ${borderradius};`}
${({fontsize})=>fontsize && `font-size: ${fontsize};`}
${({padding})=>padding && `padding: ${padding};`}
`