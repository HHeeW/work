import React from 'react'

const Header = () => {
  return (
    <div class="container">
       <header>
           <div class="row">
                <div class="col-2 col-tb-12">
                    <a class="brand" href="#">
                       <span class="material-icons">flutter_dash</span> CAFE
                    </a>
                </div>
                <a href="javascript:void(0);" class="nav-btn" onclick="openNav()"><span class="material-icons">density_medium</span></a>
                <nav class="col-10" id="mynav">
                    <a href="javascript:void(0)" class="close-btn" onclick="closeNav()"><span class="material-icons">close</span></a>
                    <div class="row">
                       <div class="col-8 col-tb-12">
                           <a href="#" class="weight red">홈</a>
                           <a href="#">팬카페</a>
                           <a href="#">카페랭킹</a>
                           <a href="#">내카페</a>
                           <span class="bar"></span>
                           <a href="#" class="red">온라인교실</a>
                       </div>
                       <div class="col-4 col-tb-12 text-right">
                          <a href="#" class="search"><span class="material-icons">search</span></a>
                       </div>
                    </div>
                </nav>
           </div>
       </header>
    </div>
  )
}

export default Header