<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-dark border rounded">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse d-flex justify-content-end"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav mr-auto bg-dark">
          <li class="nav-item active mx-2">
            <a class="nav-link text-white" @click="goHomePage()">
              <i class="fa-solid fa-house me-1"></i> Home
              <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item mx-2" v-if="!tokenStatus">
            <a class="nav-link text-white" @click="goLoginPage()"
              ><i class="fa-solid fa-key me-1"></i>Log In</a
            >
          </li>
          <li class="nav-item mx-2" v-else>
            <a class="nav-link text-white" @click="logout()"
              ><i class="fa-solid fa-key me-1"></i>Log Out</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <!-- Whats New Start -->
  <section class="whats-news-area mt-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="row d-flex justify-content-between">
            <div class="col-lg-2 col-md-2">
              <div class="section-tittle mb-30">
                <h3 class="">Whats New</h3>
              </div>
            </div>
            <div class="col-lg-7 col-md-7">
              <div class="properties__button">
                <!--Nav Button  -->
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a
                      class="nav-item nav-link active"
                      id="nav-home-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                      @click="categorySearch('')"
                      >All</a
                    >
                    <a
                      class="nav-item nav-link"
                      id="nav-profile-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                      v-for="(category, index) in categoryLists"
                      :key="index"
                      @click="categorySearch(category.title)"
                      >{{ category.title }}</a
                    >
                  </div>
                </nav>
                <!--End Nav Button  -->
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="row mb-4">
                <div class="col-6">
                  <div class="input-group input-group-sm">
                    <input
                      type="text"
                      v-on:keyup.enter="search()"
                      v-model="searchKey"
                      placeholder="Search..."
                      class="form-control form-control-sm"
                    />
                    <button type="submit" @click="search()" class="btn btn-sm">
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </div>
                </div>
              </div>

              <!-- Nav Card -->
              <div class="tab-content" id="nav-tabContent">
                <!-- card one -->
                <div
                  class="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <div class="whats-news-caption">
                    <div class="row">
                      <div class="text-center my-5" v-if="!tokenStatus">
                        <h1 class="text-muted">
                          Sorry. There is no data at the moment.
                        </h1>
                      </div>

                      <div
                        class="col-lg-6 col-md-6"
                        v-else
                        v-for="(post, index) in postLists"
                        :key="index"
                      >
                        <div
                          class="single-what-news mb-100"
                          @click="newsDetails(post.id)"
                        >
                          <div class="what-img">
                            <img v-bind:src="post.image" alt="" />
                          </div>
                          <div class="what-cap">
                            <span class="color1">AZ News</span>
                            <h4>
                              <a href="">{{ post.title }}</a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End Nav Card -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Whats New End -->

  <!--Start pagination -->
  <div class="pagination-area pb-45 text-center">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="single-wrap d-flex justify-content-center">
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-start">
                <li class="page-item">
                  <a class="page-link" href="details.html"
                    ><span class="flaticon-arrow roted"></span
                  ></a>
                </li>
                <li class="page-item active">
                  <a class="page-link" href="details.html">01</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="details.html">02</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="details.html">03</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="details.html"
                    ><span class="flaticon-arrow right-arrow"></span
                  ></a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End pagination  -->
</template>

<script src="../js/HomePage.js"></script>
