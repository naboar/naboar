import React, { Fragment } from 'react'
import styled from 'styled-components'

/**
 * Wizard Timeline Component
 * @since v1.0.0
 * @author [Anthony Freda](https://github.com/Afreda323)
 */

const Timeline = ({ allowedIndex, items, selectedIndex, onClick }: IProps) => {
  return (
    <Wrapper>
      {items.map((item, i) => (
        <Item
          isFirst={i === 0}
          isLast={i === items.length - 1}
          isActive={i <= selectedIndex}
          onClick={() => i <= selectedIndex || allowedIndex > i ? onClick(i) : null}
          canClick={i <= selectedIndex || allowedIndex > i}
        >
          {i !== 0 && (
            <div>
              <span />
            </div>
          )}
          <span>
            <span>
              <svg focusable={'false'} viewBox={'0 0 24 24'}>
                {i < selectedIndex ? (
                  <path
                    d={
                      'M 12 0 a 12 12 0 1 0 0 24 a 12 12 0 0 0 0 -24 Z m -2 17 l -5 -5 l 1.4 -1.4 l 3.6 3.6 l 7.6 -7.6 L 19 8 l -9 9 Z'
                    }
                  />
                ) : (
                  <Fragment>
                    <circle cx={'12'} cy={'12'} r={'12'} />
                    <text x={'12'} y={'16'} textAnchor={'middle'}>
                      {i + 1}
                    </text>
                  </Fragment>
                )}
              </svg>
            </span>
            <p>{item}</p>
          </span>
        </Item>
      ))}
    </Wrapper>
  )
}

interface IProps {
  /** What is the slected index of the wiz */
  selectedIndex: number
  /** How many of the indexes does the user have access to */
  allowedIndex: number
  /** Array of titles */
  items: string[]
  /** Called when a title is clicked */
  onClick: (i: number) => void
}

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  padding: 24px;
  background-color: #272727;
`

const Item = styled.div<{
  isFirst: boolean
  isLast: boolean
  isActive: boolean
  canClick: boolean
}>`
  flex: 1;
  padding: 0 8px;
  position: relative;

  ${({ isFirst }) => isFirst && `padding-left: 0;`}
  ${({ isLast }) => isLast && `padding-right: 0;`}

  > span {
    ${({ canClick }) => canClick && `cursor: pointer;`}
    display: flex;
    align-items: center;
    flex-direction: column;
    > span {
      display: flex;
      flex-shrink: 0;
      padding-right: 8px;
      ${({ isFirst, isLast }) => !isFirst && !isLast && `padding-right: 0;`}
      > svg {
        fill: currentColor;
        color: rgba(0, 0, 0, 0.4);
        display: block;
        width: 24px;
        height: 24px;
        font-size: 24px;
        transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        user-select: none;
        flex-shrink: 0;
        ${({ isActive }) => isActive && `color: #1de9b6;`}

        > text {
          fill: #555;
          font-weight: bold;
          font-size: 0.85rem;
          font-family: Open-Sans, sans-serif;
        }
      }
    }

    > p {
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.5;
      color: rgba(255, 255, 255, 0.54);
      margin-top: 16px;
      font-family: Open-Sans, sans-serif;
      text-align: center;
    }
  }

  > div {
    top: 12px;
    left: calc(-50% + 20px);
    right: calc(50% + 20px);
    position: absolute;
    flex: 1 1 auto;
    border-top: 1px solid #666;

    > span {
      transition: width .2s;
      display: block;
      width: 0%;
      ${({ isActive }) => isActive && `width: 100%; border-top: 1px solid #1de9b6;`}
    }
  }
`

export default Timeline
