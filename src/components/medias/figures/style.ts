import { styled } from "styled-components";
import { imgFigureProps } from "./types";

export const Img = styled.img<imgFigureProps>`
position: absolute;
height: 100%;
width: 100%;
z-index: 1;
${({fit}) => fit && `object-fit: ${fit}`};
`

export const Caption = styled.figcaption`
position: absolute;
width: 100%;
bottom: 0;
z-index: 2;
backdrop-filter: blur(1px) brightness(0.5);
`