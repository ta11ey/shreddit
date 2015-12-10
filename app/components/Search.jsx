import React from 'react';


export default class Search extends React.Component {
	doSearch (event) {
		let query = event.target.value
		this.props.doSearch(query)
	}
	
	render () {
		var value = this.props.query
			return (
				<div>
				<input
				value = {this.props.query}
				onChange = {this.doSearch.bind(this)} 	
				placeholder="search resorts">
				</input>
				</div>
			)
			
			
	}
}