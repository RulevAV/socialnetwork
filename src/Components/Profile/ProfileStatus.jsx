import React, {useState} from 'react';
class ProfileStatus extends React.Component{
    state = {
        editMode:false,
        status:this.props.status
    }
    activateEditMode = ()=>{
        this.setState({
            editMode: true,
        });
    }
    deactivateEditMode= ()=>{

        this.setState({
            editMode: false,
        });
        this.props.UpdateStatus(this.state.status);
    }
    onStatusChange = (e) =>{
       this.setState({status:e.currentTarget.value});
    }
    componentDidUpdate(prevProps, prevState, snapshot) {

        if (prevProps.status !==this.props.status)
        {
            this.setState({
                status:this.props.status
            })
        }
    }

    render() {
        return <div>
            <>
                {
                    !this.state.editMode &&
                    <div>
                        <span onClick={this.activateEditMode } >{this.state.status || "no status"}</span>
                    </div>
                }
                {
                    this.state.editMode &&
                    <div>
                        <input  onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}  value={this.state.status}/>
                    </div>
                }

            </>

        </div>
    }


}

const ProfileStatusHook = (props)=>{

    let [editMode,SetEditMode] = useState(false);
    let [status,Setstatus] = useState(props.status);
    const activeMode = () =>{
        SetEditMode(true);
    }
    const  deactivateEditMode= ()=>{

        SetEditMode(false);
        props.UpdateStatus(status);
    }
    const onStatusChange = (e) =>{
        Setstatus(e.currentTarget.value);
    }
    return <div>
        <>
            {!editMode &&

                <div>
                    <span onClick={activeMode } >{props.status || "no status"}</span>
                </div>
            }
            {
                editMode &&
                <div>
                    <input onBlur={deactivateEditMode} onChange={onStatusChange}  autoFocus={true}  value={status}/>
                </div>
            }

        </>

    </div>
}

export default  ProfileStatusHook;