<template>
  <div
    class="min-h-screen flex flex-col dark:bg-gray-900 dark:text-white bg-white text-gray-900 transition-colors duration-300"
  >
    <!-- Navbar et Sidebar affichés sauf sur la page Home -->
    <template v-if="$route.path !== '/'">
      <MainNavbar @toggle-dark-mode="toggleDarkMode" :darkMode="darkMode" />
      <div class="flex flex-1 pt-16">
        <MainSidebar :darkMode="darkMode" />
        <main
          class="flex-1 ml-0 md:ml-64 px-6 pb-6 transition-all duration-300 mt-4"
        >
          <router-view />
        </main>
      </div>
      <!-- Bot persistant, suit le darkmode -->
      <Citra :dark="darkMode" />
    </template>

    <!-- Affichage uniquement de Home.vue -->
    <template v-else>
      <router-view />
    </template>
  </div>
</template>

<script>
import MainNavbar from "./components/MainNavbar.vue";
import MainSidebar from "./components/MainSidebar.vue";
import Citra from "./components/Citra.vue";

export default {
  components: {
    MainNavbar,
    MainSidebar,
    Citra,
  },
  data() {
    return {
      darkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      if (this.darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      this.persistDarkMode();
    },
    persistDarkMode() {
      this.$emit("dark-mode-changed", this.darkMode);
    },
    initializeDarkMode() {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        this.darkMode = true;
        document.documentElement.classList.add("dark");
      }
    },
  },
  created() {
    this.initializeDarkMode();
  },
  mounted() {
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQuery.addEventListener("change", (e) => {
        this.darkMode = e.matches;
        if (e.matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      });
    }
  },
};
</script>

<style>
/* Animation de la flamme */
@keyframes flame {
  0%,
  100% {
    color: #fbbf24; /* Jaune */
    transform: scale(1) translateY(0);
  }
  25% {
    color: #f59e0b; /* Orange */
    transform: scale(1.05) translateY(-2px);
  }
  50% {
    color: #d946ef; /* Violet fushia */
    transform: scale(1.1) translateY(-4px);
  }
  75% {
    color: #ec4899; /* Rose */
    transform: scale(1.05) translateY(-2px);
  }
}

.flame-animation {
  animation: flame 2s infinite ease-in-out;
  filter: drop-shadow(0 0 8px currentColor);
}

.dark .flame-animation {
  filter: drop-shadow(0 0 12px currentColor)
    drop-shadow(0 0 20px rgba(251, 191, 36, 0.3));
}

.flame-container:hover .flame-animation {
  animation-duration: 1s;
  filter: drop-shadow(0 0 12px currentColor);
}

.dark .flame-container:hover .flame-animation {
  filter: drop-shadow(0 0 16px currentColor)
    drop-shadow(0 0 24px rgba(251, 191, 36, 0.4));
}

/* Transition globale */
* {
  transition: background-color 0.3s ease, border-color 0.3s ease,
    color 0.3s ease;
}
</style>
