import React from 'react';
import styled from "styled-components";

export const RadioGroup = ({name, selectedValue, onClickRadioButton, children, ...rest}: any) => {
  return (
    <div role="radiogroup" {...rest}>
      {React.Children.map(children, element =>
        // @ts-ignore
        React.cloneElement(element, {
          // @ts-ignore
          ...element.props,
          // @ts-ignore
          checked: selectedValue === element.props.labelText,
          // @ts-ignore
          onChange: () => onClickRadioButton(element.props.labelText),
          name
        })
      )}
    </div>
  );
}

export const Radio = ({onChange, value, labelText, checked, name}: any) => {
  return (
    <Root>
      <label>
        {labelText}
        <Input
          type="radio"
          onChange={onChange}
          name={name}
          value={value}
          checked={checked}
          aria-checked={checked}
        />
        <Fill/>
        {/* <div style={{ marginLeft: '25px' }}>{labelText}</div> */}
      </label>
    </Root>
  )
}

const Root = styled.div<any>`
  margin: 5px;
  cursor: pointer;
  width: ${props => (props.size ? props.size : 20)}px;
  height: ${props => (props.size ? props.size : 20)}px;
  position: relative;
  label {
    margin-left: 25px;
  }
  &::before {
    content: "";
    border-radius: 100%;
    border: 1px solid ${props => (props.borderColor ? props.borderColor : "#DDD")};
    background: ${props => props.backgroundColor ? props.backgroundColor : "#FAFAFA"};
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    box-sizing: border-box;
    pointer-events: none;
    z-index: 0;
  }
`;

const Fill = styled.div<any>`
  background: ${props => (props.fillColor ? props.fillColor : "#A475E4")};
  width: 0;
  height: 0;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.2s ease-in, height 0.2s ease-in;
  pointer-events: none;
  z-index: 1;

  &::before {
    content: "";
    opacity: 0;
    width: calc(20px - 4px);
    position: absolute;
    height: calc(20px - 4px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid
      ${props => (props.borderActive ? props.borderActive : "#A475E4")};
    border-radius: 100%;
  }
`;

const Input = styled.input`
  opacity: 0;
  z-index: 2;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:checked {
    & ~ ${Fill} {
      width: calc(100% - 8px);
      height: calc(100% - 8px);
      transition: width 0.2s ease-out, height 0.2s ease-out;

      &::before {
        opacity: 1;
        transition: opacity 1s ease;
      }
    }
  }
`;