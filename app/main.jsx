import ReactDOM from 'react-dom';
import React from 'react';
import Search from './components/Search.jsx';
import Box from './components/Box.jsx';
const tableData=[
			{
				name:'Brighton',
				roll: '001'
			},
			{
				name:'SnowBird',
				roll: '002'
			},
			{
				name:'Alta',
				roll: '003'
		}];
// class App extends React.Component{
// 	render () {
		
// 		return <Box data = {tableData} />
		
// 	}
// }

ReactDOM.render(
  <Box  data = {tableData} />,
  document.getElementById('app')
)