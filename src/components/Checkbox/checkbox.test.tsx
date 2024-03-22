import { screen } from '@testing-library/react';
import Checkbox from './checkbox.component';
import { renderWithTheme } from '@/utils/tests/helpers';
import userEvent from '@testing-library/user-event';

describe('Checkbox', () => {
  it('should render the with label', () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument();
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check');
  });

  it('should render checkbox without label when is not passed', () => {
    renderWithTheme(<Checkbox label="checkbox label" />);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.queryByLabelText(/checkbox label/i)).not.toBeInTheDocument();
  });

  it('should render checkbox with black label', () => {
    renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" labelColor="black" />
    );

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: '#030517',
    });
  });

  it('should dispatch onCheck when label status chenges', () => {
    const onCheck = jest.fn();

    renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" onCheck={onCheck} />
    );

    expect(onCheck).not.toHaveBeenCalled();
    userEvent.click(screen.getByRole('checkbox'));
    expect(onCheck).toHaveBeenCalledTimes(1);
    expect(onCheck).toHaveBeenCalledWith(true);
  });

  it('should dispatch onCheck when label status isChecked', () => {
    const onCheck = jest.fn();

    renderWithTheme(
      <Checkbox
        label="checkbox label"
        labelFor="check"
        onCheck={onCheck}
        isChecked
      />
    );

    expect(onCheck).not.toHaveBeenCalled();
    userEvent.click(screen.getByRole('checkbox'));
    expect(onCheck).toHaveBeenCalledTimes(1);
    expect(onCheck).toHaveBeenCalledWith(false);
  });

  it('should be accessible with tab', () => {
    renderWithTheme(<Checkbox label="Checkbox" labelFor="checkbox" />);

    expect(document.body).toHaveFocus();

    userEvent.tab();

    expect(screen.getByLabelText(/checkbox/i)).toHaveFocus();
  });
});
