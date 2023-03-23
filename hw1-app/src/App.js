import React  from 'react';
import './App.css';

const items = [
  {
    id: "1",
    title: "Home",
    text: "Home page",
    href: "#",
  },
  {
    id: "2",
    title: "News",
    text: "News page",
    href: "#",
  },
  {
    id: "3",
    title: "CallBack",
    text: "CallBack page",
    href: "#",
  },
  {
    id: "4",
    title: "Contacts",
    text: "Contacts page",
    href: "#",
  },

]

class App extends React.Component {
  
    state = {
      currentPage: 'Home'
    }
  

    handlePages = (title) => {
     
      this.setState({currentPage: title}); 
      
  }

  render(){
    return (
      <>
        
        <nav className="App-navigation">
           {items.map(({id, title, href}) => (
                    <a 
                      key={id}
                      href={href}
                      onClick={() => this.handlePages(title)}
                      className="App-link" 
                      >
                      {title}
                    </a> 
             ))}
             
        </nav>
       <div className="App-current_page">
          {this.state.currentPage}
        </div>
      </>

    );
  }
}





export default App;
