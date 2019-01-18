```js
initialState = {
  activeIndex: 1
};
<NavDrawer 
  from={45}
  onClick={() => alert('redirect')}
  to={300} 
  title={'Dashboard'} >
  <NavDrawerLink
    title={'First Item'}
    iconName={'person'}
    isActive={state.activeIndex === 0}
    onClick={()=> setState({ activeIndex: 0 })}
  />
  <NavDrawerDivider/>
  <NavDrawerLink
    title={'Second Item'}
    iconName={'rocket'}
    isActive={state.activeIndex === 1}
    onClick={()=> setState({ activeIndex: 1 })}
  />
  <NavDrawerDivider/>
  <NavDrawerLink
    title={'Third Item'}
    iconName={'outlet'}
    isActive={state.activeIndex === 2}
    onClick={()=> setState({ activeIndex: 2 })}
  />
  </NavDrawer>
```