import React, { Component } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import MailApi from "../../../../server/mailApi";
import { AllMails2 } from "../mailTimeLine/allMails2";

export class CreateMailItem extends Component {
    constructor(props)
    {
      super(props);
      this.state = {value: '' , visible:false};
      this.addValue = this.addValue.bind(this);
      this.updateInput = this.updateInput.bind(this);
    }
    
    addValue(evt)
    {
      evt.preventDefault();
      if(this.state.value !=undefined)
      {
        alert('Your input value is: ' + this.state.value)
      }
    }
    updateInput(evt){
      this.state={value: evt.target.value};   
        }
    
    render()
    {
      return (
      <form onSubmit={this.addValue}>
      <input type="text" onChange={this.updateInput} /><br/><br/>
      <input type="text" onChange={this.updateInput} /><br/><br/>
      <input type="submit" value="Click Me :)"/>
      </form>
      )
    }
  }
  