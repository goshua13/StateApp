import React, { Component } from 'react';

import PageDetail from './pagedetail';
import Buttons from './buttons';
import Header from './Header';

class App extends Component {

state={showComponent: ''}

toggleStuff = (name) => {
  if(name === 'utah'){
    this.setState({ 
      showComponent: 'utah'
    });
  }
    else if(name === 'idaho'){
      this.setState({
        showComponent: 'idaho'
      });
    }
      else if (name === 'texas'){
        this.setState({
          showComponent: 'texas'
        });
      }
    else if (name === 'california'){
      this.setState({
        showComponent:'california'
      });
    }
    else if (name === 'newjersey'){
      this.setState({
        showComponent: 'newjersey'
      });
    }
    else if (name === 'newyork'){
      this.setState({
        showComponent: 'newyork'
      });
    }
  }

  render() {
    return (
      <div className='container'>
        <Header header='Where do you want to visit?' />
        <Buttons toggleStuff={(name) => this.toggleStuff(name)} />
        <PageDetail content={this.state.showComponent} />
      </div>
    );
  }
}

export default App;
