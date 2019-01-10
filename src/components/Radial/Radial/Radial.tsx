import React, { Component, CSSProperties, ReactElement } from 'react'
import styled, { css } from 'styled-components'
import { IItemProps } from '../RadialMenuItem/RadialMenuItem'

/**
 * Radial Menu Component
 * 
 * Takes children of type ```<RadialMenuItem />```
 * 
 * @since v1.0.0
 * @author [Anthony Freda](https://github.com/Afreda323)
 */
class Radial extends Component<IRadialProps, IRadialState> {
  state: IRadialState = {
    active: this.props.defaultActive || false,
  }

  onButtonClick = () => {
    if (this.props.onClick) {
      this.props.onClick()
    }

    this.setState(
      ({ active }) => ({ active: !active }),
      () => {
        if (this.state.active) {
          if (this.props.onOpen) {
            this.props.onOpen()
          }
        } else {
          if (this.props.onClose) {
            this.props.onClose()
          }
        }
      },
    )
  }

  render() {
    const { children, coords } = this.props
    const { active } = this.state
    const divStyle: CSSProperties = coords
      ? {
          display: 'inline-block',
          position: 'absolute',
          zIndex: 3,
          ...coords,
        }
      : {
          display: 'inline-block',
          position: 'relative',
          zIndex: 3,
        }
    return (
      <div style={divStyle}>
        <RadialButton onClick={this.onButtonClick}>
          <Effect isActive={active} />
          <Burger>
            <BurgerOuter>
              <BurgerInner isActive={active} />
            </BurgerOuter>
          </Burger>
        </RadialButton>
        {React.Children.map(
          children,
          (child: ReactElement<IItemProps>, index) =>
            React.cloneElement(child, {
              active,
              index,
              total: children.length,
            }),
        )}
      </div>
    )
  }
}

interface IRadialProps {
  children: Array<ReactElement<IItemProps>>
  coords?: { left?: number; top?: number; bottom?: number; right?: number }
  defaultActive?: boolean
  onClick?: () => void
  onOpen?: () => void
  onClose?: () => void
}

interface IRadialState {
  active: boolean
}

const effectActiveStyle = css`
  opacity: 0.15 !important;
  transform: scale(2.5) !important;
`

const Effect = styled.div`
  transition: opacity 0.3s, transform 0.3s;
  height: 40px;
  width: 40px;
  pointer-events: none;
  background: #1de9b6;
  opacity: 0.5;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  border-radius: 100%;
  ${({ isActive }: { isActive: boolean }) =>
    isActive ? effectActiveStyle : null}
`

const RadialButton = styled.button`
  transition-propert: opacity, transform;
  transition-duration: 0.15s;
  height: 40px;
  width: 40px;
  position: relative;
  border-radius: 100%;
  cursor: pointer;
  border: none;
  background: #555;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  :focus {
    outline: none;
  }
  :active,
  :hover {
    & > div:first-of-type {
      opacity: 0.15;
      transform: scale(1.5);
    }
  }
`

const Burger = styled.div`
  display: inline-block;
  transition-property: opacity, filter;
  transition: duration: .15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
  padding-top: 3px;
  transform: scale(0.6);
`

const BurgerOuter = styled.div`
  width: 40px;
  height: 24px;
  display: inline-block;
  position: relative;
`

const innerStyle = css`
  width: 40px;
  height: 4px;
  background-color: #fff;
  border-radius: 4px;
  position: absolute;
`
const innerActiveStyle = css`
  transform: rotate(225deg);
  transition-delay: 0.12s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
`

const beforeActiveStyle = css`
  top: 0;
  opacity: 0;
  transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
`

const afterActiveStyle = css`
  bottom: 0;
  transform: rotate(-90deg);
  transition: bottom 0.1s ease-out,
    transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
`

const BurgerInner = styled.div`
  display: block;
  top: 50%;
  margin-top: -2px;
  transition-duration: 0.22s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  ${innerStyle};
  ${({ isActive }: { isActive: boolean }) =>
    isActive ? innerActiveStyle : null};

  :after,
  :before {
    ${innerStyle};
    content: '';
    display: block;
  }
  :before {
    top: -10px;
    transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
    ${({ isActive }: { isActive: boolean }) =>
      isActive ? beforeActiveStyle : null};
  }

  :after {
    bottom: -10px;
    transition: bottom 0.1s 0.25s ease-in, opacity 0.1s ease-in;
    ${({ isActive }: { isActive: boolean }) =>
      isActive ? afterActiveStyle : null};
  }
`

export default Radial
