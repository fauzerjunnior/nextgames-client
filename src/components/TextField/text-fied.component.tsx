import { InputHTMLAttributes, useState } from 'react';
import * as S from './text-fied.styles';

export type TextFieldProps = {
  onInput?: (value: string) => void;
  label?: string;
  labelFor?: string;
  initialValue?: string;
  icon?: React.ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
  label,
  labelFor = '',
  initialValue = '',
  icon,
  onInput,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);

    !!onInput && onInput(newValue);
  };

  return (
    <S.Wrapper>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && <S.Icon>{icon}</S.Icon>}
        <S.Input
          type="text"
          id={labelFor}
          value={value}
          onChange={onChange}
          {...props}
        />
      </S.InputWrapper>
    </S.Wrapper>
  );
};

export default TextField;
