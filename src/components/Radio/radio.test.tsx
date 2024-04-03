import { screen, waitFor } from '@testing-library/react';
import Radio from './radio.component';
import { renderWithTheme } from '@/utils/tests/helpers';
import theme from '@/styles/theme';
import userEvent from '@testing-library/user-event';

describe('Radio', () => {
  it('should render the with label', () => {
    const { container } = renderWithTheme(
      <Radio label="Radio" labelFor="anyValue" />
    );

    const label = screen.getByText(/radio/i);
    expect(label).toBeInTheDocument();
    expect(label).toHaveStyle({ color: theme.colors.white });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the with black label', () => {
    renderWithTheme(
      <Radio label="Radio" labelFor="anyValue" labelColor="black" />
    );

    const label = screen.getByText(/radio/i);
    expect(label).toHaveStyle({ color: theme.colors.black });
  });

  it('should render without label', () => {
    renderWithTheme(<Radio />);

    expect(screen.queryByLabelText(/radio/i)).not.toBeInTheDocument();
  });

  it('should dispatch onCheck when label status changes', async () => {
    const onCheck = jest.fn();

    renderWithTheme(
      <Radio
        label="Radio"
        labelFor="Radio"
        onCheck={onCheck}
        value="anyValue"
      />
    );

    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByLabelText('Radio'));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });
    expect(onCheck).toHaveBeenCalledWith('anyValue');
  });

  it('should be accessible with tab', () => {
    renderWithTheme(<Radio label="Radio" labelFor="Radio" />);

    const radio = screen.getByLabelText('Radio');
    expect(document.body).toHaveFocus();
    userEvent.tab();

    expect(radio).toHaveFocus();
  });
});
