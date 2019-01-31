import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CardsComponent from './Cards'

class MainPageSelector extends Component {

  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    // console.log("se renderizó MainPageSelector");
    return(
        <div className="bx--grid">
          <div className="bx--row">
            <div className="cardMargin bx--col-xs-12 bx--col-sm-6 bx--col-md-6 bx--col-lg-3 bx--col-xl-3 bx--col-xxl-3">
              <CardsComponent cardTitle="Registrar Cliente" cardImg={require('../assets/img/addClients.ico')} cardId="card1" nextPath="/registro_cliente"/>
            </div>
            <div className="cardMargin bx--col-xs-12 bx--col-sm-6 bx--col-md-6 bx--col-lg-3 bx--col-xl-3 bx--col-xxl-3">
              <CardsComponent cardTitle="Registrar Proveedor" cardImg={require('../assets/img/addSupplier.png')} cardId="card2" nextPath="/registro_proveedor"/>
            </div>
            <div className="cardMargin bx--col-xs-12 bx--col-sm-6 bx--col-md-6 bx--col-lg-3 bx--col-xl-3 bx--col-xxl-3">
              <CardsComponent cardTitle="Registrar Producto" cardImg={require('../assets/img/addProduct.ico')} cardId="card3" nextPath=""/>
            </div>
            <div className="cardMargin bx--col-xs-12 bx--col-sm-6 bx--col-md-6 bx--col-lg-3 bx--col-xl-3 bx--col-xxl-3">
              <CardsComponent cardTitle="Registrar Presentación" cardImg={require('../assets/img/addPresentation.ico')} cardId="card4" nextPath=""/>
            </div>
          </div>
          <div className="bx--row">
            <div className="bx--col-lg-3 bx--col-xl-3 bx--col-xxl-3">
            </div>
            <div className="cardMargin bx--col-xs-12 bx--col-sm-6 bx--col-md-6 bx--col-lg-3 bx--col-xl-3 bx--col-xxl-3">
              <CardsComponent cardTitle="Registrar Origen o Destino" cardImg={require('../assets/img/addOrigin.ico')} cardId="card5" nextPath="/registro_origen_destino"/>
            </div>
            <div className="cardMargin bx--col-xs-12 bx--col-sm-6 bx--col-md-6 bx--col-lg-3 bx--col-xl-3 bx--col-xxl-3">
              <CardsComponent cardTitle="Crear Reporte General" cardImg={require('../assets/img/createReport.ico')} cardId="card6" nextPath="/generar_reporte_general"/>
            </div>
            <div className="bx--col-lg-3 bx--col-xl-3 bx--col-xxl-3">
            </div>
          </div>
      </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(MainPageSelector);
