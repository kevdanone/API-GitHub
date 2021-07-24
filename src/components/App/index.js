import React, { useState, useEffect } from 'react';
import 'semantic-ui-css/semantic.min.css';
import Header from 'src/components/Header';
import NbResult from 'src/components/NbResult';
import Result from 'src/components/Results';
import { Pagination } from 'semantic-ui-react';


import axios from 'axios'

import gitHubLogo from 'src/assets/images/logo-github.png';
import './styles.scss';

// == Composant
const App = () => {
  const [result, setResult] = useState(0);
  const [repos, setRepos] = useState(null);
  const [valueSearch, setValue] = useState('react');
  const [curentPage, setCurentPage] = useState('1');
  const [totalPage, setTotalPage] = useState('1')
  
 
  const newSearch = (value) => {
    setValue(value);
  }

  const handlePageClick = (e, pageInfo) =>{
    console.log('!!!!');
    console.log(pageInfo);
    setCurentPage(pageInfo.activePage)
  }

  const loadRepo = () => {
    axios.get(`https://api.github.com/search/repositories?q=${valueSearch}&sort=stars&order=desc&page=${curentPage}&per_page=9`)
    .then((response) =>{
      setRepos(response.data)
      setResult(response.data.total_count)
      setTotalPage(Math.ceil(response.data.total_count/9).toString())
      
    })
    .catch(function(error){
      console.log(error);
      setResult(0);
      setRepos(null);
      setTotalPage(1);
    })
  }
  
  useEffect(
    ()=>{
      loadRepo();
    },
    [valueSearch,curentPage]
  );
  

  return <div className="app">
    <img src={gitHubLogo} alt="gitHub logo" />
    <Header handle={newSearch}/> 
    <NbResult nbresult={result}/>
    <Pagination 
    defaultActivePage={1} 
    onPageChange={handlePageClick}
    totalPages={totalPage} 
  />
    <div className = "app--body" >
    {
      repos && repos.items.map((repo) => {
        return <Result key={repo.id} result= {repo} />
      })
    }
    </div>
  </div>
};

export default App;
