import React, { useState } from 'react'
import Card from "./Card"

const Cards = ({courses, catagory}) => {
  const [likedCourses, setlikedCourses] = useState([]);

  function getCourses() {

    if(catagory==="All"){
        let allCourses = []

        Object.values(courses).forEach(array => {
          array.forEach(coursedata =>{
            allCourses.push(coursedata);
          })
        })
        return allCourses;
    }

    else{
      return courses[catagory];
    }
  
  }

  return (
    <div className=' flex flex-wrap justify-center gap-4 mb-4'>
      {
        getCourses().map( (course) => {
          return <Card key={course.id} course={course} likedCourses={likedCourses} setlikedCourses={setlikedCourses} />
        } )
      }
      
    </div>
  )
}

export default Cards
