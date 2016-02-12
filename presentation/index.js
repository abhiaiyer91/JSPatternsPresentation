// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
  } from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  blaze: require("../assets/blaze.jpg"),
  abhi: require("../assets/abhi.jpg"),
  fatigue: require("../assets/fatigue.png"),
  seissues: require("../assets/seissues.png"),
  wp: require("../assets/wp.png"),
  redux: require("../assets/redux-2.png"),
  markdown: require("../assets/markdown.png"),
  observer: require("../assets/observerpattern.png"),
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              When the world is in "Flux",
            </Heading>
            <Heading size={1} fit caps>
              you'll be fine.
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Image src={images.abhi.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="white" textFont="primary">
              <Link textColor="primary" href="https://www.twitter.com/abhiaiyer">@abhiaiyer</Link> Software Engineer,
              <Link textColor="primary" href="https://www.workpop.com">Workpop Inc.</Link>
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Image src={images.wp.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              MeteorJS / ReactJS.
            </Heading>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Native Android / iOS.
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.blaze.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={2} caps fit textColor="primary">
                The Problem
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Software Engineering is always changing.
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Shoot me.
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Image src={images.seissues.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              The issues we face.
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Image src={images.fatigue.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              JavaScript Fatigue
            </Heading>
          </Slide>
          <Slide transition={["zoom"]} bgColor="secondary">
            <Heading size={2} fit caps lineHeight={1} textColor="primary">
              So if things constantly change..
            </Heading>
            <Appear><Heading size={1} fit caps lineHeight={1} textColor="primary">
              how do we manage complexity?
            </Heading></Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote size={3}>Managing complexity is the most important technical topic in software development.</Quote>
              <Cite>Steve McConnell in Code Complete</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Lets Talk About Architecture</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Frameworks
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Business Logic
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              "Ah F.A.C.!!!!"
            </Heading>
            <Appear fid="1">
              <Heading size={1} fit caps lineHeight={1} textColor="black">
                Frameworks Always Change
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Methods over results
            </Heading>
            <List>
              <ListItem>Write and maintain patterns</ListItem>
              <ListItem>Decouple systems</ListItem>
              <ListItem>Cogs in a machine</ListItem>
            </List>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              The Command Pattern
            </Heading>
            <List>
              <ListItem>Separate the responsibilities </ListItem>
              <ListItem>Delegation of actions</ListItem>
              <ListItem>What Flux really is</ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading caps fit size={1} textColor="secondary">
              Running a Grocery Store
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/deck.example")}
              margin="20px auto"
              />
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              But...
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Why is this bad?
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading caps fit size={1} textColor="primary">
              If the core API changes we have to modify all the touchpoints.
            </Heading>
            <Heading caps fit size={1} textColor="primary">
              Abstract the API away further.
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading caps fit size={1} textColor="secondary">
              Command Pattern Revisited
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/revisited.example")}
              margin="20px auto"
              />
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading caps fit size={1} textColor="secondary">
              Some Flux
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/fluxExample.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading caps fit size={1} textColor="primary">
              Enter Redux
            </Heading>
            <Image src={images.redux.replace("/", "")} margin="0px auto 40px" height="500px"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading caps fit size={1} textColor="secondary">
              A closer look at Redux
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/closerLookRedux.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Let's talk Side Effects
            </Heading>
            <Appear>
              <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
                How do we handle this?
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Observer Pattern
            </Heading>
            The Observer is a design pattern where an object (known as a subject) maintains a list of objects depending on it (observers), automatically notifying them of any changes to state.
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Image src={images.observer.replace("/", "")} margin="0px auto 40px" height="500px"/>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Observer Pattern Continued..
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/implementation.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              An implementation
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/hooks.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              THANKS!!!
            </Heading>
            <Heading size={1} fit caps>
              Follow me, @abhiaiyer - Twitter, Medium.
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
