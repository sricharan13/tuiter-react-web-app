import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <!-- search field and cog -->
        <div class="row mb-2 align-items-center">
            <div class="col-11">
                <i class="fa fa-search position-absolute wd-padding-top-12px wd-padding-left-10px"></i>
                <input type="email" class="form-control rounded-pill ps-5" placeholder="Search Tuiter">
            </div>
            <div class="col-1">
                <a href="explore-settings.html"><i class="fa fa-xl fa-cog"></i></a>
            </div>
        </div>
        
        <!--Nav Bar-->
        <ul class="nav mb-2 nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" href="for-you.html">For You</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="trending.html">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="news.html">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="sports.html">Sports</a>
            </li>
            <li class="nav-item">
                <a class="nav-link d-none d-sm-none d-md-block" href="entertainment.html">Entertainment</a>
            </li>
        </ul>
        
        <!-- image with overlaid text -->
        <div class="card w-100 mb-2">
            <img src="../../images/space-x-starship.webp" alt="Space X Starship" class="card-img rounded-0 w-100">
            <div class="card-img-overlay text-white d-flex align-items-end">
            <h2>SpaceX's Starship</h2>
            </div>
        </div>
        <!-- Posts -->
        ${PostSummaryList()}
    `);
}
export default ExploreComponent;
