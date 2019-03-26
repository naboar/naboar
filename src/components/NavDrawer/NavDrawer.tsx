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
  /** Location when link is clicked */
  linkRoute: string
  /** Expanded width */
  expandTo: number
  /** isExpanded */
  isExpanded?: boolean
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
        to={this.props.expandTo}
        isExpanded={this.state.isExpanded}
      >
        <Wrapper css={this.props.css} className={'navDrawer'}>
          <NavDrawerHeader
            title={this.props.title}
            onIconClick={this.toggleExpand}
            isExpanded={this.state.isExpanded}
            expandTo={this.props.expandTo}
            linkRoute={this.props.linkRoute}
          />
          {React.Children.toArray(this.props.children).map(
            (child: React.ReactElement<INavDrawerHeaderProps>) =>
              React.cloneElement(child, {
                expandTo: this.props.expandTo,
                isExpanded: this.state.isExpanded,
                onIconClick: child.props.onIconClick,
              }),
          )}
        </Wrapper>
      </Expand>
    )
  }
}

const Wrapper = styled.div<IStyledComponentProps>`
  ${({ theme }) => `
    background-color: ${theme.palette.secondary.dark};
    color: ${theme.palette.common.white};
    height: 100%;
  `}
  ${({ css }) => css}
`
export default NavDrawer
