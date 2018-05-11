import * as React from 'react';
import Carousel from 'nuka-carousel';

const twitterImage = {
  borderRadius: '50%',
  width: '128px',
  height: '128px',
  display: 'inline-block',
};

const twitterName = {
  margin: 0,
  fontSize: '1rem',
  padding: '0 1rem',
};

interface TwitterData {
  handle: string;
  name: string;
  image: string;
}

interface TwitterRotatorProps {
  users: TwitterData[];
}

export default class TwitterRotator extends React.Component<TwitterRotatorProps> {
  constructor(props: TwitterRotatorProps) {
    super(props);
  }
  render() {
    const items = this.props.users.map(u => (
      <div
        key={u.handle}
        style={{
          display: 'flex',
          padding: '0.5rem',
          height: '144px',
          width: '100%',
          alignItems: 'center',
        }}
      >
        <img style={twitterImage} src={u.image} />
        <h2 style={twitterName}>
          {u.name}
          <span style={{ display: 'block', fontSize: '1.5rem' }}>@{u.handle}</span>
        </h2>
      </div>
    ));

    return (
      <Carousel
        autoplay={true}
        slidesToShow={2}
        wrapAround={true}
        renderTopCenterControls={null}
        renderCenterLeftControls={null}
        renderCenterRightControls={null}
        renderBottomCenterControls={null}
      >
        {items}
      </Carousel>
    );
  }
}
