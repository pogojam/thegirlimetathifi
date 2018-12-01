import React, {Fragment, Component } from 'react'
import styled from 'styled-components'
import anime from 'animejs'

const IntroText1 = styled.h1`

    position:absolute;
    left:-20vw;
    top:20vh;
    font-size:${({size})=>size}em;
`
const IntroText2 = styled.h1`
    font-size:${({size})=>size}em;
    position:absolute;
    right:5vw;
`

const Button = styled.button`
    z-index: 999;
    position: absolute;
    bottom: 0;
    width:10em;

`

export default class Splash extends Component {

    componentDidMount(){
            this.animateIn()
    }

    animateIn(){

        const timeline = anime.timeline()

        timeline.add({
            targets:this.intro1,
            left:'5vw',
            duration:400
        }).add({
            targets:this.intro2,
            bottom:[-100,400],
            duration:1100
        })
    }

    animateOut(){

        const {startGame} = this.props

        anime({
            targets:[this.intro1,this.intro2],
            top:-200,
            duration:1000,
            easing:'easeInQuint',
            complete:()=>startGame()
        })
    }


  render() {

    return (
      <Fragment>
      <IntroText1   size={5} ref={(e)=> this.intro1 = e } >
    Hi, 
        </IntroText1>
        <IntroText2 size={2}  ref={(e)=> this.intro2 = e} >
            Get puzzle ready
        </IntroText2>
        <Button onClick={this.animateOut.bind(this)} >Play</Button>
      </Fragment>
    )
  }
}


