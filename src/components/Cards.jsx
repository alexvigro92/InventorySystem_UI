import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'

import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { FormLabel,TextInput,Button } from 'carbon-components-react'

import { setModalFlagTrue,setModalFlagFalse } from './../actions/modalFlagsActions'
import { saveProductInDB ,savePresentationInDB} from './../actions/registerActions'

class CardsComponent extends Component {

  constructor(props,context){
    super(props, context);
    this.state = {
      hover:2,
      producto: "",
      presentacion: ""
    }
  }

    onMouseOverOption = () => {
      this.setState({hover:5})
    }

    onMouseOutOption = () => {
      this.setState({hover:2})
    }

    saveProductInDB = () => {
      this.props.saveProductInDB(this.state);
    }

    savePresentationInDB = () => {
      this.props.savePresentationInDB(this.state);
    }

    getContent = (cardId) => {
      switch (cardId) {
        case 'card3':
          return(
            <div>
              <div className="bx--grid">
                <div className="bx--row">
                  <div className="bx--col-xs-12 bx--col-sm-12 bx--col-md-12 bx--col-lg-12 bx--col-xl-12 bx--col-xxl-12">
                    <h3><strong>Registro de Producto</strong></h3>
                  </div>
                </div>
              <div className="bx--row">
                <div className="paddinFive bx--col-xs-12 bx--col-sm-12 bx--col-md-12 bx--col-lg-12 bx--col-xl-12 bx--col-xxl-12">
                  <FormLabel  className="labelModalStyle" >Producto</FormLabel>
                  <TextInput  labelText="" id="producto" onChange={(event) => this.setState({producto:event.target.value})} className="textinputModalStyle" placeholder="Producto" hideLabel/>
                </div>
              </div>
              <div className="bx--row">
                <div className="bx--col-xs-12 bx--col-sm-12 bx--col-md-12 bx--col-lg-12 bx--col-xl-12 bx--col-xxl-12">
                  <Button className="buttonSave" onClick={this.saveProductInDB} kind="secondary">
                    Guardar
                  </Button>
                    <Button className="buttonCancel" kind="danger" onClick={() => this.props.setModalFlagFalse(this.props.cardId)}>
                      Cancelar
                    </Button>
                </div>
              </div>
              </div>
            </div>
          )
          break;
        case 'card4':
        return(
          <div>
            <div className="bx--grid">
              <div className="bx--row">
                <div className="bx--col-xs-12 bx--col-sm-12 bx--col-md-12 bx--col-lg-12 bx--col-xl-12 bx--col-xxl-12">
                  <h3><strong>Registro de Presentación</strong></h3>
                </div>
              </div>
            <div className="bx--row">
              <div className="paddinFive bx--col-xs-12 bx--col-sm-12 bx--col-md-12 bx--col-lg-12 bx--col-xl-12 bx--col-xxl-12">
                <FormLabel  className="labelModalStyle" >Presentación</FormLabel>
                <TextInput  labelText="" id="presentacion" onChange={(event) => this.setState({presentacion:event.target.value})} className="textinputModalStyle" placeholder="Presentación" hideLabel/>
              </div>
            </div>
            <div className="bx--row">
              <div className="bx--col-xs-12 bx--col-sm-12 bx--col-md-12 bx--col-lg-12 bx--col-xl-12 bx--col-xxl-12">
                <Button className="buttonSave" onClick={this.savePresentationInDB} kind="secondary">
                  Guardar
                </Button>
                  <Button className="buttonCancel" kind="danger" onClick={() => this.props.setModalFlagFalse(this.props.cardId)}>
                    Cancelar
                  </Button>
              </div>
            </div>
            </div>
          </div>
        )
          break;
        default:

      }
    }


  render(){
    let cardToShow = (<div></div>);
    if(this.props.nextPath){
      cardToShow = (
        <Link to={this.props.nextPath}>
          <Paper zDepth={this.state.hover} onMouseOver={this.onMouseOverOption} onMouseOut={this.onMouseOutOption} className="cardStyle">
            <img alt="icon" className="avatarStyle" src={this.props.cardImg}/>
            <h4 className="linkTitle">
              {this.props.cardTitle}
            </h4>
          </Paper>
        </Link>)
    }else{
      cardToShow = (
          <Paper zDepth={this.state.hover} onMouseOver={this.onMouseOverOption} onMouseOut={this.onMouseOutOption} className="cardStyle">
            {
              (!this.props.cards[this.props.cardId])
              ?
              (
                <div onClick={() => this.props.setModalFlagTrue(this.props.cardId)}>
                <img alt="icon" className="avatarStyle" src={this.props.cardImg}/>
                <h4 className="linkTitle">
                  {this.props.cardTitle}
                </h4>
              </div>
              )
              :
              this.getContent(this.props.cardId)
            }
          </Paper>)
    }

    return(
      <MuiThemeProvider>
        {cardToShow}
      </MuiThemeProvider>
    );
  }

}

function mapStateToProps(state){
  const cards = state.modalFlagsReducer
  return {
    cards
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {
      setModalFlagTrue,
      setModalFlagFalse,
      saveProductInDB,
      savePresentationInDB
    },dispatch
  );
}

export default connect(mapStateToProps,mapDispatchToProps)(CardsComponent);
