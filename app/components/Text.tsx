import React from 'react'
import styled from 'styled-components';


const sizeMap = { sm: "16px", md: "18px", lg: "20px", xl: "32px", xxl: "48px" };
const fontMap = { arial: "Arial"};

interface TextProps {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  size?: keyof typeof sizeMap;
  font?: keyof typeof fontMap;
  weight?: number;
  color?: string;
  className?: string;
}

const Text: React.FC<TextProps> = ({ children,
  as = "span",
  size = "md",
  font = "arial",
  weight = 100,
  color,
  className="",
  ...rest }) => {
  return (
    <StyledText
      as={as}
      size={size}
      font={font}
      weight={weight}
      color={color}
      className={className}
      {...rest}
      >
        {children}
    </StyledText> );
}

export default Text;

interface StyledTextProps {
  size: keyof typeof sizeMap;
  font: keyof typeof fontMap;
  weight: number;
  color?: string;
}

const StyledText = styled.div<StyledTextProps>`
  font-size: ${(props) => sizeMap[props.size]};
  font-family: ${(props) => fontMap[props.font]};
  font-weight: ${(props) => props.weight};
  color: ${(props) => `var(--${props.color})`};
`;