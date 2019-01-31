import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';

class NavBarComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }

  handleChange = (event, index, value) => this.setState({value});

  render(){
    // console.log("se renderizó navbar");
    return(

      <Paper zDepth={3}>
        <Toolbar className="navBar">
          <ToolbarGroup>
            <ToolbarTitle className="navBarTitle" text="PPFA" />
          </ToolbarGroup>
        </Toolbar>
    </Paper>
    );
  }

}

function mapStateToProps(state){
  return {
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {
    },dispatch
  );
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBarComponent);
