import { ButtonProps } from 'antd';

import { ButtonAntd } from './button.styles.ts';

interface ButtonCurrentProps extends ButtonProps {
  margin?: string;
}

const Button = ({ margin, ...props }: ButtonCurrentProps) => {
  return <ButtonAntd style={{ margin }} {...props} />;
};

export default Button;
