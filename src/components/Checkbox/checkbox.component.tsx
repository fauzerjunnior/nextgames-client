import * as S from './checkbox.styles';

const Checkbox = () => (
  <S.Wrapper>
    <input id="action" type="checkbox" />
    <label htmlFor="action">Action</label>
  </S.Wrapper>
);

export default Checkbox;