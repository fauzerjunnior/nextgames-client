import { screen, waitFor } from '@testing-library/react';
import TextFied from './text-fied.component';
import { renderWithTheme } from '@/utils/tests/helpers';
import userEvent from '@testing-library/user-event';

describe('TextFied', () => {
  it('should render the TextFied', () => {
    renderWithTheme(<TextFied label="Label" labelFor="Field" id="Field" />);

    expect(screen.getByLabelText('Label')).toBeInTheDocument();
  });

  it('should render without label', () => {
    renderWithTheme(<TextFied />);

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument();
  });

  it('should render with placeholder', () => {
    renderWithTheme(<TextFied placeholder="hey you" />);

    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument();
  });

  it('changes its value when typing', async () => {
    const onInput = jest.fn();
    renderWithTheme(
      <TextFied
        onInput={onInput}
        label="TextField"
        labelFor="TextField"
        id="TextField"
      />
    );

    const input = screen.getByRole('textbox');
    const text = 'This is my new text';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onInput).toHaveBeenCalledTimes(text.length);
    });

    expect(onInput).toHaveBeenCalledWith(text);
  });

  it('is accessible by tab', () => {
    renderWithTheme(
      <TextFied label="TextField" labelFor="TextField" id="TextField" />
    );

    const input = screen.getByLabelText('TextField');
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).toHaveFocus();
  });
});
