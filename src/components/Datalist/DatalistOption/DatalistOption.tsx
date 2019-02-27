import React from 'react'
import styled, { FlattenSimpleInterpolation } from 'styled-components'
import { IStyledComponentProps } from '../../..'


/**
 * Option Component
 * @since v1.0.0 
 * @author [Jonathan Currie](https://github.com/jbcurrie)
 */


 const DatalistOption = (props: IOptionProps) => {
   return (
     <StyledOption {...props}/>
   )
 }

  export interface IOptionProps extends React.HTMLAttributes<HTMLOptionElement>, IStyledComponentProps {
   /** specifies option value */
   value: string | number | string[]
   /** specify if option should be disabled */
   disabled?: boolean
   /** specify a shorter label for option */
   label?: string
 }

 const StyledOption = styled.option``

 export default DatalistOption