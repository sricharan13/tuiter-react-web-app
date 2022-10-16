import WhoToFollowListItem from "./WhoToFollowListItem.js";
import whos from "./whos.js"

const WhoToFollowList = () => {
    return (`
        <div class="list-group">
            <div class="list-group-item list-group-item-action wd-font-weight-bold">
                Who to follow
            </div>
            ${whos.map(who => {return(WhoToFollowListItem(who));}).join('')}
        </div>
    `);
}
export default WhoToFollowList;