import React, { Component } from 'react'
import {Primary} from "./Primary"
import {Social} from "./Social"
import {Promotions} from "./Promotions"
export class Category extends Component {
  render() {
    return (
      <div className="category">
          <Primary/>
          <Social/>
          <Promotions/>
      </div>
    )
  }
}
