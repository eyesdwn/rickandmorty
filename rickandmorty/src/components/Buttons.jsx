import React, { useContext } from "react";
import { StoreContext } from '../index'

export default function Buttons() {
    const store = useContext(StoreContext)
    return (
        <div className="row">
            <div className="col-sm">
              <button type="button" className="btn btn-light align-top button" onClick={() => store.updateCount()}>
              <i class="far fa-heart"></i>
               Like
              </button>
            </div>
            <div className="col-sm">
              <button type="button" className="btn btn-light button" onClick={() => document.getElementById('comment').focus()}>
              <i class="far fa-comment"></i>
                Comment
              </button>
            </div>
        </div>
    );
}