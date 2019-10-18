import React, { Component } from 'react'
import LetterBox from './LetterBox';
export default class Letters extends Component {
  render() {
    return (
      <div>
        {
          this.state.letters.forEach(letter => (
            <LetterBox letter />
          ))
        }
      </div>
    )
  }
}
