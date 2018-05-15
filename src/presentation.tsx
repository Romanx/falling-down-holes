// Import React
import * as React from 'react';
import TwitterRotator from 'src/TwitterType';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Appear,
  Layout,
  Fill,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quarternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  },
);

const logoStyles = {
  fontFamily: 'Georgia',
  transform: 'rotate(-90deg)',
  display: 'block',
  fontSize: '6rem',
  lineHeight: '3rem',
};

const linkStyle = { color: '#03A9FC', textDecoration: 'underline', fontSize: '2rem' };

// const theme = createTheme(
//   {
//     primary: '#EEBCFF',
//     secondary: '#3B2F40',
//     tertiary: '#775E7F',
//   },
//   {
//     primary: 'Montserrat',
//     secondary: 'Helvetica',
//   },
// );

const twitterUsers = [
  {
    name: 'Jon Skeet',
    handle: 'jonskeet',
    image: 'https://pbs.twimg.com/profile_images/783726102996922368/4OTYaJ-o.jpg',
  },
  {
    name: 'Dotnet Southeast',
    handle: 'dotnetsoutheast',
    image: 'https://pbs.twimg.com/profile_images/885062097406746625/tLWi33YE.jpg',
  },
  {
    name: 'Steve Gordon',
    handle: 'stevejgordon',
    image: 'https://pbs.twimg.com/profile_images/687198506679930880/mGOfQrls.jpg',
  },
  {
    name: 'Julie Lerman',
    handle: 'julielerman',
    image: 'https://pbs.twimg.com/profile_images/3300099539/d3f67204d791bca0bcd14db7337b6758.jpeg',
  },
  {
    name: 'Laura E. Hunter',
    handle: 'adfskitteh',
    image: 'https://pbs.twimg.com/profile_images/563412185527758848/A5_1wUIW.jpeg',
  },
  {
    name: 'Ashley the Compiler Princess',
    handle: 'khyperia',
    image: 'https://pbs.twimg.com/profile_images/954187763661680641/3yWf_wMm.jpg',
  },
  {
    name: 'Immo Landwerth',
    handle: 'terrajobst',
    image: 'https://pbs.twimg.com/profile_images/970581417422872576/XOQG6g70.jpg',
  },
  {
    name: 'Kasey Uhlenhuth',
    handle: 'kuhlenhuth',
    image: 'https://pbs.twimg.com/profile_images/704473408638050304/bVbzez9X.jpg',
  },
  {
    name: 'Nick Craver',
    handle: 'Nick_Craver',
    image: 'https://pbs.twimg.com/profile_images/623686606159872000/twD9NrLc.jpg',
  },
  {
    name: 'Kendra Havens',
    handle: 'gotheap',
    image: 'https://pbs.twimg.com/profile_images/930877546471686144/ouiBJikR.jpg',
  },
  {
    name: 'David Fowler',
    handle: 'davidfowl',
    image: 'https://pbs.twimg.com/profile_images/511247105722036224/VpxmKujV.jpeg',
  },
  {
    name: 'Damian Edwards',
    handle: 'DamianEdwards',
    image: 'https://pbs.twimg.com/profile_images/691328963658919936/pEo2ARo0.jpg',
  },
  {
    name: 'Lena Droid',
    handle: 'lenadroid',
    image: 'https://pbs.twimg.com/profile_images/939619545815302144/lKEYkVv1.jpg',
  },
  {
    name: 'Karen Ng',
    handle: 'karenkayliu',
    image: 'https://pbs.twimg.com/profile_images/660185428721430528/5zDWgQBS.jpg',
  },
  {
    name: 'Una',
    handle: 'Una',
    image: 'https://pbs.twimg.com/profile_images/923332236799291393/JFc4MauF.jpg',
  },
  {
    name: 'Sarah Drasner',
    handle: 'sarah_edo',
    image: 'https://pbs.twimg.com/profile_images/982796605425303552/phhp5grt.jpg',
  },
  {
    name: 'Sara Soueidan',
    handle: 'SaraSoueidan',
    image: 'https://pbs.twimg.com/profile_images/990908832162467841/jkEmG2NT.jpg',
  },
].sort(function() {
  return 0.5 - Math.random();
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['fade']} transitionDuration={500} theme={theme}>
        <Slide transition={['fade']} bgColor="#EEBCFF">
          <Image src="https://raw.githubusercontent.com/StubbleOrg/Stubble/master/assets/logo-256.png" />
          <Heading size={1} fit caps lineHeight={1} textColor="#3B2F40">
            Falling down holes for beginners
          </Heading>
          <Text margin="10px 0 0" textColor="#775E7F" fit bold>
            How I got started in open source and how you can too
          </Text>
        </Slide>
        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Who am i and why should you care?
          </Heading>
          <div>
            <Heading size={3} textColor="tertiary" caps fit>
              Alex McAuliffe
            </Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="tertiary" margin={10}>
                  <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDYxMiA2MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYxMiA2MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4Ij4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNjEyLDExNi4yNThjLTIyLjUyNSw5Ljk4MS00Ni42OTQsMTYuNzUtNzIuMDg4LDE5Ljc3MmMyNS45MjktMTUuNTI3LDQ1Ljc3Ny00MC4xNTUsNTUuMTg0LTY5LjQxMSAgICBjLTI0LjMyMiwxNC4zNzktNTEuMTY5LDI0LjgyLTc5Ljc3NSwzMC40OGMtMjIuOTA3LTI0LjQzNy01NS40OS0zOS42NTgtOTEuNjMtMzkuNjU4Yy02OS4zMzQsMC0xMjUuNTUxLDU2LjIxNy0xMjUuNTUxLDEyNS41MTMgICAgYzAsOS44MjgsMS4xMDksMTkuNDI3LDMuMjUxLDI4LjYwNkMxOTcuMDY1LDIwNi4zMiwxMDQuNTU2LDE1Ni4zMzcsNDIuNjQxLDgwLjM4NmMtMTAuODIzLDE4LjUxLTE2Ljk4LDQwLjA3OC0xNi45OCw2My4xMDEgICAgYzAsNDMuNTU5LDIyLjE4MSw4MS45OTMsNTUuODM1LDEwNC40NzljLTIwLjU3NS0wLjY4OC0zOS45MjYtNi4zNDgtNTYuODY3LTE1Ljc1NnYxLjU2OGMwLDYwLjgwNiw0My4yOTEsMTExLjU1NCwxMDAuNjkzLDEyMy4xMDQgICAgYy0xMC41MTcsMi44My0yMS42MDcsNC4zOTgtMzMuMDgsNC4zOThjLTguMTA3LDAtMTUuOTQ3LTAuODAzLTIzLjYzNC0yLjMzM2MxNS45ODUsNDkuOTA3LDYyLjMzNiw4Ni4xOTksMTE3LjI1Myw4Ny4xOTQgICAgYy00Mi45NDcsMzMuNjU0LTk3LjA5OSw1My42NTUtMTU1LjkxNiw1My42NTVjLTEwLjEzNCwwLTIwLjExNi0wLjYxMi0yOS45NDQtMS43MjFjNTUuNTY3LDM1LjY4MSwxMjEuNTM2LDU2LjQ4NSwxOTIuNDM4LDU2LjQ4NSAgICBjMjMwLjk0OCwwLDM1Ny4xODgtMTkxLjI5MSwzNTcuMTg4LTM1Ny4xODhsLTAuNDIxLTE2LjI1M0M1NzMuODcyLDE2My41MjYsNTk1LjIxMSwxNDEuNDIyLDYxMiwxMTYuMjU4eiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />
                  <br />
                  @ItemLevel1
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="tertiary" margin={10}>
                  <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCIgdmlld0JveD0iMCAwIDQzOC41NDkgNDM4LjU0OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjU0OSA0MzguNTQ5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTQwOS4xMzIsMTE0LjU3M2MtMTkuNjA4LTMzLjU5Ni00Ni4yMDUtNjAuMTk0LTc5Ljc5OC03OS44QzI5NS43MzYsMTUuMTY2LDI1OS4wNTcsNS4zNjUsMjE5LjI3MSw1LjM2NSAgIGMtMzkuNzgxLDAtNzYuNDcyLDkuODA0LTExMC4wNjMsMjkuNDA4Yy0zMy41OTYsMTkuNjA1LTYwLjE5Miw0Ni4yMDQtNzkuOCw3OS44QzkuODAzLDE0OC4xNjgsMCwxODQuODU0LDAsMjI0LjYzICAgYzAsNDcuNzgsMTMuOTQsOTAuNzQ1LDQxLjgyNywxMjguOTA2YzI3Ljg4NCwzOC4xNjQsNjMuOTA2LDY0LjU3MiwxMDguMDYzLDc5LjIyN2M1LjE0LDAuOTU0LDguOTQ1LDAuMjgzLDExLjQxOS0xLjk5NiAgIGMyLjQ3NS0yLjI4MiwzLjcxMS01LjE0LDMuNzExLTguNTYyYzAtMC41NzEtMC4wNDktNS43MDgtMC4xNDQtMTUuNDE3Yy0wLjA5OC05LjcwOS0wLjE0NC0xOC4xNzktMC4xNDQtMjUuNDA2bC02LjU2NywxLjEzNiAgIGMtNC4xODcsMC43NjctOS40NjksMS4wOTItMTUuODQ2LDFjLTYuMzc0LTAuMDg5LTEyLjk5MS0wLjc1Ny0xOS44NDItMS45OTljLTYuODU0LTEuMjMxLTEzLjIyOS00LjA4Ni0xOS4xMy04LjU1OSAgIGMtNS44OTgtNC40NzMtMTAuMDg1LTEwLjMyOC0xMi41Ni0xNy41NTZsLTIuODU1LTYuNTdjLTEuOTAzLTQuMzc0LTQuODk5LTkuMjMzLTguOTkyLTE0LjU1OSAgIGMtNC4wOTMtNS4zMzEtOC4yMzItOC45NDUtMTIuNDE5LTEwLjg0OGwtMS45OTktMS40MzFjLTEuMzMyLTAuOTUxLTIuNTY4LTIuMDk4LTMuNzExLTMuNDI5Yy0xLjE0Mi0xLjMzMS0xLjk5Ny0yLjY2My0yLjU2OC0zLjk5NyAgIGMtMC41NzItMS4zMzUtMC4wOTgtMi40MywxLjQyNy0zLjI4OWMxLjUyNS0wLjg1OSw0LjI4MS0xLjI3Niw4LjI4LTEuMjc2bDUuNzA4LDAuODUzYzMuODA3LDAuNzYzLDguNTE2LDMuMDQyLDE0LjEzMyw2Ljg1MSAgIGM1LjYxNCwzLjgwNiwxMC4yMjksOC43NTQsMTMuODQ2LDE0Ljg0MmM0LjM4LDcuODA2LDkuNjU3LDEzLjc1NCwxNS44NDYsMTcuODQ3YzYuMTg0LDQuMDkzLDEyLjQxOSw2LjEzNiwxOC42OTksNi4xMzYgICBjNi4yOCwwLDExLjcwNC0wLjQ3NiwxNi4yNzQtMS40MjNjNC41NjUtMC45NTIsOC44NDgtMi4zODMsMTIuODQ3LTQuMjg1YzEuNzEzLTEyLjc1OCw2LjM3Ny0yMi41NTksMTMuOTg4LTI5LjQxICAgYy0xMC44NDgtMS4xNC0yMC42MDEtMi44NTctMjkuMjY0LTUuMTRjLTguNjU4LTIuMjg2LTE3LjYwNS01Ljk5Ni0yNi44MzUtMTEuMTRjLTkuMjM1LTUuMTM3LTE2Ljg5Ni0xMS41MTYtMjIuOTg1LTE5LjEyNiAgIGMtNi4wOS03LjYxNC0xMS4wODgtMTcuNjEtMTQuOTg3LTI5Ljk3OWMtMy45MDEtMTIuMzc0LTUuODUyLTI2LjY0OC01Ljg1Mi00Mi44MjZjMC0yMy4wMzUsNy41Mi00Mi42MzcsMjIuNTU3LTU4LjgxNyAgIGMtNy4wNDQtMTcuMzE4LTYuMzc5LTM2LjczMiwxLjk5Ny01OC4yNGM1LjUyLTEuNzE1LDEzLjcwNi0wLjQyOCwyNC41NTQsMy44NTNjMTAuODUsNC4yODMsMTguNzk0LDcuOTUyLDIzLjg0LDEwLjk5NCAgIGM1LjA0NiwzLjA0MSw5LjA4OSw1LjYxOCwxMi4xMzUsNy43MDhjMTcuNzA1LTQuOTQ3LDM1Ljk3Ni03LjQyMSw1NC44MTgtNy40MjFzMzcuMTE3LDIuNDc0LDU0LjgyMyw3LjQyMWwxMC44NDktNi44NDkgICBjNy40MTktNC41NywxNi4xOC04Ljc1OCwyNi4yNjItMTIuNTY1YzEwLjA4OC0zLjgwNSwxNy44MDItNC44NTMsMjMuMTM0LTMuMTM4YzguNTYyLDIxLjUwOSw5LjMyNSw0MC45MjIsMi4yNzksNTguMjQgICBjMTUuMDM2LDE2LjE4LDIyLjU1OSwzNS43ODcsMjIuNTU5LDU4LjgxN2MwLDE2LjE3OC0xLjk1OCwzMC40OTctNS44NTMsNDIuOTY2Yy0zLjksMTIuNDcxLTguOTQxLDIyLjQ1Ny0xNS4xMjUsMjkuOTc5ICAgYy02LjE5MSw3LjUyMS0xMy45MDEsMTMuODUtMjMuMTMxLDE4Ljk4NmMtOS4yMzIsNS4xNC0xOC4xODIsOC44NS0yNi44NCwxMS4xMzZjLTguNjYyLDIuMjg2LTE4LjQxNSw0LjAwNC0yOS4yNjMsNS4xNDYgICBjOS44OTQsOC41NjIsMTQuODQyLDIyLjA3NywxNC44NDIsNDAuNTM5djYwLjIzN2MwLDMuNDIyLDEuMTksNi4yNzksMy41NzIsOC41NjJjMi4zNzksMi4yNzksNi4xMzYsMi45NSwxMS4yNzYsMS45OTUgICBjNDQuMTYzLTE0LjY1Myw4MC4xODUtNDEuMDYyLDEwOC4wNjgtNzkuMjI2YzI3Ljg4LTM4LjE2MSw0MS44MjUtODEuMTI2LDQxLjgyNS0xMjguOTA2ICAgQzQzOC41MzYsMTg0Ljg1MSw0MjguNzI4LDE0OC4xNjgsNDA5LjEzMiwxMTQuNTczeiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />
                  <br />
                  Romanx
                </Heading>
              </Fill>
            </Layout>
          </div>
          <Appear>
            <List textColor="secondary">
              <ListItem>Not a "Rockstar"</ListItem>
              <ListItem>Can't read the matrix</ListItem>
              <ListItem>Likes dogs</ListItem>
              <ListItem>❤ dotnet</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps lineHeight={1}>
            What exactly is "Open Source"?
          </Heading>
          <BlockQuote>
            <Quote textSize="2rem">
              A type of computer software with its source code made available with a license in
              which the copyright holder provides the rights to study, change, and distribute the
              software to anyone and for any purpose.
            </Quote>
            <Cite>Wikipedia</Cite>
          </BlockQuote>
          <Text textColor="primary">
            For help with choosing a licence:<br />
            <a style={linkStyle}>{'https://choosealicence.com'}</a>
          </Text>
        </Slide>
        <Slide notes={'- First Bug & Ownership of Nustache<br/> - Outgrowing JDiamonds code and wanting "new"'} transition={['fade']}>
          <Heading size={1} fit caps lineHeight={1}>
            How I fell down the hole...
          </Heading>
          <Layout>
            <Fill>
              <span style={logoStyles}>}</span>
              <Heading size={5} caps margin={10}>
                Mustache
              </Heading>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary" notes={'- Greenfield can be bad<br/>- 70 days between start and "almost" beta Alpha 15<br/>- Scope Creep and 265 days to Between Alpha 15 and 16'}>
          <Heading size={1} fit caps lineHeight={1}>
            Where it all went wrong
          </Heading>
          <video loop autoPlay src="https://media.giphy.com/media/WUFgopvwap3AA/giphy.mp4" />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps lineHeight={1}>
            Where it all went wrong
          </Heading>
          <img style={{ height: '40rem' }} src="/images/alpha16.jpg" />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary" notes={'- Burnout on something you choose<br/>- Feeling stupid and imposter syndrome<br/>- Breakthrough but why I didn\'t make a beta<br/>- Everything I consider common sense at work, I didn\'t do for myself.'}>
          <Heading size={1} fit caps lineHeight={1}>
            Where it all went wrong
          </Heading>
          <List textColor="primary">
            <Appear>
              <ListItem>The allure of a rewrite</ListItem>
            </Appear>
            <Appear>
              <ListItem>Burnout</ListItem>
            </Appear>
            <Appear>
              <ListItem>Try to have something in a releasable state as often as you can.</ListItem>
            </Appear>
            <Appear>
              <ListItem>"Perfect is the enemy of good"</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Heading size={1} fit caps lineHeight={1}>
            Getting the most out of being open source
          </Heading>
          <Heading size={2} fit caps lineHeight={1}>
            Source Control
          </Heading>
          <List textColor="secondary">
            <Appear>
              <ListItem>Github</ListItem>
            </Appear>
            <Appear>
              <ListItem>Bitbucket</ListItem>
            </Appear>
            <Appear>
              <ListItem>VSTS/GitLab</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps lineHeight={1}>
            Getting the most out of being open source
          </Heading>
          <Heading size={2} fit caps lineHeight={1} textColor="primary">
            Code Quality
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Continuous Integration
                <List padding="0 2rem">
                  <ListItem>Appveyor</ListItem>
                  <ListItem>Travis</ListItem>
                </List>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Code Coverage
                <List padding="0 2rem">
                  <ListItem>CodeCov</ListItem>
                  <ListItem>Coveralls</ListItem>
                </List>
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide notes={'- Open source projects and Developers<br/>- Similar Projects<br/>- NodaTime<br/>- Markdig (Copying code with licences)<br/>- Blogs'}>
          <Heading size={1} fit caps lineHeight={1}>
            Getting the most out of being open source
          </Heading>
          <Heading size={2} fit caps lineHeight={1}>
            Other open source projects and Developers
          </Heading>
          <List textColor="secondary">
            <Appear>
              <ListItem>
                Morning Dew:<br />
                <a style={linkStyle}>{'https://www.alvinashcraft.com/'}</a>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Steve Gordon<br />
                <a style={linkStyle}>{'https://www.stevejgordon.co.uk/'}</a>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Matthew Warren<br />
                <a style={linkStyle}>{'https://mattwarren.org/'}</a>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Alexandre Mutel<br />
                <a style={linkStyle}>{'http://xoofx.com/'}</a>
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps lineHeight={1}>
            Getting the most out of being open source
          </Heading>
          <Heading size={2} fit caps lineHeight={1} textColor="primary">
            Twitter
          </Heading>
          <TwitterRotator users={twitterUsers} />
        </Slide>
        <Slide>
          <Heading size={1} fit caps lineHeight={1}>
            So how can <u>you</u> get started?
          </Heading>
          <List textColor="secondary">
            <Appear>
              <ListItem>
                Github Explore:<br />
                <a style={linkStyle}>{'https://github.com/explore/'}</a>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Up for Grabs<br />
                <a style={linkStyle}>{'https://up-for-grabs.net/'}</a>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Documentation<br />
                <span style={{ fontSize: '1.5rem' }}>
                  Build popular projects and contribute helpful documentation on building or getting
                  it running
                </span>
              </ListItem>
            </Appear>
          </List>
          <TwitterRotator users={twitterUsers} />
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps lineHeight={1}>
            Thank you for listening
          </Heading>
          <div style={{ fontSize: '1.5rem', padding: '1.5rem 0' }}>
            <a style={linkStyle}>{'https://github.com/Romanx/falling-down-holes'}</a>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <TwitterRotator users={twitterUsers} />
          </div>
        </Slide>
        <Slide bgColor="secondary" textColor="primary" notes={'- Exciting Time in .Net Open Source<br/>- Talk is Open source on github (React slides thanks to FormidableLabs & Spectacle)<br/>-Thank Netlify<br/>- Thank you everyone'}>
          <Heading size={1} fit caps lineHeight={1}>
            Thank you for listening
          </Heading>
          <span style={{ fontSize: '1.5rem' }}>
            Learn as much as you can from everyone you can, embrace diversity and encourage it
          </span>
          <div style={{ marginTop: '2rem' }}>
            <TwitterRotator users={twitterUsers} />
          </div>
        </Slide>
      </Deck>
    );
  }
}
