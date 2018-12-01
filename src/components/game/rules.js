import React, { Component } from 'react'

import styled from 'styled-components'
import anime from "animejs";



const Container = styled.div`
        width:100%;
        height:20vh;
        bottom:0;
        background-color:blueviolet;
`

export default class Rules extends Component {

    componentDidMount(){
        
      const  timeline= anime.timeline()

        timeline.add({
            targets: this.con,
            top:0
        })
    }

  render() {
    return (
      <Container ref={(e)=> this.con = e} >

      </Container>
    )
  }
}
