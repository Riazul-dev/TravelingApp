import React from 'react'
import Service from './Service'
import { services } from '../Data'


const ServiceSection = () => {
  return (
    <div className='w-[70vw] lg:w-[90vw] mx-auto flex flex-col lg:flex-row lg:justify-center lg:border-b lg:pb-20 gap-6'>
      {services.map((service)=>(
        <Service key={service.id} {...service} />
      ))}
    </div>
  )
}

export default ServiceSection
