import React, { Component, ReactNode, SyntheticEvent  } from 'react'
import styled, { css } from 'styled-components'

/**
 * Modal Component
 * Fades in from bottom
 * @since v1.0.0
 * @author [Anthony Freda](https://github.com/Afreda323)
 */
class Modal extends Component<IProps> {
  private wrapperRef: React.ReactNode

  /**
   * Check if click is inside <Inner />
   * if not call outer click prop
   * @param e Event Object
   */
  onOuterClick = (e: SyntheticEvent) => {
    const wrapper = this.wrapperRef as HTMLDivElement
    const target = e.target as HTMLInputElement
    if (wrapper && !wrapper.contains(target)) {
      this.props.onOuterClick()
    }
  }

  setInnerRef = (node: React.ReactNode) => {
    this.wrapperRef = node
  }

  render() {
    return (
      <Outer {...this.props} onClick={this.onOuterClick}>
        <Inner ref={this.setInnerRef}>{this.props.children}</Inner>
      </Outer>
    )
  }
}

interface IProps {
  /** One or more elements */
  children: ReactNode
  /** Whether or not the component is at full width/height */
  shouldShow?: boolean
  /** What happens when you click the outside */
  onOuterClick: () => void
  /** Custom CSS */
  css?: string[]
}

const hiddenStyle = css`
  pointer-events: none;
  opacity: 0;
  z-index: 100;
  > div {
    opacity: 0;
    transform: translateY(100px);
  }
` as string[]

const shownStyle = css`
  z-index: 10;
  opacity: 1;
  > div {
    opacity: 1;
    transform: translateY(0);
  }
` as string[]

const Outer = styled.div`
  height: 100vh;
  width: 100vw;
  transition: all 0.3s ease-out;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  ${(props: IProps) => (props.shouldShow ? shownStyle : hiddenStyle)}
  ${(props: IProps) => props.css && props.css}
`

const Inner = styled.div`
  transition: all 0.4s ease-out;
`

export default Modal
