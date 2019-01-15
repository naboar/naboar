```js
initialState = {
  activeIndex: 1
};
<NavBar 
  onClick={() => alert('redirect')}
  title={'Dashboard'} >
  <NavBarLink
    title={'First Item'}
    isActive={state.activeIndex === 0}
    onClick={()=> setState({ activeIndex: 0 })}
  />
  <NavBarLink
    title={'Second Item'}
    iconName={'rocket'}
    isActive={state.activeIndex === 1}
    onClick={()=> setState({ activeIndex: 1 })}
  />
  <NavBarLink
    title={'Third Item'}
    iconName={'outlet'}
    isActive={state.activeIndex === 2}
    onClick={()=> setState({ activeIndex: 2 })}
  />
  </NavBar>
```