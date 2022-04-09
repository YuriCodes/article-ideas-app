
function IdeaComponent(props){
    return(
        <div className="content-container">
        <h1 className="idea-title"> {props.title}</h1>
        <p className="idea-desc">{props.description}</p>
        <h3 className="idea-lang">{props.language}</h3>
        </div>
    )
}

export default IdeaComponent;