import React from 'react'
import {ActionCreatorAddDialog, ActionCreatorUpdateDialogText} from "../../Readux/Reducer-Dialog";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthContainer} from "../../HOC/AuthHOC";
import {compose} from "redux";

let RedirectComponent = WithAuthContainer(Dialogs)


let mapStateToProps = (state) => {
    return {
        newDialog: state.DialogPage.newDialog,
        DialogData: state.DialogPage.DialogData,
        newText: state.DialogPage.newDialog,
        TextData: state.DialogPage.TextData,
        Auth: state.Auth.isAuth
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        OnChandeDialog: (text) => {
            dispatch(ActionCreatorUpdateDialogText(text))
        },
        onaddDialogs: () => {
            dispatch(ActionCreatorAddDialog())
        }
    }
}
export default compose(connect(mapStateToProps, mapDispatchToProps),
    WithAuthContainer
)(RedirectComponent)
