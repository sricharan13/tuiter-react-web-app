const NavigationSidebar = () => {

    return (`
        <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action d-flex align-items-center justify-content-center justify-content-xl-start">
                <i class="fa-brands fa-twitter ms-xl-2"></i>
            </a>
            <a href="../HomeScreen/index.html" id="home" class="list-group-item list-group-item-action d-flex align-items-center justify-content-center justify-content-xl-start">
                <i class="fa fa-home ms-xl-2"></i>
                <span class="d-none d-sm-none d-md-none d-lg-none d-xl-block ms-xl-2">Home</span>
            </a>
            <a href="../ExploreScreen/index.html" id="explore" class="list-group-item list-group-item-action d-flex align-items-center justify-content-center justify-content-xl-start">
                <i class="fa fa-hashtag ms-xl-2"></i>
                <span class="d-none d-sm-none d-md-none d-lg-none d-xl-block ms-xl-2">Explore</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action d-flex align-items-center justify-content-center justify-content-xl-start">
                <i class="fa fa-bell ms-xl-2"></i>
                <span class="d-none d-sm-none d-md-none d-lg-none d-xl-block ms-xl-2">Notifications</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action d-flex align-items-center justify-content-center justify-content-xl-start">
                <i class="fa fa-envelope ms-xl-2"></i>
                <span class="d-none d-sm-none d-md-none d-lg-none d-xl-block ms-xl-2">Messages</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action d-flex align-items-center justify-content-center justify-content-xl-start">
                <i class="fa fa-bookmark ms-xl-2"></i>
                <span class="d-none d-sm-none d-md-none d-lg-none d-xl-block ms-xl-2">Bookmarks</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action d-flex align-items-center justify-content-center justify-content-xl-start">
                <i class="fa fa-list-ul ms-xl-2"></i>
                <span class="d-none d-sm-none d-md-none d-lg-none d-xl-block ms-xl-2">Lists</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action d-flex align-items-center justify-content-center justify-content-xl-start">
                <i class="fa fa-user ms-xl-2 me-1"></i>
                <span class="d-none d-sm-none d-md-none d-lg-none d-xl-block ms-xl-2">Profile</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action d-flex align-items-center justify-content-center justify-content-xl-start">
                <i class="fa fa-ellipsis-h ms-xl-2"></i>
                <span class="d-none d-sm-none d-md-none d-lg-none d-xl-block ms-xl-2">More</span>
            </a>
            <a href="tuit.html" class="mt-2 btn btn-block btn-primary rounded-pill" style="text-size">Tuit</a>
        </div> 
    `);
}


export default NavigationSidebar;