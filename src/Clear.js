import React from 'react'

const Clear = (props) => {
  return (
    <>
        <div className=" h-10 w-10  font-bold pl-28  pt-8 ">
          <div className="h-8 w-20 pl-3.5 pt-1 rounded text-[white] bg-[indigo]" onClick={props.akki}>CLEAR</div>
        </div>
    </>
  )
}

export default Clear