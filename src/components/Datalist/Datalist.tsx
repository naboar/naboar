/* tslint:disable:interface-name */

import React from 'react'
import styled from 'styled-components'
import Input from '../Input'
import DatalistOption from './DatalistOption/DatalistOption'

/**
 * Datalist Component
 * @since v1.0.0
 * @author [Jonathan Currie](https://github.com/jbcurrie)
 */

const Datalist: Datalist = (props: IDatalistProps) => {
  return (
    <Wrapper className={'dataList'}>
      <StyledDatalist {...props}>
        {props.children}
      </StyledDatalist>
    </Wrapper>
  )
}

interface Datalist {
  (props: IDatalistProps): JSX.Element
  Option: typeof DatalistOption
  Input: typeof Input
}

interface IDatalistProps extends React.HTMLAttributes<HTMLDataListElement> {
  /** onChange - same event handler as input */
  onChange?: (e: React.ChangeEvent<HTMLDataListElement>) => void
  /** children - Option Array */
  children: React.ReactElement<HTMLOptionElement> | Array<React.ReactElement<HTMLOptionElement>>
}

interface IWrapperProps {
  /** child components - Input and Datalist with Options */
  children: React.ReactChild
}

const StyledDatalist = styled.datalist<IDatalistProps>``

const Wrapper = styled.div<IWrapperProps>`
  display: flex;
  width: 100%;
`

/** Option - datalist option */
Datalist.Option = DatalistOption
/** Input - datalist input */
Datalist.Input = Input

export default Datalist

