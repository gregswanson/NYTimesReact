var React = require('react');

// Here we created the home component
var Results = React.createClass({
	render: function(){
		return(

			// Here we use className instead of class because class is a reserved name in Javascript
			// The converter will take className and call it class.
			<div className="row">
		<div className="col-sm-12">
		<br/>
			<div className="panel panel-primary">
				<div className="panel-heading text-center">
					<h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>   Results</strong></h3>
				</div>
				<div className="panel-body">
					 
					
				</div>
			</div>
		</div>
	</div>
		)
	}

});

// Exporting the component effectively means we can deploy the component in any other file. 
module.exports = Results;
