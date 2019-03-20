import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { css } from 'styled-components'
import {
  Button,
  Datalist,
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
  DropdownNode,
  IconIOS,
  IconLogo,
  IconMD,
  Input,
  NavBar,
  NavBarLink,
  NavDrawer,
  NavDrawerDivider,
  NavDrawerLink,
  Select,
  Table,
  Td,
  Textarea,
  Th,
  Tooltip,
} from '../../src'

const fakeData = {
  isChecked: false,
  1: 'test',
  2: 'test',
  3: 'double test',
  4: 'test',
  5: 'test',
  6: 'test',
  7: 'test',
}
class App extends Component {
  state = {
    activeIndex: 0,
    columns: [
      {
        heading: 'headerTest',
        key: 'isChecked',
      },
      {
        isSortable: true,
        key: '1',
        renderCell: (data, index, row) => {
          return <Td>{row[0]['3']}</Td>
        },
        renderHeading: () => <Th heading={'Header Test'} />,
      },
      { key: '2', heading: 'headerTest' },
      { key: '3', heading: 'headerTest' },
      { key: '4', heading: 'headerTest' },
      { key: '5', heading: 'headerTest' },
      { key: '6', heading: 'headerTest' },
      { key: '7', heading: 'headerTest' },
    ],
    data: [fakeData, fakeData, fakeData, fakeData],
    datalistValue: '',
    notifs: [],
    selectValue: undefined,
    text: 'Clear Me',
  }

  clearText = () => this.setState({ text: '' })
  updateText = text => this.setState({ text })
  updateActiveIndex = activeIndex => this.setState({ activeIndex })
  updateDatalistValue = value => this.setState({ datalistValue: value })

  render() {
    const example = ['one', 'two', 'three']
    return (
      <BrowserRouter>
        <div>
          <NavBar onClick={() => alert('redirect')} title={'Dashboard'}>
            <NavBarLink
              title={'First Item'}
              isActive={this.state.activeIndex === 0}
              onClick={() => this.updateActiveIndex(0)}
            />
            <NavBarLink
              title={'Second Item'}
              isActive={this.state.activeIndex === 1}
              onClick={() => this.updateActiveIndex(1)}
            />
            <NavBarLink
              title={'Third Item'}
              isActive={this.state.activeIndex === 2}
              onClick={() => this.updateActiveIndex(2)}
            />
          </NavBar>
          <Button name="button" onClick={alert}>
            Click Me
          </Button>
          <IconIOS name="open" size={35} />
          <IconLogo name="github" color="blue" size={35} />
          <IconMD name="close" color="red" size={35} />
          <Input placeholder={'sample placeholder'} css={inputStyles} name="test" type="text" />
          <Dropdown name="dropdown">
            <DropdownNode>This is the Dropdown</DropdownNode>
            <DropdownButton
              name="example"
              text={'Testing to make sure this works'}
              onClick={() => alert('DropdownButton')}
            />
            <DropdownMenu>
              <DropdownItem>Item One</DropdownItem>
              <DropdownItem onClick={() => alert('Item Two')}>
                Item Two
              </DropdownItem>
              <DropdownItem css={dropdownItemCss}>Item Three</DropdownItem>
              <DropdownItem>Item Four</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Input css={inputStyles} name="test" type="number" min={34} max={50} />
          <Input
            css={inputStyles}
            name="clearTest"
            value={this.state.text}
            canClear={!!this.state.text}
            onClear={this.clearText}
            errorMessage={!this.state.text ? 'Please enter some text' : ''}
            label={'Will error if left blank'}
            onChange={e => this.updateText(e.target.value)}
          />
          <Input
            disabled={true}
            css={inputStyles}
            name="disabledTest"
            value={"Can't touch this"}
          />
          <NavDrawer from={45} expandTo={350} title={'Application'} linkRoute={'/link1'}>
            <NavDrawerLink
              expandTo={350}
              title={'First Item'}
              iconName={'trending-up'}
              linkRoute={'/link1'}
            />
            <NavDrawerLink
              expandTo={350}
              title={'Second Item'}
              iconName={'trending-up'}
              linkRoute={'/link2'}
            />
            <NavDrawerDivider css={dividerStyles} />
            <NavDrawerLink
              expandTo={350}
              title={'Group 2 - First Item'}
              iconName={'trending-up'}
              linkRoute={'/link3'}
            />
            <NavDrawerLink
              expandTo={350}
              title={'Group 2 - Second Item'}
              iconName={'trending-up'}
              linkRoute={'/link4'}
            />
          </NavDrawer>
          <Route path={'/link1'} component={(props) => <div {...props} >Link 1</div>}/>
          <Route path={'/link2'} component={(props) => <div {...props} >Link 2</div>}/>
          <Route path={'/link3'} component={(props) => <div {...props} >Link 3</div>}/>
          <Route path={'/link4'} component={(props) => <div {...props} >Link 4</div>}/>
          <Select css={selectStyles} name={'exampleSelect'} label={'Test Me'}>
            <option value="option1">Option One</option>
            <option value="option2">Option Two</option>
            <option value="option3">Option Three</option>
          </Select>
          <Textarea placeholder={'sample placeholder'} rows={10} css={textareaCss} name={'textarea'} />
          <Tooltip
            position={'right'}
            title={'Example Tooltip'}
            text={
              'Thank you for checking out the tooltip. Put some helpful tips here.'
            }
          >
            <p>Hover for tooltip information</p>
          </Tooltip>
          <Datalist.Input
            css={['background: black;']}
            name="input"
            type={'input'}
            canClear={true}
            list={'example'}
            onChange={e => this.updateDatalistValue(e.target.value)}
            onClear={() => this.updateDatalistValue('')}
            value={this.state.datalistValue}
          />
          <Datalist id={'example'}>
            {example.map((value, i) => (
              <Datalist.Option key={i} value={value}>
                {value}
              </Datalist.Option>
            ))}
          </Datalist>
          <Table
            paginationCss={css`* {color: red;};`}
            controlsCss={css`* {color: red;}`}
            columns={this.state.columns}
            data={this.state.data}
            showCustomSelect={true}
            onSelectChange={e => this.setState({ selectValue: e.target.value })}
            selectLabel={'Custom List:'}
            selectValue={this.state.selectValue}
            selectList={[
              {
                text:
                  'really long text that should extend past the option window',
                value: '1',
              },
              { text: 'option 2', value: '2' },
            ]}
            showPagination={true}
            page={1}
            pageCount={300}
            onUpdatePage={() => ''}
          />
        </div>
      </BrowserRouter>
    )
  }
}

const inputStyles = css`
  width: 300px;
  background: ${({ theme }) => theme.palette.common.blue};
  input::placeholder {
    color: ${({ theme }) => theme.palette.common.red};
  }
`

const dividerStyles = css`
  margin-top: 30px;
  width: 90%;
`

const selectStyles = css`
  border-color: black;
  width: 300px;
  select,
  i {
    color: white;
  }
`

const dropdownItemCss = css`
  background-color: ${({ theme }) => theme.palette.common.black};
`

const textareaCss = css`
  background: ${({ theme }) => theme.palette.common.orange};
  ::placeholder {
    color: green;
  }
`

export default App
