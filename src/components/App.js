import React from 'react';
import ZerodegreesK from '../apis/zerodegreesk';

class App extends React.Component {

  componentDidMount() {

    ZerodegreesK.get('/posts/337', {
      params: {
        _fields: 'id, title, thumbnail_image, tldr'
      }
    }).then((res) => {
      console.log(res.data);
    });

  }

  render() {
    return (
      <div id="page">
        <h1>Trip Tracker</h1>
        <p>Coming Soon</p>
      </div>
    );
  }
}

export default App;
