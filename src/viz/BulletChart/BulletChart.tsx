import React, { Component, ReactNode } from 'react'
import styled, {
  css as cssOverride,
  FlattenSimpleInterpolation,
  keyframes,
} from 'styled-components'

/**
 * BulletChart Component
 *
 *
 * @since v1.0.0
 * @author [Anthony Freda](https://github.com/Afreda323)
 */
class BulletChart extends Component<IProps, IState> {
  static defaultProps: IProps = {
    amountColor: 'white',
    max: 100,
    scale: [],
    scaleTicks: 5,
    targetColor: 'white',
  }

  state = {
    isHovered: false,
    mouseX: 0,
  }

  calcWidth = (amount: number): number =>
    ((this.props.max - amount) / this.props.max) * 100

  renderScale = () => {
    const { scale, max } = this.props
    return scale.map((item, i) => {
      const widthsWithoutLast = scale
        .slice(0, scale.length - 1)
        .reduce((prev, curr) => prev + (max - curr.amount), 0)

      const calcedWidth =
        i === scale.length - 1
          ? max - scale[scale.length - 2].amount
          : this.calcWidth(item.amount)

      const itemStyle = cssOverride`
        width: ${calcedWidth}%;
        height: 100%;
        background-color: ${item.color};
        border: 1px solid ${item.borderColor || item.color};
        ${i !== 0 &&
          i !== scale.length - 1 &&
          `border-left: none; border-right: none;`}
        ${i === 0 && `border-right: none;`}
        ${i === scale.length - 1 && `border-left: none;`}
        display: inline-block;
        z-index: ${scale.length + 1 - i};
      `

      return <ScaleItem key={`scale_item_${i}`} i={i} css={itemStyle} />
    })
  }

  renderTicks = () => {
    const { scaleTicks, max, metric } = this.props
    const ticks = []
    const tickDistance = max / scaleTicks
    for (let i = 0; i < scaleTicks + 1; i++) {
      ticks.push(tickDistance * i)
    }

    return ticks.map(tick => (
      <Tick key={tick} title={`${tick} ${metric || '%'}`}>
        <span>{tick % 1 !== 0 ? tick.toFixed(2) : tick}</span>
      </Tick>
    ))
  }

  handleMouseIn = (clientX: number) => {
    const { left } = document
      .getElementById('chart-wrap')
      .getBoundingClientRect()

    this.setState({
      isHovered: true,
      mouseX: clientX - left,
    })
  }

  render() {
    const {
      amount,
      amountColor,
      max,
      scale,
      target,
      targetColor,
      label,
      metric,
    } = this.props
    return (
      <Wrapper>
        {label && (
          <Label>
            {label}
            {metric && <small>{metric}</small>}
          </Label>
        )}
        <ChartWrap
          id="chart-wrap"
          onMouseMove={({ clientX }) => this.handleMouseIn(clientX)}
          onMouseLeave={() => this.setState({ isHovered: false })}
        >
          <Chart>
            {this.renderScale()}
            <Target
              max={max}
              target={target}
              color={targetColor}
              zIndex={scale.length + 1}
            />
            <Bar
              amount={amount}
              max={max}
              color={amountColor}
              zIndex={scale.length + 2}
            />
          </Chart>
          <Ticks>{this.renderTicks()}</Ticks>
          <Tool
            style={{
              left: this.state.mouseX,
              opacity: this.state.isHovered ? 1 : 0,
              position: 'absolute',
            }}
          >
            <span>
              <b>Amount:</b> <span>{amount}</span>
            </span>
            {target && (
              <span>
                <b>Target:</b> {target}
              </span>
            )}
          </Tool>
        </ChartWrap>
      </Wrapper>
    )
  }
}

interface IProps {
  /** Array of objects that dictate the sections and colors of the chart */
  scale: Array<{ color: string; amount: number; borderColor?: string }>
  /** target number, rendered as vertical line in chart */
  target?: number
  /** color of target line */
  targetColor?: string
  /** value used to render center bar of chart */
  amount?: number
  /** color of amount bar */
  amountColor?: string
  /** maximum number for chart */
  max: number
  /** label for right side of chart */
  label?: ReactNode
  /** metric for chart(%, ft, yards) */
  metric?: string
  /** how many ticks should be rendered */
  scaleTicks?: number
}

interface IState {
  isHovered: boolean
  mouseX: number
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    display: block;

    > div:first-of-type {
      margin-bottom: 8px;
    }
  }
`

const Label = styled.div`
  min-width: 100px;
  max-width: 150px;
  padding: 10px 10px 0 0;

  color: rgba(255, 255, 255, 0.8);
  > small {
    display: block;
    opacity: 0.7;
    font-size: 80%;
    margin-top: 2px;
  }
`

const Tool = styled.div`
  top: -52px;
  z-index: 10;
  padding: 10px;
  background: #333;
  min-width: 100px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  box-shadow: 0 10px 16px rgba(0, 0, 0, 0.2);
  transition: left 0.1s, opacity 0.3s;

  :before {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 2px;
    border: 10px solid #333;
    border-right-color: transparent;
    border-bottom-color: transparent;
  }

  > span {
    display: block;
    margin-bottom: 3px;

    > b {
      font-weight: 600;
    }
  }
`

const ChartWrap = styled.div`
  flex: 1;
  position: relative;
`

const Chart = styled.div`
  position: relative;
  height: 40px;
  display: flex;
  align-items: center;
`
const Target = styled.div<{
  max: number
  target: number
  color: string
  zIndex: number
}>`
  position: absolute;
  height: 32px;
  width: 3px;
  top: 4px;
  left: ${({ max, target }) => (target / max) * 100}%;
  background-color: ${({ color }) => color};
  z-index: ${({ zIndex }) => zIndex};
`
const grow = keyframes`
  from {
    width: 0;
    opacity: 0;
  }
`

const Bar = styled.div<{
  max: number
  amount: number
  color: string
  zIndex: number
}>`
  animation: ${grow} 2s;
  position: absolute;
  height: 16px;
  left: 0;
  top: 12px;
  width: ${({ max, amount }) => (amount / max) * 100}%;
  opacity: 1;
  background-color: ${({ color }) => color};
  z-index: ${({ zIndex }) => zIndex};
`

const Ticks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Tick = styled.span`
  width: 0;
  color: rgba(255, 255, 255, 0.8);
  position: relative;
  padding-top: 14px;

  > span {
    width: 0;
  }

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 10px;
    background: white;
    width: 1px;
  }
`
const ScaleItem = styled.div<{ css?: FlattenSimpleInterpolation; i: number }>`
  ${({ css }) => css && css}
`

export default BulletChart
