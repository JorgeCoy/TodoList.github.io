function Todo({todo,index,remove}){
    function handle(){
        remove(index);
    }
    return <div 
        className ="todo" onClick={handle}> {todo.text} (-)
            <small>
                <img src="./images/ok.png" width="18"/>
            </small>
        </div>
}