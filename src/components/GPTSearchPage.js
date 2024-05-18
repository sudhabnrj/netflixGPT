import React from 'react'
import {BgScreen} from '../utils/constants'
// import { useSelector } from 'react-redux';
import GPTSearchBar from './GPTSearchBar';
import GPTMovieSuggetion from './GPTMovieSuggetion';
// import TestSearch from './TestSearch';

const GPTSearch = () => {

  return (
    <main className="fixed h-screen top-0 left-0 right-0">
      <div className="overflow-y-auto max-h-max-height-calc">
        <div className="absolute -z-10 w-full">
          <img src={BgScreen} alt="bg Screen" className="object-cover h-screen w-full" />
          <div className="bg-header-gradient absolute top-0 bottom-0 left-0 right-0 "></div>
        </div>
        <GPTSearchBar/>
        <GPTMovieSuggetion/>
      </div>
    </main>
  )
}

export default GPTSearch
