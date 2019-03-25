import React from 'react'
import styled from 'styled-components'
import { Expand } from '../..'
import detectElementOverflow from '../../helperFns/detectElementOverflow'
import { IStyledComponentProps } from '../../interfaces/IStyledComponentProps'
import { IconMD } from '../Icon'
import { INavBarLinkProps, NavBarHeader, NavBarLink } from './index'

/**
 * NavBar State interface
 */
interface IState {
  /** isMenuOpen */
  isMenuOpen: boolean
  /** isMenuVisible */
  isMenuVisible: boolean
  /** Total Navlink width */
  navLinksWidth: number
  windowWidth: number
}

/**
 * NavBar prop interface
 */
interface IProps extends IStyledComponentProps {
  /** NavBar Links */
  children: React.ReactNode
  /** isMenuOpen */
  isMenuOpen?: boolean
  /** Event fired on click */
  onClick?: () => void
  /** Nav title */
  title: string
}

/**
 * NavBar Component
 * @since v1.0.0
 * @author Tracey King
 */
class NavBar extends React.Component<IProps, IState> {
  state = {
    isMenuOpen: this.props.isMenuOpen || false,
    isMenuVisible: false,
    navLinksWidth: 0,
    windowWidth: window.innerWidth,
  }
  private wrapper: any
  private navLinksWrapper: any

  toggleMenu = () => this.setState({ isMenuOpen: !this.state.isMenuOpen })
  toggleMenuVisibility = () => {
    const windowWidth = window.innerWidth
    if (
      this.navLinksWrapper &&
      detectElementOverflow(this.navLinksWrapper, this.wrapper).overflowRight
    ) {
      return this.setState({
        isMenuOpen: false,
        isMenuVisible: true,
        navLinksWidth: this.navLinksWrapper.offsetWidth,
        windowWidth,
      })
    } else if (
      !this.navLinksWrapper &&
      this.wrapper.offsetWidth - 133 > this.state.navLinksWidth &&
      this.state.windowWidth < windowWidth
    ) {
      return this.setState({
        isMenuOpen: false,
        isMenuVisible: false,
        windowWidth,
      })
    }

    return this.setState({ windowWidth })
  }
  calculateExpandHeight = () => {
    return React.Children.toArray(this.props.children).length * 40
  }

  componentDidMount() {
    this.toggleMenuVisibility()
    window.addEventListener('resize', this.toggleMenuVisibility)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.toggleMenuVisibility)
  }

  cloneWithProps = () => {
    return React.Children.toArray(this.props.children).map(
      (child: React.ReactElement<INavBarLinkProps>) =>
        React.cloneElement(child, {
          onClick: () => {
            child.props.onClick()
            this.toggleMenu()
          },
        }),
    )
  }

  render() {
    return (
      <Wrapper
        css={this.props.css}
        ref={ref => (this.wrapper = ref)}
        isMenuVisible={this.state.isMenuVisible}
        className={'navBar'}
      >
        <NavBarHeaderWrapper className={'navBarHeader'}>
          <NavBarHeader title={this.props.title} onClick={this.props.onClick} />
        </NavBarHeaderWrapper>
        {!this.state.isMenuVisible ? (
          <NavLinksWrapper ref={(ref: any) => (this.navLinksWrapper = ref)}>
            {this.cloneWithProps()}
          </NavLinksWrapper>
        ) : (
          <MenuWrapper>
            <NavBarLink onClick={this.toggleMenu}>
              <IconMD.White name={'menu'} />
            </NavBarLink>
            <Expand
              from={0}
              to={this.calculateExpandHeight()}
              vertical={true}
              isExpanded={this.state.isMenuOpen}
              css={menuStyles}
            >
              {this.cloneWithProps()}
            </Expand>
          </MenuWrapper>
        )}
      </Wrapper>
    )
  }
}

const Wrapper = styled.div<IStyledProps>`
  ${({ isMenuVisible, theme }) => `
    background-color: ${theme.palette.secondary.dark};
    color: ${theme.palette.common.white};
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    overflow: ${isMenuVisible ? 'visible' : 'hidden'};
  `}
  ${({ css }) => css}
`

const NavLinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`
const NavBarHeaderWrapper = styled.div``

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  > div:last-child {
    background: ${({ theme }) => theme.palette.secondary.dark};
  }
`

const menuStyles = [`
  position: absolute;
  top: 40px;
  right: 0;
  z-index: 99999;
`]

interface IStyledProps extends IStyledComponentProps {
  isMenuVisible?: boolean
}

export default NavBar
