import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../../data/data';



const StudyCase = () => {
  const {path} = useParams();
  const work = data.find(work => work.path === path);

  return (
    <div>
      <h3>{work.title}</h3>
      <p>{work.content}</p>
    </div>
  )
}

export default StudyCase