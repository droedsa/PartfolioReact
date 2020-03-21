import React from "react";
import "./post-list-item.css"

export default class PostItem extends React.Component {
    render() {
        const {label, like, important, onToggleLiked, onToggleImportant, onDelite} = this.props;

        let classNames = "app-list-item d-flex justify-content-between";
        if (important) {
            classNames += ' important';
        }
        if (like) {
            classNames += ' like';
        }
        return <div className={classNames}>
        <span onClick={onToggleLiked}
              className='app-list-item-label'>
            {label}
        </span>
            <div className='d-flex justify-content-center align-items-center'>
                <button onClick={onToggleImportant}
                        type='button'
                        className='btn-star btn-sm'>
                    <i className='fa fa-star'/>
                </button>
                <button type='button'
                        className="btn-trash btn-sm"
                        onClick={onDelite}>
                    <i className='fa fa-trash-o'/>
                </button>
                <i className="fa fa-heart"/>
            </div>
        </div>
    }
}
