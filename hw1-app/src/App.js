import React, { useState } from 'react';
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

/* const pages = [
  {
    home: <HomePage/>,
    news: <NewsPage/>,
    callBack: <CallBackPage/>,
    contacts: <ContactsPage/>,
  }
] */

function App() {
  
    const [currentPage, setCurrentPage] = useState('Home');
    

    const handleDisplay = (title) => {
      setCurrentPage(title); 
      console.log(setCurrentPage) 
  }

  return (
    <div className="App">
      <header className="App-header">
     
        <div>
       
        <nav className="App-navigation">
           {items.map(({id, title, href}) => (
              <div>
                   <a 
                      href={href}
                      onClick={() => handleDisplay({title})}
                      className="App-link" 
                      key={id}>
                      {title}
                      </a> 
                     
              </div>
             ))}
             
        </nav>
        <div>

{currentPage === 'Home' && <HomePage/>}
{currentPage === 'News' && <NewsPage/>}
{currentPage === 'CallBack' && <CallBackPage/>}
{currentPage === 'Contacts' && <ContactsPage/>}


</div>
     
      
        </div>
         
      </header>
    </div>
  );
}

function HomePage (){
  return <h4>Home page</h4>
}

function NewsPage (){
  return <h4>News page</h4>
}

function ContactsPage (){
  return <h4>Contacts page</h4>
}

function CallBackPage (){
  return <h4>Contacts page</h4>
}



export default App;
