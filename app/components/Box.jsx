import React from 'react';
import Search from './Search.jsx';
import SearchResults from './searchResults.jsx';

const styles = {
	box:  {
		width:200,
		height:400,
		hover:{
			background:'blue'
		}
	}
}

export default class Box extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			 searchedTerm: "",
			 filteredData: []
		}
	}
	doSearch (query) {
		let searchResults = []
		if (query){
			this.props.data.forEach(function(resort){
				if(resort.name.toLowerCase().indexOf(query) != -1)
				searchResults.push(resort)
	
			})	
		}
		else this.state.filteredData = []
		this.setState({
            query:query,
            filteredData: searchResults
        })
	}
	render () {
			return (
				<div style = {styles.box}>
					<Search query = {this.state.query} doSearch={this.doSearch.bind(this)}/>
					<SearchResults query = {this.state.query} data = {this.state.filteredData}/>
					
				</div>
			)
	}
}