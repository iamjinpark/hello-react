import { Component } from 'react';
import './App.css';
import MyComponent from './3.Component/MyComponent';
import Say from './3.Component/Say';
import EventPractice from './4.EventHandling/EventPractice.jsx';
import ValidationSample from './5.Ref/ValidationSample.jsx';
import ScrollBox from './5.Ref/ScrollBox.jsx';
import IterationSample from './6. Iteration/IterationSample.jsx';
import LifeCycleSample from './7.LifeCycle/LifeCycleSample.jsx';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000',
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        {/* <MyComponent name="react" favoriteNumber={9}>
        리액트
      </MyComponent> */}
        {/* <Say /> */}

        {/* <EventPractice /> */}

        {/* <ValidationSample /> */}

        {/* <ScrollBox
          ref={(ref) => {
            this.ScrollBox = ref;
          }}
        />
        <button onClick={() => this.ScrollBox.scrollBottom()}>맨밑으로</button> */}

        {/* <IterationSample /> */}

        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycleSample color={this.state.color} />
      </div>
    );
  }
}

export default App;
