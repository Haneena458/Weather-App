import React from 'react'

function Card(props) {
  return (
         <div className="h-40 w-40 bg-gradient-to-tr from-gray-600 rounded-md">
              <p className="p-5 font-semibold text-2xl">{props?.name} </p>
              <div className="flex">
                <p className="text-4xl ps-5">{props?.value} </p>
                <p>&nbsp;&nbsp;{props?.add} </p>
              </div>
          </div>
  )
}

export default Card