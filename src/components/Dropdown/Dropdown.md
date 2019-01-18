```js 
<div>
    <Dropdown>
        <DropdownButton text={'Test'} name={'button'}/>
        <DropdownMenu>
            <DropdownItem>Hello</DropdownItem>
        </DropdownMenu>
    </Dropdown>

    <Dropdown>
        <DropdownNode>Example Node</DropdownNode>
        <DropdownMenu>
            <DropdownItem>Hello</DropdownItem>
            <DropdownItem>bye</DropdownItem>
            <DropdownItem onClick={console.log} isDisabled={true}>I am disabled</DropdownItem>
            <DropdownItem>Something</DropdownItem>
        </DropdownMenu>
    </Dropdown>
</div>
```