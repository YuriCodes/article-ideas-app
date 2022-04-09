import './App.css';
import {useState, useEffect} from "react";
import IdeaComponent from './IdeaComponent';
import Header from './Header';
import Footer from './Footer'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


function App() {

  const [ideas, setIdeas] = useState([])
  const [query, searchQuery] = useState("")

  useEffect(() =>{
    fetch("https://article-api-inspiration.herokuapp.com/articles")
    .then(res => res.json())
    .then(data =>{
      setIdeas(data)
    })
      .catch(err =>{
        console.log(err)
      })
  }, [])

  return (
  <div className="App">

  <Header />

  <input 
  className="searchBar"
  placeholder="Search by language" 
  onChange={event => searchQuery(event.target.value)} />
  
   <Box sx={{ flexGrow: 1 }}>
   
   <Grid container 
    justifyContent="center"
    alignItems="center" 
    spacing={{ xs: 4, md: 8 }} 
    columns={{ xs: 5, sm: 9, md: 10 }}> 
    
    {ideas.filter(languageQuery => {
      if (query === '') {
        return languageQuery;
        } else if (languageQuery.language.toLowerCase().includes(query.toLowerCase())) {
          return languageQuery;
          }}).map((idea, index) => (
            
            <Grid item xs={4} sm={4} md={3} key={index}>
            
            <IdeaComponent
            key={index}
            id={index}
            title={idea.title}
            language={idea.language}
            description={idea.description}  
            />
  
           </Grid>
           ))}

  </Grid>   
  </Box>
  <Footer />
  </div>
  );
}

export default App;
