import React from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames/bind';
import style from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

const Button = ({
  to,
  href,
  primary = false,
  outline = false,
  small = false,
  large = false,
  text = false,
  className = false,
  disabled = false,
  rounded = false,
  children,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}) => {
  let Comp = 'button';

  const props = {
    onClick,
    ...passProps,
  };

  // remove event Listener when button disabled
  if (disabled) {
    delete props.onClick;
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  const classes = cx('wrapper', {
    [className]: className,
    primary,
    outline,
    small,
    large,
    text,
    disabled,
    rounded,
  });
  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Button;
