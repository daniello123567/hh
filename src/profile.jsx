import React, { useState } from "react";
import {format} from 'date-fns';
import {Link} from 'react-router-dom'
// import {Route,Router,Routes} from 'react-router-dom'
// import {Link} from "react-router-dom"
// import RepositoryDetails from "./repodata";
// const [repoData,setRepoDate] = useState(false)
// import Repodata from './repodata';
// import Details from "./repodata";

function Profile (props){


  return <>


           <article className="sec">
           {/* <Link to={`/repodetails/${props.name}`}><h2>{props.name}</h2></Link> */}

            <img className="img" src={props.owner.avatar_url} alt="image_of_user" />
            <h4>{props.name}</h4>

            <div className="repoDetails">
  {props.private ? <p className="private">Private</p>: <p className="public">public</p>}
   <div>
    <p>this repository was created at {format(new Date (props.created_at),"dd mm yyyy")} by {props.owner.login}</p>
   </div>
   <div>

    <ul>
      <li>{props.stargazers_count}star(s)</li>
      <li>{props.watchers_count}watcher(s)</li>
    </ul>
   </div>
   <div>
    <p>{props.language}</p>
    <div>
      <ul>{props.topics.map((topic,index)=>{
        return <li key={index}>{topic}</li>
      })}</ul>
      <p>{props.open_issues} issues</p>
    </div>
   </div>
            </div>
            </article>

         </>
}
export default Profile;
