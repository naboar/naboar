import React, { Component } from 'react'
import styled from 'styled-components'

/**
 * Table Component
 *
 * @since v1.0.0
 * @author [Anthony Freda](https://github.com/Afreda323)
 */
class Table extends Component<IProps> {
  static defaultProps: IProps = {
    data: [],
  }

  render() {
    return <Wrapper>Table</Wrapper>
  }
}

// Types -----
interface IProps {
  /** An array of objects all containing the same keys */
  data?: Array<{ [key: string]: any }> | []
}

// Styled Components -----
const Wrapper = styled.div``

export default Table
