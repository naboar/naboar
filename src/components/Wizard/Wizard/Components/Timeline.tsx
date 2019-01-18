import React, { Fragment } from 'react'
import styled from 'styled-components'

/**
 * Wizard Timeline Component
 * @since v1.0.0
 * @author [Anthony Freda](https://github.com/Afreda323)
 */

const Timeline = ({ isNextActive, items, selectedIndex, onClick }: IProps) => {
  return (
    <Wrapper>
      {items.map((item, i) => (
        <Item
          isFirst={i === 0}
          isLast={i === items.length - 1}
          isActive={i <= selectedIndex}
          onClick={() => i <= selectedIndex || isNextActive ? onClick(i) : null}
          canClick={i <= selectedIndex || isNextActive}
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
  /** Is current pane complete? */
  isNextActive: boolean
  /** Array of titles */
  items: string[]
  /** Called when a title is clicked */
  onClick: (i: number) => void
}

const Wrapper = styled.div`
  ${({ theme }) => `
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    padding:
      ${theme.spacing.base * 3}px
      ${theme.spacing.base * 3}px
      ${theme.spacing.base * 5}px;
    background-color: ${theme.palette.secondary.main};
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    position: relative;
    z-index: 2;

    @media (max-width: 700px){
      padding: ${theme.spacing.base * 3}px;
    }
  `}
`

const Item = styled.div<{
  isFirst: boolean
  isLast: boolean
  isActive: boolean
  canClick: boolean
}>`
  flex: 1;
  padding: ${({ theme }) => `0 ${theme.spacing.base}px`};
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
      padding-right: ${({ theme }) => theme.spacing.base}px;
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
        ${({ isActive, theme }) => isActive && `color: ${theme.palette.primary.main};`}

        > text {
          fill: ${({ theme }) => theme.palette.grey[400]};
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
      color: ${({ theme }) => theme.palette.grey[400]};
      margin-top: 8px;
      font-family: Open-Sans, sans-serif;
      text-align: center;

      @media (max-width: 700px){
        display: none;
      }
    }
  }

  > div {
    top: 12px;
    left: calc(-50% + 20px);
    right: calc(50% + 20px);
    position: absolute;
    flex: 1 1 auto;
    border-top: 1px solid ${({ theme }) => theme.palette.grey[500]};

    > span {
      transition: width .2s;
      display: block;
      width: 0%;
      ${({ isActive, theme }) => isActive && `
        margin-top: -1px;
        width: 100%;
        border-top: 1px solid ${theme.palette.primary.main};
      `}
    }
  }
`

export default Timeline
