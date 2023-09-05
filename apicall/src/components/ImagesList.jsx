import ImageItem from "./ImageItem";


function ImagesList({imagesPlaceHolder}) {
    return ( 
    <div  className="imageList">
        {imagesPlaceHolder.map((image,index)=>{
            return <ImageItem key={index} image={image}/>;
        })}
    </div> 
    );
}

export default ImagesList