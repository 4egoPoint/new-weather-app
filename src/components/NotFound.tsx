

import "./style/notFound.css"

const NotFound = () => {
   return (
      <div className='fotFound'>
         <img src={require("../images/not-found.png")} alt="img" />
         <div>City not found, check spell...</div>
      </div>
   )
}

export default NotFound