import React, { useContext } from 'react';
import { useObserver } from 'mobx-react';
import { StoreContext } from '../index'

export default function Count() {
    const store = useContext(StoreContext)
    return useObserver(() => (
        <div className="row reactions-count" >
            <div className="col-sm" align="left">
              <i class="fas fa-heart"></i>{store.likesCount}
            </div>
            <div className="col-sm" align="right">
                {store.commentsCount} comments
        </div>
        </div>
    ))
}