import "./arrow.css"

const Arrow = ({avanzar}) => {
  return (
    <>
<button class="button" onClick={()=>{avanzar()}}>
  <div class="line one">
    <div class="round"></div>
    <div class="round"></div>
    <div class="round"></div>
    <div class="round"></div>

  </div>
  <div class="line two">
    <div class="round"></div>
    <div class="round"></div>
    <div class="round"></div>
    <div class="round"></div>

  </div>
  <div class="line three">
    <div class="round"></div>
    <div class="round"></div>
    <div class="round"></div>
    <div class="round"></div>

  </div>
    <div class="line four">
    <div class="round"></div>
    <div class="round"></div>
    <div class="round"></div>
    <div class="round"></div>

  </div>
    
    <div class="line five">
    <div class="round"></div>
    <div class="round"></div>
    <div class="round"></div>
    <div class="round"></div>

  </div>
    
    <div class="line six">
    <div class="round"></div>
    <div class="round"></div>
    <div class="round"></div>
    <div class="round"></div>

  </div>
    
    <div class="line seven">
    <div class="round"></div>
    <div class="round"></div>
    <div class="round"></div>
    <div class="round"></div>

  </div>
</button></>
  )
}

export default Arrow