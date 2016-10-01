import React from 'react'
import {
  Spectacle,
  Deck,
  Slide,
  Heading,
  Text,
  Markdown,
  CodePane,
  BlockQuote,
  Quote,
  Cite,
  ListItem,
  List
} from 'spectacle'

import CodeSlide from 'spectacle-code-slide'

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
        <Slide>
          <Heading>What I will talk about in order...</Heading>
          <List>
            <ListItem>What is that thingamajing called mapping?</ListItem>
            <ListItem>What is this composition rigamarole?</ListItem>
            <ListItem>What are these Recompose shenanigans?</ListItem>
          </List>
        </Slide>
        <Slide>
          <h1>Before we can talk about HOCs we need to start with...</h1>
        </Slide>
        <Slide>
          <Heading>What is that thingamajing called mapping?</Heading>
        </Slide>
        <Slide>
          <Heading>What is mapping?</Heading>
          <h1>Mapping is when you take a value and transform it into another value</h1>
        </Slide>
        <Slide>
          <Heading>Mapping</Heading>
          <CodePane
            lang='js'
            source={require('raw!../assets/code_slides/mapping.example')} />
        </Slide>
        <Slide>
          <Heading>Now one step further...</Heading>
        </Slide>
        <Slide>
          <Heading>What if we wanted to do multiple transformations on the same initial value...</Heading>
        </Slide>
        <Slide>
          <Heading>Well, we could do that by chaining...</Heading>
        </Slide>
        <Slide>
          <Heading>Chaining</Heading>
          <CodePane
            lang='js'
            source={require('raw!../assets/code_slides/chaining.example')} />
        </Slide>
        <Slide>
          <Heading>That is all well and good but this is not very readable or dynamic</Heading>
        </Slide>
        <Slide>
          <Heading>In other words, is there a way that we can be more declarative...</Heading>
        </Slide>
        <Slide>
          <Heading>...And more flexible with our code</Heading>
        </Slide>
        <Slide>
          <Heading>Composition to the rescue!</Heading>
        </Slide>
        <Slide>
          <Heading>Composition allows us to make our code more readable and flexible</Heading>
        </Slide>
        <Slide>
          <Heading>What is this composition rigamarole?</Heading>
        </Slide>
        <Slide>
          <Heading>Composition</Heading>
          <CodePane
            lang='js'
            source={require('raw!../assets/code_slides/composition.example')} />
        </Slide>
        <Slide>
          <Heading>But Adam, what about arrays?</Heading>
        </Slide>
        <Slide>
          <Heading>Composing Arrays</Heading>
          <CodePane
            lang='js'
            source={require('raw!../assets/code_slides/composeArrays.example')} />
        </Slide>
        <Slide>
          <Heading>What are these Recompose shenanigans?</Heading>
        </Slide>
        <Slide>
          <BlockQuote>
            <Quote textColor='tertiary'>A higher order component is a function that accepts a component and returns a new component</Quote>
            <Cite>Andrew Clark</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Heading>What in the world?</Heading>
        </Slide>
        <Slide>
          <Heading>Now time for semi-live-coding!</Heading>
          <Text>60% of the time it works everytime - Anchorman </Text>
        </Slide>
        <CodeSlide
          transition={[]}
          lang='js'
          code={require('raw!../assets/code_slides/props.example')}
          ranges={[
           { loc: [0, 1], title: `Let's create and use a HOC!` },
           { loc: [2, 5], note: 'Pull in needed libraries.' },
           { loc: [6, 17], note: 'A HOC called withProps. It\'s only purpose is to pass down props. That\'s it!' },
           { loc: [18, 27], note: `Now let's do what they call enhance with the help of compose` },
           { loc: [28, 35], note: 'Now we can enhance our base component.' },
           { loc: [36, 40], note: 'We can even mount it now :)' }
          ]}
       />
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
