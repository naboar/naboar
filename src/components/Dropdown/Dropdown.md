```js 
initialState = { itemStyle: [
    `background: darkgrey;
     color: white;
     &:hover {
         background: grey;
     }`
]};
<div>
    <Dropdown>
        <DropdownButton title={'Test'} onClick={console.log}/>
        <DropdownMenu>
            <DropdownItem css={state.itemStyle}>Hello</DropdownItem>
        </DropdownMenu>
    </Dropdown>

    <Dropdown>
        <DropdownNode css={['background: black; color: white; &:hover ']}>Example Node</DropdownNode>
        <DropdownMenu>
            <DropdownItem css={state.itemStyle}>Hello</DropdownItem>
        </DropdownMenu>
    </Dropdown>
</div>
```