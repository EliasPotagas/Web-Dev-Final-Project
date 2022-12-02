<script setup lang="ts">
import session, { login, logout } from "../scripts/session.js";
import { getUsers, User } from "../scripts/user";
import { reactive } from "vue";

const users: User[] = reactive(getUsers());
</script>
<template>
  <nav
    class="navbar is-white has-shadow"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="" alt="site logo" width="112" height="28" />
      </a>
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu" id="nav-links">
      <div class="navbar-start">
        <router-link to="/Home" class="navbar-item"> Home </router-link>

        <router-link to="/Friends" class="navbar-item" v-if="session.user != null"> Friends </router-link>
        <div class="navbar-item has-dropdown is-hoverable">
          <div class="navbar-link" v-if="session.user != null">Workout</div>
          <div class="navbar-dropdown">
            <router-link to="/Workout" class="navbar-item">
              View Workouts
            </router-link>
            <router-link to="/CreatePlan" class="navbar-item">
              Create Plan
            </router-link>
          </div>
        </div>
        <div
          v-if="session.user?.admin"
          class="navbar-item has-dropdown is-hoverable"
        >
          <div class="navbar-link">Admin</div>
          <div class="navbar-dropdown">
            <router-link to="/Admin" class="navbar-item"> Users </router-link>
          </div>
        </div>
      </div>
      <div v-if="session.user == null">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">
                <div class="navbar-item has-dropdown is-hoverable">
                  <div class="navbar-link">Login</div>
                  <div class="navbar-dropdown">
                    <a class="navbar-item" v-for="user in users" :key="user.id"
                      ><button
                        class="button is-normal is-outlined is-rounded"
                        @click="
                          login(
                            user.firstname,
                            user.lastname,
                            user.id,
                            user.isAdmin
                          )
                        "
                      >
                        {{ user.firstname }} {{ user.lastname }} ID:
                        {{ user.id }}
                      </button></a
                    >
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="navbar-end">
          <div class="navbar-item">
            <router-link to="/profile" class="button is-primary is-rounded">Welcome {{ session.user.firstName }} {{ session.user.lastName }}</router-link>
            <div class="buttons">
              <a class="button is-primary" @click="logout">
                <strong>Logout</strong>
              </a>
            </div>
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



