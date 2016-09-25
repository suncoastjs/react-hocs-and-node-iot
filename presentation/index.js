import React from 'react'
import {
  Spectacle,
  Deck,
  Slide,
  Heading
} from 'spectacle'

export default function Presentation () {
  return (
    <Spectacle>
      <Deck>
        <Slide>
          <Heading>Suncoast.js</Heading>
        </Slide>
        <Slide>
          <Heading>
            Higher Order Components in React and Node Internet of Rain
          </Heading>
        </Slide>
        {/* }
            /////////////////////////////////
            ///////  START: PART ONE ///////
            ////////////////////////////////
        { */}
        <Slide>
          <Heading>PART 1</Heading>
        </Slide>
        <Slide>
          <Heading>Higher Order Components in React</Heading>
        </Slide>
        {/* }
            //////////////////////////////
            ///////  END: PART ONE ///////
            //////////////////////////////
        { */}
        {/* }
            ////////////////////////////////
            ///////  START: PART TWO ///////
            ////////////////////////////////
        { */}
        <Slide>
          <Heading>PART 2</Heading>
        </Slide>
        <Slide>
          <Heading>Node Internet of Rain</Heading>
        </Slide>
        {/* }
            //////////////////////////////
            ///////  END: PART TWO ///////
            //////////////////////////////
        { */}
      </Deck>
    </Spectacle>
  )
}
