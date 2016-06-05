var React = require('react');

// Here we created the home component
var Home = React.createClass({
	render: function(){
		return(

			// Here we use className instead of class because class is a reserved name in Javascript
			// The converter will take className and call it class.
	<div className="bodyContainer">		
			<div className="row">
		<div className="col-sm-12">
		<br/>
			<div className="panel panel-primary">
				<div className="panel-heading text-center">
					<h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>   Search!</strong></h3>
				</div>
				<div className="panel-body">
					 <div className="form-group">
					    <label htmlFor="search">Topic</label>
					    <input type="text" className="form-control" id="searchTerm" />
					  </div>

					  <div className="form-group">
					    <label htmlFor="search">Start Year</label>
					    <input type="text" className="form-control" id="searchStart" />
					  </div>

					  <div className="form-group">
					    <label htmlFor="search">End Year</label>
					    <input type="text" className="form-control" id="searchEnd" />
					  </div>
					  <div className="text-center">
					  <button type="submit" className="btn btn-default" id="runSearch"><i className="fa fa-search"></i> Search</button>
						</div>
					
				</div>
			</div>
		</div>
	</div>



	<div className="row">
		<div className="col-sm-12">
		<br/>
			<div className="panel panel-primary">
				<div className="panel-heading text-center">
					<h3 className="panel-title"><strong>Results</strong></h3>
				</div>
				<div className="panel-body">
					 
					
				</div>
			</div>
		</div>
	</div>



	<div className="row">
		<div className="col-sm-12">
		<br/>
			<div className="panel panel-primary">
				<div className="panel-heading text-center">
					<h3 className="panel-title"><strong>Saved</strong></h3>
				</div>
				<div className="panel-body">
					 
					
				</div>
			</div>
		</div>
	</div>


</div>	
		)
	}

});

// Exporting the component effectively means we can deploy the component in any other file. 
module.exports = Home;
