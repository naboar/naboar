import React from 'react'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { ITheme } from '../../theme'
import { IconMD } from '../Icon'

/**
 * ErrorModal Component
 * @since v1.0.0
 * @author [Daniel Serrano](https://github.com/danielserrano00)
 */

const ErrorModal = (props: IErrorModalProps) => {
  return (
    <StyledModal>
      <Heading>
        <IconMD name={'alert'} size={72} color={'white'} />
      </Heading>
      <Body>
        <Title>{props.title}</Title>
        <Content>{props.message}</Content>
      </Body>
      <Action onClick={props.onClick}>Close</Action>
    </StyledModal>
  )
}

/**
 * ErrorModal prop interface
 */
interface IErrorModalProps {
  /** Title of ErrorModal */
  title: string
  /** Message of ErrorModal */
  message: string
  /** On Click for ErrorModal button */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void
}

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0;
  width: 500px;
  border-radius: 4px;
  height: 300px;
  background-color: white;
  font-family: Open-Sans, sans-serif;
  font-size: 16px;
  border: none;
`
const Heading = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px 4px 0 0;
  background-color: rgb(242, 91, 91);
  padding: 16px;
  margin: 0;
`
const Body = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 16px;
`
const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 16px;
`
const Content = styled.p`
  padding: 0;
  font-weight: normal;
`
const Action = styled.button`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0 0 4px 4px;
  background-color: rgb(242, 91, 91);
  padding: 16px;
  font-size: 18px;
  color: white;
  &:hover {
    cursor: pointer;
  }
`
interface IProps {
  css?: FlattenSimpleInterpolation
  theme: ITheme
  disabled?: boolean
}

export default ErrorModal
