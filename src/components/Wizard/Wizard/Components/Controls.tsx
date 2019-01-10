import React from 'react'
import styled from 'styled-components'
/**
 * Controls Component
 * @since v1.0.0
 * @author [Anthony Freda](https://github.com/Afreda323)
 */
const Controls = () => {
  return (
    <Wrapper>
      <div />
      <div>
        <button>Previous</button>
        <button>Next</button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default Controls
