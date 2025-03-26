import React, { useState } from 'react'
import ServiceCard from './Component/ServiceCard'

const App = () => {
  const [data,setData] = useState([
    {Service:"Web development",
      Description:"It'a all about website and website creation"
    },
    {Service:"FullStack web development",
      Description:"It'a all about website and website creation"
    },
  ])
  return (
    <div>
        <ServiceCard>
          
        </ServiceCard>
    </div>
    // <ServiceCard/>
  )
}

export default App
