import React from 'react'

const Filter = ({filterData,setCatagory,catagory}) => {

  function filterHandler(title) {
    setCatagory(title)
  }
  return (
    <div className=" w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center ">

      {
        filterData.map( (data) => {
          return(
              <button onClick={() => filterHandler(data.title)} className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300 "${catagory === data.title ? "bg-opacity-60 border-white" : "bg-opacity-40 border-transparent"}`} key={data.id}>
                {data.title}
              </button>
          )
            
        } )
      }
      
    </div>
  )
}

export default Filter