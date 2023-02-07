import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import data from "../../data/data"

const Works = ({theme}) => {

  return (
    <div className='container'>
      <div className='menu'>
        {data.map((work) => (
          <Link key={work.id} to={'/works/' + work.path} className={`${theme} title`}>{work.name}</Link>
        ))}
      </div>
      <Outlet />
    </div>
  )
}

export default Works