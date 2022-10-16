const WhoToFollowListItem = (who) => {
    return(`
        <div class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
            <div class="d-flex">
                <img src=${who.avatarIcon} alt="Java" class="wd-img-48px rounded-circle">
                <div class="d-flex flex-column">
                        <span class="ms-2 wd-font-weight-bold">
                            ${who.userName}
                            <i class="fa fa-check-circle ms-1" aria-hidden="true"></i>
                        </span>
                    <span class="ms-2">@${who.handle}</span>
                </div>
            </div>
            <button class="btn btn-primary me-2 rounded-pill">
                Follow
            </button>
        </div>
   `);
}
export default WhoToFollowListItem;