import React, { Component } from 'react'
import styled from 'styled-components'

import Rules from './rules'
import Questions from './questions'


const Container = styled.div`
    width:100vw;
    height:100vh;

`



export default class Game extends Component {

  constructor(props) {
    super(props)
  
    this.state = {

    }
  }
  
  componentDidMount(){

    this.startTimer()

    this.setState({
      status:'playing'
    })
  }

  startTimer(){
    console.log('timer set')
  }

  render() {
    return (
      <Container>
        <Rules/>
      </Container>
    )
  }
}
