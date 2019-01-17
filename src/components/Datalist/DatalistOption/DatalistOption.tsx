import React from 'react'
import styled, { FlattenSimpleInterpolation } from 'styled-components'


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

  export interface IOptionProps extends React.HTMLAttributes<HTMLOptionElement> {
   /** specifies option value */
   value: string | number | string[]
   /** specify if option should be disabled */
   disabled: boolean
   /** specify a shorter label for option */
   label: string
 }

 export const StyledOption = styled.option``

 export default DatalistOption