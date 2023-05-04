import React from "react"
import { observer } from "mobx-react-lite"

import BrandAccountItemView from "./BrandAccountItemView"

const BrandAccountListView = ({ brandAccountList }) => (
    <div className="brandAccountList">
        <ul>
            {brandAccountList.items.map((item, idx) => <BrandAccountItemView key={idx} item={item} />)}
        </ul>
    </div>
)

export default observer(BrandAccountListView)