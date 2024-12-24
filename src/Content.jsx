export default function Content(props){
    const{data}=props;
    return <div className="imageContainer">
        <img src={data.hdurl} alt={data.title||`INTO THE VOID PICTURE`} className="bgImage"/>
    </div>;
}