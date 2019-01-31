import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FormLabel,TextInput,Button } from 'carbon-components-react'
import { Link } from 'react-router-dom'
import { saveOriginAndDestinationInDB } from './../actions/registerActions'


class RegisterOriginAndDestinationComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      nombreBodega:"",
      calle:"",
      numero:"",
      colonia:"",
      codigoPostal:"",
      ciudad:"",
      estado:"",
      nombresCont:"",
      apellidosCont:"",
      telefonoCont:""
    }
  }

  saveOriginAndDestinationInDB = () => {
    this.props.saveOriginAndDestinationInDB(this.state);
  }

  render(){
    // console.log("se renderizó Registro de Cliente");
    return(
        <div className="bx--grid">
          <div className="bx--row">
            <div className="bx--col-xs-12 bx--col-sm-12 bx--col-md-12 bx--col-lg-12 bx--col-xl-12 bx--col-xxl-12">
              <h1><strong>Registro de Origen o Destino</strong></h1>
            </div>
          </div>

          <br/>
          <br/>
            <h3>Datos de la Bodega</h3>

          <div className="bx--row">
            <div className="paddinFive bx--col-xs-12 bx--col-sm-12 bx--col-md-12 bx--col-lg-12 bx--col-xl-12 bx--col-xxl-12">
              <FormLabel className="labelModalStyle">Nombre de la Bodega</FormLabel>
              <TextInput labelText="" id="nombreBodega" onChange={(event) => this.setState({nombreBodega: event.target.value})} className="textinputModalStyle" placeholder="Nombre de la Bodega" hideLabel />
            </div>
          </div>

          <div className="bx--row">

            <div className="bx--col-xs-12 bx--col-sm-12 bx--col-md-12 bx--col-lg-6 bx--col-xl-6 bx--col-xxl-6">
              <div className="bx--row">
                <div className="paddinFive bx--col-xs-12 bx--col-sm-6 bx--col-md-8 bx--col-lg-8 bx--col-xl-8 bx--col-xxl-8">
                  <FormLabel className="labelModalStyle">Calle</FormLabel>
                  <TextInput labelText="" id="calle" onChange={(event) => this.setState({calle: event.target.value})} className="textinputModalStyle" placeholder="Calle" hideLabel />
                </div>
                <div className="paddinFive bx--col-xs-12 bx--col-sm-6 bx--col-md-4 bx--col-lg-4 bx--col-xl-4 bx--col-xxl-4">
                  <FormLabel  className="labelModalStyle" >Número</FormLabel>
                  <TextInput  labelText="" id="numero" onChange={(event) => this.setState({numero: event.target.value})} className="textinputModalStyle" placeholder="0" type="number" hideLabel/>
                </div>
              </div>
            </div>

            <div className="bx--col-xs-12 bx--col-sm-12 bx--col-md-12 bx--col-lg-6 bx--col-xl-6 bx--col-xxl-6">
              <div className="bx--row">
                <div className="paddinFive bx--col-xs-12 bx--col-sm-6 bx--col-md-8 bx--col-lg-8 bx--col-xl-8 bx--col-xxl-8">
                  <FormLabel  className="labelModalStyle" >Colonia</FormLabel>
                  <TextInput  labelText="" id="colonia" onChange={(event) => this.setState({colonia: event.target.value})} className="textinputModalStyle" placeholder="Colonia" hideLabel/>
                </div>
                <div className="paddinFive bx--col-xs-12 bx--col-sm-6 bx--col-md-4 bx--col-lg-4 bx--col-xl-4 bx--col-xxl-4">
                  <FormLabel  className="labelModalStyle" >Código Postal</FormLabel>
                  <TextInput  labelText="" id="codigoPostal" onChange={(event) => this.setState({codigoPostal: event.target.value})} className="textinputModalStyle" placeholder="C.P." type="number" hideLabel/>
                </div>
              </div>
            </div>

            <div className="paddinFive bx--col-xs-12 bx--col-sm-6 bx--col-md-6 bx--col-lg-6 bx--col-xl-6 bx--col-xxl-6">
              <FormLabel  className="labelModalStyle" >Ciudad</FormLabel>
              <TextInput  labelText="" id="ciudad" onChange={(event) => this.setState({ciudad: event.target.value})} className="textinputModalStyle" placeholder="Ciudad" hideLabel/>
            </div>

            <div className="paddinFive bx--col-xs-12 bx--col-sm-6 bx--col-md-6 bx--col-lg-6 bx--col-xl-6 bx--col-xxl-6">
              <FormLabel  className="labelModalStyle" >Estado</FormLabel>
              <TextInput  labelText="" id="estado" onChange={(event) => this.setState({estado: event.target.value})} className="textinputModalStyle" placeholder="Estado" hideLabel/>
            </div>

          </div>

          <br/>
          <br/>
            <h3>Contacto de la Bodega</h3>

          <div className="bx--row">
            <div className="paddinFive bx--col-xs-12 bx--col-sm-6 bx--col-md-5 bx--col-lg-5 bx--col-xl-5 bx--col-xxl-4">
              <FormLabel className="labelModalStyle">Nombre(s)</FormLabel>
              <TextInput labelText="" id="nombresCont" onChange={(event) => this.setState({nombresCont: event.target.value})} className="textinputModalStyle" placeholder="Nombre(s)" hideLabel />
            </div>
            <div className="paddinFive bx--col-xs-12 bx--col-sm-6 bx--col-md-5 bx--col-lg-5 bx--col-xl-5 bx--col-xxl-4">
              <FormLabel  className="labelModalStyle" >Apellido(s)</FormLabel>
              <TextInput  labelText="" id="apellidosCont" onChange={(event) => this.setState({apellidosCont: event.target.value})} className="textinputModalStyle" placeholder="Apellido(s)" hideLabel/>
            </div>
            <div className="paddinFive bx--col-xs-12 bx--col-sm-6 bx--col-md-2 bx--col-lg-2 bx--col-xl-2 bx--col-xxl-4">
              <FormLabel  className="labelModalStyle" >Teléfono</FormLabel>
              <TextInput  labelText="" id="telefonoCont" onChange={(event) => this.setState({telefonoCont: event.target.value})} className="textinputModalStyle" placeholder="Teléfono" type="number" hideLabel/>
            </div>
          </div>

            <div className="bx--row">
              <div className="bx--col-xs-12 bx--col-sm-12 bx--col-md-12 bx--col-lg-12 bx--col-xl-12 bx--col-xxl-12">
                <Button className="buttonSave" kind="secondary" onClick={this.saveOriginAndDestinationInDB}>
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
      saveOriginAndDestinationInDB
    },dispatch
  );
}

export default connect(mapStateToProps,mapDispatchToProps)(RegisterOriginAndDestinationComponent);
