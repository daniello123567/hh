/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Profile from './profile';
// import { defineConfig, loadEnv } from 'vite';
// import Repodata from './repodata';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
// const Hide = false;
import ErrorBoundary from './ErrorBoundary';
// import {dotenv} from 'dotenv'
// import {env} from 'node:process'

function App() {
  const [items, setItems] = useState([]);
  const [record,setRecord] = useState(items)
  const user = 'daniello123567';
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 3; // Number of items per page
  // console.log(process.env.API_KEY)

  useEffect(() => {
    // const key =

    // console.log(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)

    const fetchInfo = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${user}/repos`, {
          headers: {
            Authorization: `Bearer ${process.env.API_URL}`,
          },
        });
        const data = await res.json();
        // console.log(data)
        setItems(data);
        setRecord(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }

    };
    // console.log(import.meta.env.TOKEN) ;

    fetchInfo();
  }, []);

  // Calculate indices for pagination
  const lastIndex = currentPage * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;
  const currentData = record.slice(firstIndex, lastIndex);

  // Change page number
  const changePageNo = (number) => setCurrentPage(number);
  const Filter = (event)=>{
       setRecord(items.filter((f)=>{
        const result =  f.name.includes(event.target.value);
        return result;



       }))
  }
  return (
    <div className="App">
      {!items ? (
        <Loading />
      ) : (
        <>
          <section>

            <h1>Viewing {user}`s repositories</h1>

              <input onChange={Filter} placeholder='search for repositories' type="text" />

            <div className='body2'>
              <ErrorBoundary>
              {currentData.map((item) => (
                <Profile key={item.id} {...item} />



              ))}
              </ErrorBoundary>
            </div>



          <div className="pagination">
            {Array.from({ length: Math.ceil(items.length / dataPerPage) }).map(
              (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => changePageNo(index + 1)}
                  className={currentPage === index + 1 ? 'active' : ''}
                >
                  {index + 1}
                </button>
              )
            )}
          </div>
          </section>
        </>

      )}

    </div>

  );
}

export default App;
