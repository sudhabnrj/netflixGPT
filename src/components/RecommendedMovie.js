import React from 'react'
import { useParams } from 'react-router-dom';
import useRecommendedMovie from '../hooks/useRecommendedMovie';

const RecommendedMovie = () => {
    const {movieID} = useParams();
    useRecommendedMovie(movieID);
  return (
    <div className="bg-slate-800 py-8">
        <div className="w-full">          
            <div className="container mx-auto">
                <h2 className="text-white font-bold md:text-3xl text-xl mb-8">Recommendations</h2>
            </div>
        </div>
    </div>
  )
}

export default RecommendedMovie