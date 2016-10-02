import React from 'react'
import {
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Quote,
  Slide,
  Spectacle,
  Text
} from 'spectacle'

import CodeSlide from 'spectacle-code-slide'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Require CSS
require('normalize.css')
require('../assets/css/pres-styles.css')

const Urls = {
  suncoastTwitter: 'https://twitter.com/suncoastjs',
  suncoastGithub: 'https://github.com/suncoastjs'
}

const styles = {
  listItemTitle: {
    listStyleType: 'none',
    textAlign: 'center'
  },
  listItemNoBulletPoint: {
    listStyleType: 'none'
  }
}

const theme = createTheme({
  yellow: '#ffdc00',
  black: '#24242D',
  pink: '#E211B3',
  white: '#FFF'
})

export default function Presentation () {
  return (
    <Spectacle theme={theme}>
      <Deck transition={['zoom']} transitionDuration={500}>
        <Slide>
          <Heading caps lineHeight={1.5} textColor='black' textFont='primary'>Suncoast.js</Heading>
          <Heading caps fit lineHeight={2} textColor='black' textFont='primary'>
            Higher Order Components in React and Node Internet of Rain
          </Heading>
          <List style={styles.listItemTitle}>
            <ListItem>
              For <a target='_blank' href={Urls.suncoastGithub}>Suncoast.js</a>,&nbsp;
              Twitter: <a target='_blank' href={Urls.suncoastTwitter}>@suncoastjs</a>
            </ListItem>
          </List>
        </Slide>
        {/* }
            /////////////////////////////////
            ///////  START: PART ONE ///////
            ////////////////////////////////
        { */}
        <Slide bgColor='black'>
          <Heading textColor='yellow'>PART 1</Heading>
        </Slide>
        <Slide>
          <Heading fit caps textColor='black'>Higher Order Components in React</Heading>
        </Slide>
        <Slide bgColor='black'>
          <Heading fit caps textColor='yellow'>What will we be discussing?</Heading>
          <List style={{ textAlign: 'center' }}>
            <ListItem caps><Link href='/#/5'>What is that thingamajing called mapping?</Link></ListItem>
            <ListItem caps><Link href='/#/16'>What is this composition rigamarole?</Link></ListItem>
            <ListItem caps><Link href='/#/20'>What are these Recompose shenanigans?</Link></ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={4} caps textColor='black'>Before we can talk about HOCs (Higher Order Components) we need to start with a very important and concise question</Heading>
        </Slide>
        <Slide bgColor='black'>
          <Heading textColor='yellow'>What is that thingamajing called mapping?</Heading>
        </Slide>
        <Slide>
          <Heading caps fit>What is mapping?</Heading>
          <Text fit>Put simply, mapping is when you take a value and transform it into another value</Text>
        </Slide>
        <Slide>
          <CodePane
            lang='js'
            source={require('raw!../assets/code_slides/mapping.example')}
            margin='20px auto' />
        </Slide>
        <Slide>
          <CodePane
            lang='js'
            source={require('raw!../assets/code_slides/arraymapping.example')}
            margin='20px auto' />
        </Slide>
        <Slide bgColor='pink'>
          <Heading fit size={3} textColor='white'>Now one step further...</Heading>
        </Slide>
        <Slide bgColor='black'>
          <Heading textColor='yellow' size={4}>What if we wanted to do multiple transformations on the same initial value...</Heading>
        </Slide>
        <Slide>
          <Heading textColor='white'>Well, we could do that by chaining...</Heading>
        </Slide>
        <Slide>
          <CodePane
            lang='js'
            source={require('raw!../assets/code_slides/chaining.example')} />
        </Slide>
        <Slide>
          <Heading textColor='black'>But is there a way for us to be more declarative...</Heading>
        </Slide>
        <Slide bgColor='black'>
          <Heading fit textColor='yellow'>...and flexible with our code</Heading>
        </Slide>
        <Slide bgColor='pink'>
          <Heading size={3} textColor='white'>Composition to the rescue!</Heading>
        </Slide>
        <Slide bgColor='black'>
          <Heading textColor='yellow'>What is this composition rigamarole?</Heading>
        </Slide>
        <Slide>
          <CodePane
            lang='js'
            source={require('raw!../assets/code_slides/composition.example')} />
        </Slide>
        <Slide>
          <Heading fit textColor='white'>But Adam, what about arrays?</Heading>
        </Slide>
        <Slide>
          <CodePane
            lang='js'
            source={require('raw!../assets/code_slides/composeArrays.example')} />
        </Slide>
        <Slide bgColor='black'>
          <Heading caps textColor='yellow'>What are these Recompose shenanigans?</Heading>
        </Slide>
        <Slide>
          <BlockQuote>
            <Quote textColor='white'>A higher order component is a function that accepts a component and returns a new component</Quote>
            <Cite>Andrew Clark</Cite>
          </BlockQuote>
        </Slide>
        <Slide bgColor='pink'>
          <Heading fit textColor='white' size={3}>What in the world?</Heading>
        </Slide>
        <Slide>
          <Heading fit caps>Code Time!</Heading>
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
           { loc: [36, 40], note: 'We can even mount it now :)' },
           { loc: [42, 44], note: 'View the code here' }
          ]}
        />
        <Slide bgColor='pink'>
          <Heading fit textColor='white' size={3}>Let us try a more difficult example</Heading>
        </Slide>
        <Slide bgColor='black'>
          <Heading fit caps textColor='yellow'>Window resize dimensions HOC!</Heading>
        </Slide>
        <Slide>
          <CodePane
            lang='js'
            source={require('raw!../assets/code_slides/dimensions.example')} />
        </Slide>
        <Slide bgColor='black'>
          <Heading fit caps textColor='yellow'>Questions to ask yourself</Heading>
          <List style={{ textAlign: 'center' }} textColor='yellow' caps>
            <ListItem>Does this belong in the component?</ListItem>
            <ListItem>Is this composable?</ListItem>
          </List>
        </Slide>
        <CodeSlide
          transition={[]}
          lang='js'
          code={require('raw!../assets/code_slides/hocdimensions.example')}
          ranges={[
           { loc: [0, 1], title: `Let's create a window dimensions HOC` },
           { loc: [2, 10], note: 'Pull in needed libraries.' },
           { loc: [11, 12], note: 'Set observable config' },
           { loc: [13, 30] },
           { loc: [31, 34], note: `As we have done before, let's compose it` },
           { loc: [35, 40], note: `Let's make an app out of it yeah!` },
           { loc: [41, 45], note: 'And finally mount it.' },
           { loc: [46, 48], note: 'View the code here' }
          ]}
        />
        <Slide bgColor='pink'>
          <BlockQuote>
            <Quote textColor='white'>Thats all folks</Quote>
            <Cite>Porky Pig</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Heading fit caps textColor='black'>Resources</Heading>
          <List style={{ textAlign: 'center' }}>
            <ListItem><a href='https://github.com/acdlite/recompose' target='_blank'>Recompose Library</a></ListItem>
            <ListItem><a href='https://www.youtube.com/watch?v=zD_judE-bXk' target='_blank'>Andrew Clark talks about HOCs and Recompose</a></ListItem>
            <ListItem><a href='https://gist.github.com/arecvlohe/6f7c988b4cc7849dbe8ecf36cf7a84dc' target='_blank'>withProps Example</a></ListItem>
            <ListItem><a href='https://github.com/arecvlohe/recompose-example/blob/master/src/App.js' target='_blank'>windowDimensions Example</a></ListItem>
          </List>
        </Slide>
        <Slide bgColor='black'>
          <Heading caps textColor='yellow'>Now on to Part 2!</Heading>
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
