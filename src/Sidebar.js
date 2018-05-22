import React from 'react'

import quill from './quill.svg'
import newIcon from './new.png'
import newHover from './new-hover.png'

const Sidebar = () => {
return (
<div className = "Sidebar">
<div className = "logo">
<img src = {quill} alt = "Notehearder" />
</div>




<a href = "a">
<img
    src={newHover}
    alt = "New note"
    />
    <img
      src = {newIcon}

</a>
</div>

)

}

export default Sidebar