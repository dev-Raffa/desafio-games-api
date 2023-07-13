import * as layoutTypes from '@/types/layout';
import { FlexStyle, GridStyles } from '@/components/types/global';

export type variant =
  | 'header'
  | 'main'
  | 'aside'
  | 'footer'
  | 'article'
  | 'section'
  | 'address'
  | 'audio'
  | 'figure'
  | 'table'
  | 'video';

export interface baseElementFlex
  extends React.HTMLAttributes<HTMLElement>,
    FlexStyle {
  as: variant;
}

export interface baseElementGrid
  extends React.HTMLAttributes<HTMLElement>,
    GridStyles {
  as: variant;
}

export interface blockProps extends FlexStyle, GridStyles {
  display: layoutTypes.display;
}
