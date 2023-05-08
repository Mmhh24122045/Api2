import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

const Test = () => {
const [test, setTest] = useState('')
const [video, setVideo] = useState()
const [img, setImg] = useState('');
const [bool, setBool] = useState(true)

// useEffect(() => {
//   const fetchImg = async() => {
//       try {
//           const res = await axios.get(`https://pixabay.com/api/?key=36174276-91142838160c7a86430b18f38&q=${test}}&image_type=photo`)
//           console.log(res)
//           setImg(res.data.hits)
//           setBool(false)
       
         
//       } catch (error) {
//           console.log(error)
//       }
//   }
//   fetchImg()
// }, [test])

const handleSubmit = (e) => {
    e.preventDefault();

    const fechVideo = async() =>{
      try {
        const res = await axios.get(`https://pixabay.com/api/videos/?key=36174276-91142838160c7a86430b18f38&q=${test}`)
        console.log(res)
     setVideo(res.data.hits)
        setBool(false)
      } catch (error) {
        console.log(error)
      }
    }
    fechVideo()
}

  return (
    <div>
       <form action="" onSubmit={handleSubmit}  >
        <input
          type="text"
          placeholder="enter image..."
          value={test}
          onChange={(e) => setTest(e.target.value)}
        />
        <button type="sumbit">Go</button>
      </form>
      {/* exemple images */}
      {/* <div>
        {
            bool? <h3>please enter img</h3>
        :
       <>
       {
        img.map(el=>
          <img src={el.largeImageURL} alt="" height={200} width={200} />
          )
       }
       </>
        }
      </div> */}
      


{/* exemple video */}

{
  bool ? <h3> loading...</h3>:

  // video.map(el=>
  // <iframe src={el.videos.medium.url} frameborder="0"></iframe>
  // )
  <iframe src={video[1].videos.medium.url} frameborder="0"></iframe>
}

    </div>
  )
}

export default Test