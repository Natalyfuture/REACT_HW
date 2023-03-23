import React  from 'react';
import './App.css';

const items = [
  {
    id: "1",
    title: "Home",
    href: "#",
  },
  {
    id: "2",
    title: "News",
    href: "#",
  },
  {
    id: "3",
    title: "CallBack",
    href: "#",
  },
  {
    id: "4",
    title: "Contacts",
    href: "#",
  },

]

const HomePage = () =>  <div>Home page</div>;


const NewsPage = () => <div>News Page</div>;


const CallBackPage = () => <div>CallBack Page</div>;

const ContactsPage = () => <div>Contacts Page</div>;


const pages = {
  
    home: <HomePage />,

    news: <NewsPage />,
  
    callback: <CallBackPage />,
  
    contacts: <ContactsPage />,
 
}


class App extends React.Component {
  
    state = {
      currentPage: 'Home'
    }
  
   
    handlePages = (title) => {
     
      this.setState({currentPage: title}); 
      console.log(this.state)
      
  }

  render(){
    return (
      <>
        
        <nav className="App-navigation">
           {items.map(({id, title, href}) => (
                    <a 
                      key={id}
                      href={href}
                      onClick={() => this.handlePages(title.toLowerCase())}
                      className="App-link" 
                      >
                      {title}
                    </a> 
             ))}
             
        </nav>
       
        <div className="App-current_page">
          {pages[this.state.currentPage]}
        </div>
      </>

    );
  }
}


export default App;
