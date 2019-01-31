import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './assets/css/styles.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/carbon-components/css/carbon-components.min.css';

import NavBarComponent from './components/NavBar';
import MainPageSelectorComponent from './components/MainPageSelector';
import RegisterClientComponent from './components/RegisterClient';
import RegisterSupplierComponent from './components/RegisterSupplier';
import GenerateGeneralReportComponent from './components/GenerateGeneralReport';
import RegisterOriginAndDestinationComponent from './components/RegisterOriginAndDestination';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    console.log("se renderizó app");
    return (
      <Router>
        <div className="App">
          <MuiThemeProvider>
            <NavBarComponent/>
          </MuiThemeProvider>
          <Switch>
            <Route exact path='/' component={MainPageSelectorComponent}/>
            <Route exact path='/registro_cliente' component={RegisterClientComponent}/>
            <Route exact path='/registro_proveedor' component={RegisterSupplierComponent}/>
            <Route exact path='/registro_origen_destino' component={RegisterOriginAndDestinationComponent}/>
            <Route exact path='/generar_reporte_general' component={GenerateGeneralReportComponent}/>
          </Switch>
        </div>
      </Router>
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

export default connect(mapStateToProps,mapDispatchToProps)(App);
