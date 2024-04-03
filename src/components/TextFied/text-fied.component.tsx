import { InputHTMLAttributes, useState } from 'react';
import * as S from './text-fied.styles';

export type TextFiedProps = {
  onInput?: (value: string) => void;
  label?: string;
  labelFor?: string;
  initialValue?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const TextFied = ({
  label,
  labelFor = '',
  initialValue = '',
  onInput,
  ...props
}: TextFiedProps) => {
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

export default TextFied;
