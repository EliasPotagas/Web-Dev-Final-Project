<template>
    <nav class="navbar is-white has-shadow" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
    <a class="navbar-item">
      <img src="" alt = 'site logo' width="112" height="28">
    </a>
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  <div class="navbar-menu" id ="nav-links">
    <div class="navbar-start">
      <router-link to="/Home" class="navbar-item">
        Home
      </router-link>

      <router-link to="/Statistics" class="navbar-item">
        Statistics
      </router-link>

      <router-link to = "/Friends" class ="navbar-item">
        Friends
      </router-link>

      <router-link to="/Activity" class="navbar-item">
        My Activity
      </router-link>

      <router-link to="/Blog" class="navbar-item">
        Search 
      </router-link>

      <div class="navbar-item has-dropdown is-hoverable">
            <router-link to="/Workout" class="navbar-link">
              Workout
            </router-link>
        <div class="navbar-dropdown">
            <router-link to ="/ViewWorkouts" class="navbar-item">
                View Workouts
            </router-link>
            <router-link to="/Schedule" class="navbar-item">
                Schedule
            </router-link>
            <router-link to ="/Activity" class="navbar-item">
                Activity
            </router-link>
            <router-link to ="/CreatePlan" class="navbar-item">
                Create Plan
            </router-link>
        </div>
      </div>
      <div class="navbar-item has-dropdown is-hoverable">
            <div class="navbar-link">
              Admin
            </div>
        <div class="navbar-dropdown">
            <router-link to ="/Users" class="navbar-item">
                Users
            </router-link>
        </div>
      </div>
    </div>
<!-- Fix login system -->
    <div class="navbar-end">
      <div class="navbar-item">
          <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            <div class="navbar-item has-dropdown is-hoverable">
            <div class="navbar-link">
              Login
            </div>
            <div class="navbar-dropdown">
            <a class="navbar-item" @click="login(Elias,Potagas)">
                Elias Potagas
            </a>
            </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="navbar-burger" id="burger">
        <span></span>
        <span></span>
        <span></span>
    </div>
  </div>
</nav>
</template>

<script>
import session, { login, logout } from '../views/session'
</script>
