import Icon from '@/assets/Icons/Icon';
import React from 'react';
import './index.css';

type IconName = 'user' | 'password';

interface Props {
  id?: string;
  name?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  iconName?: IconName;
  iconWidth?: number;
  iconHeight?: number;
  iconColor?: string;
}

function Input({
  id,
  name,
  placeholder,
  type,
  value,
  className,
  onChange,
  onBlur,
  onFocus,
  onKeyDown,
  onKeyUp,
  iconName,
  iconWidth = 20,
  iconHeight = 20,
  iconColor = '#000000',
}: Props) {
  return (
    <div className='input-container'>
      {iconName && (
        <div className='input-icon'>
          <Icon
            iconName={iconName}
            width={iconWidth}
            height={iconHeight}
            color={iconColor}
          />
        </div>
      )}
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
      />
    </div>
  );
}

export default Input;
