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
          <li class="nav-item active mx-2" v-if="!tokenStatus">
            <a class="nav-link text-white" @click="goLoginPage()">
              <i class="fa-solid fa-house me-1"></i> Log In
              <span class="sr-only">(current)</span></a
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

  <div class="container my-3">
    <div class="row">
      <div class="col-6 offset-3">
        <div class="card shadow-sm">
          <!-- <div class="card-header p-2">
            <legend class="text-center">Log In</legend>
          </div> -->
          <div class="card-body">
            <div class="tab-content">
              <div class="active tab-pane" id="activity">
                <div class="form-group row my-3" v-if="userStatus">
                  <span class="text-danger"
                    ><i class="fa-solid fa-triangle-exclamation me-2"></i
                    >Credentials do not match!</span
                  >
                </div>
                <div class="form-group row my-3">
                  <label for="inputEmail" class="form-label">Email</label>
                  <div class="">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      id="inputEmail"
                      placeholder="Enter email address..."
                      v-model="userData.email"
                    />
                  </div>
                </div>

                <div class="form-group row my-3">
                  <label for="inputPassword" class="form-label">Password</label>
                  <div class="">
                    <input
                      type="password"
                      class="form-control"
                      name="password"
                      id="inputEmail"
                      placeholder="Enter password..."
                      v-model="userData.password"
                    />
                  </div>
                </div>

                <div class="form-group row my-3">
                  <div class="col-sm-10">
                    <button type="button" class="btn" @click="loginToken()">
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../js/LoginPage.js"></script>
