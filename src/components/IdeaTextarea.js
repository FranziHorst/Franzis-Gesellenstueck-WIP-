import React, { Component } from 'react'
import styled from 'styled-components'
import Textarea from 'react-textarea-autosize'

export const StyledTextarea = styled(Textarea)`
  background: white;
  border-radius: 12px;
  border: 2px solid #ffbf00;
  color: #df4958;
  font-family: 'Niramit', sans-serif;
  font-size: 16px;
  min-height: 400px;
  margin: 0 20px;
  outline: none;
  padding: 10px;

  &:focus {
    box-shadow: 0 0 10px #ffbf00;
  }

  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: #b2b2b2;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color: #b2b2b2;
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: #b2b2b2;
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: #b2b2b2;
  }
`

export default class IdeaTextarea extends Component {
  render() {
    return <StyledTextarea placeholder="type your ideas here..." />
  }
}
