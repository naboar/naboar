import React from 'react'
import styled from 'styled-components'
import { Expand } from '../..'
import { IStyledComponentProps } from '../../interfaces/IStyledComponentProps'
import NavDrawerHeader, { INavDrawerHeaderProps } from './NavDrawerHeader'

/**
 * NavDrawer State interface
 */
interface IState {
  /** isExpanded */
  isExpanded: boolean
}

/**
 * NavDrawer prop interface
 */
interface IProps extends IStyledComponentProps {
  /** NavDrawer Links */
  children: React.ReactNode
  /** Closed width */
  from: number
  /** Expanded width */
  to: number
  /** isExpanded */
  isExpanded?: boolean
  /** Event fired on click */
  onClick?: () => void
  /** Nav title */
  title: string
}

/**
 * NavDrawer Component
 * @since v1.0.0
 * @author Tracey King
 */
class NavDrawer extends React.Component<IProps, IState> {
  state = {
    isExpanded: this.props.isExpanded || false,
  }

  toggleExpand = () => this.setState({ isExpanded: !this.state.isExpanded })

  render() {
    return (
      <Expand
        from={this.props.from}
        to={this.props.to}
        isExpanded={this.state.isExpanded}
      >
        <Wrapper css={this.props.css}>
          <NavDrawerHeader
            title={this.props.title}
            onIconClick={this.toggleExpand}
            onClick={this.props.onClick}
            isExpanded={this.state.isExpanded}
            to={this.props.to}
          />
          {React.Children.toArray(this.props.children).map(
            (child: React.ReactElement<INavDrawerHeaderProps>) =>
              React.cloneElement(child, {
                isExpanded: this.state.isExpanded,
                onIconClick: child.props.onIconClick || child.props.onClick,
                to: this.props.to,
              }),
          )}
        </Wrapper>
      </Expand>
    )
  }
}

const Wrapper = styled.div<IStyledComponentProps>`
  ${({ css, theme }) => `
    background-color: ${theme.palette.secondary.dark};
    color: ${theme.palette.common.white};
    height: 100%;
    ${css ? css : ''}
  `}
`
export default NavDrawer
