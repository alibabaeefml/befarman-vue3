<script setup>
import { computed, ref } from "vue";
import { useDisplay } from "vuetify/lib/framework.mjs";
import bg from "@/assets/Images/Header.jpg";
import { useRoute } from "vue-router";
import { useAuthStore } from "@/store/auth";
import LocalStorage from "@/utils/store-management/localStorage";
const mobile = computed(() => useDisplay().width.value < 1080);
const drawer = ref(false);
const loggedIn = ref(true);
const username = computed(() =>
  LocalStorage.get("user") ? LocalStorage.get("user").first_name : "کاربر"
);
defineProps(["currentPath"]);
const routeName = computed(() => useRoute().meta.title);

const logout = () => {
  const { logout } = useAuthStore();
  logout();
};
</script>

<template>
  <div
    v-if="!mobile"
    class="toolbar"
    :style="{
      background: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }"
  >
    <v-toolbar color="rgba(0,0,0,.6)" class="text-white pa-6 ym">
      <v-toolbar-title>
        <h2 class="app-bar-title mm">BEFARMAN APP</h2>
      </v-toolbar-title>
      <v-btn icon>
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-instagram</v-icon>
      </v-btn>
      <v-btn @click="logout"
        >خروج
        <v-icon>mdi-logout</v-icon>
      </v-btn>
      <v-btn>پروفایل<v-icon>mdi-account</v-icon> </v-btn>
      <div>{{ username }} عزیز، خوش آمدی</div>
      <router-link to="/" class="link">
        <v-btn icon>
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </router-link>
    </v-toolbar>
    <div class="AdminHeader" v-if="!currentPath.includes('Login')">
      <div style="font-family: mm; font-size: 20px; letter-spacing: 10px">
        MANAGEMENT
      </div>
      <div style="font-family: yr; font-size: 20px">
        <router-link class="link" :to="{ name: 'dashboard' }"
          >مدیریت</router-link
        >
        <span style="font-size: 15px; margin-right: 10px">
          {{ currentPath !== "/Admin/Home" ? " > " + routeName : "" }}
        </span>
      </div>
    </div>
  </div>
  <div v-else>
    <v-app-bar color="black">
      <v-toolbar-title>
        <h4 class="app-bar-title mm">BEFARMAN APP</h4>
      </v-toolbar-title>
      <v-btn
        class="menu-btn"
        size="large"
        icon="mdi-dots-vertical"
        @click="drawer = !drawer"
      />
    </v-app-bar>
  </div>
  <div>
    <v-card style="z-index: 3">
      <v-navigation-drawer
        v-model="drawer"
        @click:outside="drawer = false"
        :rail="false"
        permanent
        location="right"
      >
        <v-list density="compact" nav right :style="{ fontFamily: 'ym' }">
          <router-link to="/">
            <v-list-item
              prepend-icon="mdi-home"
              title="داشبورد"
              value="home"
            ></v-list-item>
          </router-link>
          <v-list-item prepend-icon="mdi-account" title="پروفایل" value="Login">
          </v-list-item>
          <v-list-item
            @click="logout"
            prepend-icon="mdi-logout"
            title="خروج"
            value="logout"
            v-if="loggedIn"
          >
          </v-list-item>
          <v-list-item
            prepend-icon="mdi-twitter"
            title="twitter"
            value="twitter"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-instagram"
            title="instagram"
            value="instagram"
          ></v-list-item>
        </v-list>
        <v-btn
          variant="text"
          icon="mdi-chevron-right"
          @click="drawer = false"
        ></v-btn>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>
<style scoped>
.toolbar {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;
  font-size: 15px;
}

.AdminHeader {
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding: 10px 30px;
  color: white;
  background: rgba(0, 0, 0, 0.6);
}

.AdminHeader * {
  text-shadow: 0 0 4px black;
}

.app-bar-title {
  letter-spacing: 1.5px;
}

button {
  font-size: 15px;
}
</style>
