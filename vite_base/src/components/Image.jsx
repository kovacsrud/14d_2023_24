

function Image({image}) {
    const{title,url,thumbnailUrl}=image;
  return (
    <div>
        <p>{title}</p>
        <img src={thumbnailUrl} />
    </div>
  )
}

export default Image