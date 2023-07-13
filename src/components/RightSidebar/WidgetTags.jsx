import React from 'react'
import './RightSide.css'

const WidgetTags = () => {
  const tags = ["javascript", "python","java","c#","php","andriod","html","jquery","c++","css","express","mongoDB","json","node.js","react.js","sql","mysql","r","c","arrays"]
  return (
    <div className='widget-tags'>
      <h4>Watched tags</h4>
      <div className="widget-tags-div">
        {
          tags.map((tag)=>(
            <p key={tag}>{tag}</p>
          ))
        }
      </div>
    </div>
  )
}

export default WidgetTags
