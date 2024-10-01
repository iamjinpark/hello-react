import './App.css';
import MyComponent from './3.Component/MyComponent';
import Say from './3.Component/Say';
import EventPractice from './4.EventHandling/EventPractice.jsx';
import ValidationSample from './5.Ref/ValidationSample.jsx';
import ScrollBox from './5.Ref/ScrollBox.jsx';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        {/* <MyComponent name="react" favoriteNumber={9}>
        리액트
      </MyComponent> */}
        {/* <Say /> */}
        {/* <EventPractice /> */}
        {/* <ValidationSample /> */}

        <ScrollBox
          ref={(ref) => {
            this.ScrollBox = ref;
          }}
        />
        <button onClick={() => this.ScrollBox.scrollBottom()}>맨밑으로</button>
      </div>
    );
  }
}

export default App;
