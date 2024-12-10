import React from 'react'
import constants from '../constants'
import NavItem from './NavItem'

const DesktopNav = () => {
  return (
    <div className='hidden h-10 pr-5 lg:flex gap-3 justify-center  items-center'>
        {constants.NavMenu.map((item,index)=>
        <NavItem  item={item} key={index}/>
        )}
    </div>
  )
}

export default DesktopNav