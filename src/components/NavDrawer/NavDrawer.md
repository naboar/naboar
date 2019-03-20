```js
initialState = {
  activeIndex: 1
};
<NavDrawer 
  css={['height: 500px;']}
  from={45}
  onClick={() => console.log("clicked")}
  to={300} 
  title={'Dashboard'} >
  <NavDrawerLink
    title={'First Item'}
    iconName={'person'}
    to={'/link1'}
  />
  <NavDrawerLink
    title={'Second Item'}
    iconName={'rocket'}
    to={'/link2'}
  />
  <NavDrawerLink
    title={'Third Item'}
    iconName={'outlet'}
    to={'/link3'}
  />
  </NavDrawer>
```
