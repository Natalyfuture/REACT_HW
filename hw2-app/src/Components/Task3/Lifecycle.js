import React from 'react';
/* import { withRouter } from 'react-router-dom'; */
import '../User.css';



export class LifeCycle extends React.Component {
  state = {
    currentPage: "homeWork",
  };

  componentDidMount() {
    document.title = this.state.currentPage;
  }

  componentDidUpdate() {
    document.title = this.state.currentPage;
  }

  handleClick = () => {
    this.setState({ currentPage: "HomeWork2" });
  };

  render() {
    return (
      <div>
        <div className='task'>TASK 3</div>
        <h2>Current Page: {this.state.currentPage}</h2>
        <button onClick={this.handleClick}>Go to About Page</button>
      </div>
    );
  }
}



 /*  <Routes>
      <Route path='/App' component={lifeCycle} />
      </Routes> */