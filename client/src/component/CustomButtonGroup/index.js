import React from 'react';
import PropTypes from 'prop-types';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { style } from './style';

function CustomButtonGroup(props) {
  const { buttons, activeText, orientation, variant, ariaLabel, fullWidth, className } = props;

  return (
    <ButtonGroup
      className={className}
      variant={variant}
      aria-label={ariaLabel}
      orientation={orientation}
      fullWidth={fullWidth}
    >
      {buttons.map((btn) => {
        const activeBtn = btn.label === activeText ? style.activeBtn : null;

        let btnProps = {
          style: { ...style.btnStyle, ...activeBtn },
        };

        if (btn.icon) {
          btnProps = {
            ...btnProps,
            startIcon: <Avatar src={btn.icon} />,
            style: { ...style.btnIconedStyle, ...activeBtn },
          };
        }

        return (
          <Button key={btn.label} {...btnProps}>
            {btn.label}
          </Button>
        );
      })}
    </ButtonGroup>
  );
}

CustomButtonGroup.propTypes = {
  buttons: PropTypes.instanceOf(Array),
  activeText: PropTypes.string.isRequired,
  variant: PropTypes.string,
  ariaLabel: PropTypes.string,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
};

CustomButtonGroup.defaultProps = {
  buttons: [],
  variant: 'text',
  ariaLabel: '',
  orientation: 'horizontal',
  fullWidth: false,
  className: '',
};

export default CustomButtonGroup;
