import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FormLabel,TextInput,Button,Dropdown,DropdownItem,TextArea } from 'carbon-components-react'
import { Link } from 'react-router-dom'

class GenerateGeneralReportComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
    }
  }

  guardarCliente = () => {
    console.log("hola");
  }

  render(){
    // console.log("se renderizó Registro de Cliente");
    return(
        <div className="bx--grid">
          <div className="bx--row">
            <div className="bx--col-xs-12 bx--col-sm-12 bx--col-md-12 bx--col-lg-12 bx--col-xl-12 bx--col-xxl-12">
              <h1><strong>Generar Reporte General</strong></h1>
            </div>
          </div>
          <div className="bx--row">
            <div className="bx--col-xs-12 bx--col-sm-12 bx--col-md-12 bx--col-lg-12 bx--col-xl-12 bx--col-xxl-12">
              <FormLabel className="labelModalStyle">Carta Porte</FormLabel>
              <TextInput labelText="" id="cartaPorte" className="textinputModalStyle" placeholder="Carta Porte" hideLabel />
            </div>
          </div>

          <div className="bx--row">
            <div className="bx--col-xs-12 bx--col-sm-12 bx--col-md-6 bx--col-lg-6 bx--col-xl-6 bx--col-xxl-6">
              <FormLabel className="labelModalStyle">Cliente</FormLabel>
                <Dropdown defaultText="Cliente">
                  <DropdownItem itemText="Alejandro" value="Alejandro" />
                </Dropdown>
            </div>
          </div>

          <div className="bx--row">

            <div className="bx--col-xs-12 bx--col-sm-12 bx--col-md-12 bx--col-lg-6 bx--col-xl-6 bx--col-xxl-6">
              <br/>
              <h3>Origen</h3>
              <div className="bx--row">
                <div className="paddinFive bx--col-xs-12 bx--col-sm-12 bx--col-md-12 bx--col-lg-12 bx--col-xl-12 bx--col-xxl-6">
                  <FormLabel className="labelModalStyle">Origen</FormLabel>
                  <Dropdown defaultText="Origen">
                    <DropdownItem itemText="Alejandro" value="Alejandro" />
                  </Dropdown>
                </div>
                <div className="paddinFive bx--col-xs-12 bx--col-sm-12 bx--col-md-12 bx--col-lg-12 bx--col-xl-12 bx--col-xxl-6">
                  <FormLabel  className="labelModalStyle" >Dirección de Carga</FormLabel>
                  <TextInput  labelText="" id="direccionCarga" className="textinputModalStyle" placeholder="Dirección de Carga" hideLabel/>
                </div>
              </div>
            </div>

            <div className="bx--col-xs-12 bx--col-sm-12 bx--col-md-12 bx--col-lg-6 bx--col-xl-6 bx--col-xxl-6">
              <br/>
              <h3>Destino</h3>
              <div className="bx--row">
                <div className="paddinFive bx--col-xs-12 bx--col-sm-12 bx--col-md-12 bx--col-lg-12 bx--col-xl-12 bx--col-xxl-6">
                  <FormLabel className="labelModalStyle">Destino</FormLabel>
                  <Dropdown defaultText="Destino">
                    <DropdownItem itemText="Alejandro" value="Alejandro" />
                  </Dropdown>
                </div>
                <div className="paddinFive bx--col-xs-12 bx--col-sm-12 bx--col-md-12 bx--col-lg-12 bx--col-xl-12 bx--col-xxl-6">
                  <FormLabel  className="labelModalStyle" >Dirección de Carga</FormLabel>
                  <TextInput  labelText="" id="direccionCarga" className="textinputModalStyle" placeholder="Dirección de Carga" hideLabel/>
                </div>
              </div>
            </div>

          </div>

            <div className="bx--row">
              <div className="bx--col-xs-12 bx--col-sm-12 bx--col-md-12 bx--col-lg-12 bx--col-xl-12 bx--col-xxl-12">
                <Button className="buttonSave" kind="secondary" onClick={this.guardarCliente}>
                  Guardar
                </Button>
                <Link to="/">
                  <Button className="buttonCancel" kind="danger">
                    Cancelar
                  </Button>
                </Link>
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

export default connect(mapStateToProps,mapDispatchToProps)(GenerateGeneralReportComponent);
