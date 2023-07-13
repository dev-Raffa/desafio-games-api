import { getAnimation } from '@/components/functions';
import { FlexStyle } from '@/components/types/global';
import { styled, css } from 'styled-components';

export const StyledButtonWrap = styled.button<FlexStyle>`
  cursor: pointer;
  display: flex;
  ${({ position }) => position && `position: ${position};`}
  ${({ left }) => left && `left: ${left};`}
  ${({ top }) => top && `top: ${top};`}
  ${({ right }) => right && `right: ${right};`}
  ${({ bottom }) => bottom && `bottom: ${bottom};`}
  ${({ direction }) => direction && `flex-direction: ${direction};`}
  ${({ wrap }) => wrap && `flex-wrap: ${wrap};`}
  ${({ alignx }) => alignx && `justify-content: ${alignx};`}
  ${({ aligny }) => aligny && `align-items: ${aligny};`}
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ padding }) => padding && `padding: ${padding};`}
  ${({ gap }) => gap && `gap: ${gap};`}
  ${({ height }) => height && `height: ${height};`}
  ${({ maxheight }) => maxheight && `max-height: ${maxheight};`}
  ${({ minheight }) => minheight && `min-height: ${minheight};`}
  ${({ width }) => width && `width: ${width};`}
  ${({ maxwidth }) => maxwidth && `max-width: ${maxwidth};`}
  ${({ minwidth }) => minwidth && `min-width: ${minwidth};`}
  ${({ borderradius }) => borderradius && `border-radius: ${borderradius};`}
  ${({ border }) => border && `border: ${border};`}
  ${({ boxshadow }) => boxshadow && `box-shadow:${boxshadow};`}
  ${({ opacity }) => opacity && `opacity: ${opacity};`}
  ${({ transition }) => transition && `transition: ${transition};`}
  ${({ bgcolor, theme }) =>
    bgcolor != undefined && theme.colors[bgcolor]
      ? `background-color:${theme.colors[bgcolor]};`
      : `background-color:${bgcolor};`}
  ${({ fontcolor, theme }) =>
    fontcolor != undefined && theme.typography.colors[fontcolor]
      ? `color:${theme.typography.colors[fontcolor]};`
      : `color:${fontcolor};`}
  ${({ overflow }) => overflow && `overflow: ${overflow};`}
  ${({ zindex }) => zindex && `z-index: ${zindex};`}
  ${({ before }) => before && `&&::before { ${before} }`}
  ${({ hover }) =>
    hover &&
    css`
      &&:hover {
        ${hover.comands}
      }
    `}
  ${({ animation }) =>
    animation &&
    css`
      animation: ${getAnimation(animation)} ${animation.delay}
        ${animation.direction} ${animation.duration} ${animation.repeat};
    `}
`;
