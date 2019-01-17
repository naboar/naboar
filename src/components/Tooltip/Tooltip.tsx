import React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import { IStyledComponentProps } from '../../interfaces/'

const TipWrapper = styled.div<{ position: string }>`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: ${({ position }) =>
    position === 'left'
    ? 'flex-start'
    : position === 'right'
    ? 'flex-end'
    : 'center'
  };
  align-items: ${({ position }) =>
    position === 'top'
    ? 'flex-start'
    : position === 'bottom'
    ? 'flex-end'
    : 'center'
  };
`

const Tip = styled.div<IStyledTooltipProps>`
  transition: all 0.3s;

  visibility: hidden;
  position: absolute;
  pointer-events: none;
  transform: ${({ position }) =>
    position === 'right'
    ? 'translateX(105%)'
    : position === 'left'
    ? 'translateX(-105%)'
    : position === 'top'
    ? 'translateY(-110%)'
    : 'translateY(110%)'
  };

  padding: 8px 8px;
  color: white;
  background-color: rgba(0,0,0,.75);
  border-radius: 6px;
  text-align: center;
  box-shadow: ${({ theme }) => 'none' || theme.shadows.one};
  opacity: 0;
  word-break: break-word;
  max-width: 300px;
  z-index: 9999;


  &:after {
    content: '';
    position: absolute;
    //When left is chosen
    right: ${({ position }) => position === 'left' && '-8px'};
    transform: rotate(${({ position }) => position === 'left' && '90deg'});
    //When right is chosen
    left: ${({ position }) => position === 'right' && '-10px'};
    transform: rotate(${({ position }) => position === 'right' && '-90deg'});
    top: ${({ position }) => position === 'right' && '35%'};
    //When top is chosen
    top: ${({ position }) => position === 'top' && '100%'};
    //When bottom is chosen
    bottom: ${({ position }) => position === 'bottom' && '100%'};
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    ${({ position }) => (position === 'left' || position === 'right') &&
      `top: 0;
      bottom: 0;
      margin: auto;
      height: 1px;`
    };
    ${({ position }) =>
      position === 'top' &&
      'border-color: rgba(0,0,0,.75) transparent transparent transparent;'}
    ${({ position }) =>
      position === 'bottom' &&
      'border-color: transparent transparent rgba(0,0,0,.75) transparent;'}
    ${({ position }) =>
      position === 'right' &&
      'border-color: transparent transparent rgba(0,0,0,.75) transparent;'}
    ${({ position }) =>
      position === 'left' &&
      'border-color: transparent transparent rgba(0,0,0,.75) transparent;'}
  }
  ${({ css }) => css}
`

const Title = styled.span`
  font-family: Lato-Regular;
  display: block;
  margin-bottom: 8px;
`

const Text = styled.span`
  font-family: Lato-Light;
  display: block;
`

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  &:hover ${Title && Tip} {
    pointer-events: all;
    opacity: 1;
    visibility: visible;
  }
`

/**
 * Tooltip Component
 * @since v1.0.0
 * @author Tracey King
 */
const Tooltip = (props: IStyledTooltipProps) => (
      <Wrapper
        onClick={props.onClick}
      >
        <TipWrapper position={props.position}>
          <Tip
            className="Tip"
            position={props.position}
            css={props.css}
          >
            <div>
              {props.title && <Title>{props.title}</Title>}
              <Text>{props.text}</Text>
            </div>
          </Tip>
        </TipWrapper>
        {props.children}
      </Wrapper>
)

interface IStyledTooltipProps
  extends React.HTMLAttributes<HTMLDivElement>,
    IStyledComponentProps {
  text?: string
  position: 'top' | 'bottom' | 'left' | 'right'
  children?: React.ReactElement<Element> | string
  /** Fired onChange event */
  onChange?: (e?: React.ChangeEvent<HTMLDivElement>) => void
}

export default Tooltip
