import React, { Component } from 'react'
import house from './house'

export default class Card extends Component {

  constructor(props){
   super(props);
   this.state={
    uy:house
   }
  }
  render()
   {
    const onSearch=(e)=>{
    const {value}=e.target
    const res= house.filter(({city})=>city.toLowerCase().includes(value.toLowerCase()))
    this.setState({uy:res})
    }
  

    return (
        <>
        <div className="flex justify-center pt-5 mb-5">
       
       <div>
        <input onChange={onSearch} className="  outline-none w-[400px] p-3 pl-6 border
         border-zinc-400 rounded-md"  type="text" 
        placeholder=' Enter an address, neighborhood, city, or ZIP code' />
       </div>
       <div className="ml-5 flex justify-center items-center">
        <button className='bg-blue-600 rounded-sm text-white px-9 py-3'>
            Search
        </button>
       </div>
        
      </div>
      <div className="text-center mt-8">
        <h1 className="text-4xl font-semibold">Properties</h1>
        <p className="text-zinc-400 mt-2">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
      </div>
        <div className='w-[80%] mt-5 mx-[auto]'>
         {
          this.state.uy.map(({img,city})=>{
            return(
              <div className='border inline-block rounded-sm ml-5 border-gray-400'>
              <img src={img} alt='#'/>
              <h1>{city}</h1>
              </div>      
                )
          })
         } 
        </div>
        </>
      
    )
  }
}
