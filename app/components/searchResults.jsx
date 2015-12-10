import React from 'react'
import Search from './Search.jsx'

const style = {
	text: {
		color: 'lightgray',
		font: 'Verdana'
	},
	matching: {
		color: 'black'
	}
}
export default class SearchResults extends React.Component {
	render () {
		let rows = []
		let query = this.props.query
	
		this.props.data.forEach(function(resort){
			let pre = resort.name.slice(0, resort.name.toLowerCase().indexOf(query))
			let matching = resort.name.slice(resort.name.toLowerCase().indexOf(query), (resort.name.toLowerCase().indexOf(query) + query.length))
			let fromhereon = resort.name.toLowerCase().indexOf(query) + query.length
			let post = resort.name.slice(fromhereon)
			rows.push(<div style = {style.text}>{pre}<span style = {style.matching}>{matching}</span>{post}</div>)
		})
		return (
			<div>{rows}</div>
		)
	}
	
}
