/* eslint-disable react/require-default-props */
import { StyledHeading } from './heading.styled';

type Props = {
  children: React.ReactNode;
  customColor?: string;
  size?: number;
  underline?: boolean;
  weight?: '500' | '600' | '700';
  align?: 'left' | 'center' | 'right';
  block?: boolean;
  marginBottom?: string;
  marginTop?: string;
};

const Heading = (props: Props) => (
  <StyledHeading
    size={props.size}
    customColor={props.customColor}
    underline={props.underline}
    weight={props.weight}
    block={props.block}
    align={props.align}
    marginBottom={props.marginBottom}
    marginTop={props.marginTop}
  >
    {props.children}
  </StyledHeading>
);

export default Heading;
