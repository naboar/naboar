import React, { Component, ReactNode } from 'react'
import styled from 'styled-components'

/**
 * BulletChart Component
 *
 *
 * @since v1.0.0
 * @author [Anthony Freda](https://github.com/Afreda323)
 */
class BulletChart extends Component<IProps> {
  static defaultProps: IProps = {
    data: [],
    max: 100,
    min: 0,
  }

  render() {
    return <Wrapper>Hello</Wrapper>
  }
}

interface IProps {
  /**  */
  data: Array<{ color: string; amount: number; borderColor?: string }>
  /**  */
  min: number
  /**  */
  max: number
  /**  */
  label?: ReactNode
  /**  */
  metric?: string
}

const Wrapper = styled.div``

export default BulletChart
