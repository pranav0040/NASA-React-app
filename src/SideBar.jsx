export default function SideBar(props){
    const { handleToggleModal, data } = props;
  
    return(<div className="sidebar">
        <div className="bgOverlay" onClick={handleToggleModal}></div>
        <div className="sidebarContents">
        <h1>{data.title||`INTO THE VOID PICTURE`}</h1>
        <div>
            <h5>{data.date}</h5>
            <p className="sideDescription">{data.explanation}</p>
        </div>
        <button onClick={handleToggleModal}>
            <i className="fa-solid fa-arrow-right"></i></button>
        </div>
    </div>);
}