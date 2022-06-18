const navigator = () => {

  const noEdge = (
    <>        
      <p className="mx-auto md:text-xtream text-white font-medium">
        Microsft Edge incluye un lector de texto ¿quieres probarlo?:
      </p>
      {' '}
      <p className="mx-auto bg-yellow-400 text-rose-900 font-bold md:text-font-base">
          Da click <a className='font-extrabold' href='https://www.microsoft.com/es-es/edge?r=1' target="_blank noopener">aqui</a>
      </p>
    </>
  )
  
  let navigator
  if (typeof window !== 'undefined') {
    navigator = window.navigator.userAgentData
  }
  
  if (navigator) {
    const brands = Object.values(navigator?.brands).map(brand => brand.brand)
    if (brands.indexOf('Microsoft Edge') > -1) {
    return (      
      <p className="mx-auto md:text-xtream text-white font-medium">
        <span className="font-bold">Ctrl</span> + <span className="font-bold">Shift</span> + <span className="font-bold">U</span>
        <h6>Para iniciar la lectura en voz alta</h6>
      </p>         
      )
    } else {
      return noEdge
    }} else {
      return noEdge
    }
}

export default navigator
