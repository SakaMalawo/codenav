<template>
  <div class="home-container">
    <!-- Branding (3/4 de l'écran) -->
    <div class="branding">
      <div class="flames-logo-group">
        <div class="flames">
          <svg class="flame-top" viewBox="0 0 64 64" fill="none">
            <defs>
              <linearGradient
                id="flame-green"
                x1="0"
                y1="64"
                x2="0"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stop-color="#39FF14" />
                <stop offset="100%" stop-color="#00FFA3" />
              </linearGradient>
            </defs>
            <path
              d="M32 2C20 14 8 28 32 62C56 28 44 14 32 2Z"
              fill="url(#flame-green)"
            />
          </svg>
          <svg class="flame-bottom" viewBox="0 0 64 64" fill="none">
            <defs>
              <linearGradient
                id="flame-blue"
                x1="0"
                y1="0"
                x2="0"
                y2="64"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stop-color="#2196F3" />
                <stop offset="100%" stop-color="#00C6FB" />
              </linearGradient>
            </defs>
            <path
              d="M32 62C44 50 56 36 32 2C8 36 20 50 32 62Z"
              fill="url(#flame-blue)"
            />
          </svg>
        </div>
        <span class="brand-name">HAY</span>
      </div>
      <span class="brand-desc">
        La plateforme d'apprentissage moderne et interactive.
      </span>
    </div>

    <!-- Login Interface (1/4 de l'écran) -->
    <div class="login-card">
      <h2>Connexion à Hay</h2>
      <form @submit.prevent="handleLogin" class="github-form">
        <div class="form-group">
          <label for="email">Adresse e-mail</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            autocomplete="username"
            placeholder="ex: saka@hay.com"
          />
        </div>
        <div class="form-group">
          <label for="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            autocomplete="current-password"
            placeholder="Votre mot de passe"
          />
        </div>
        <div class="form-options">
          <label class="remember">
            <input type="checkbox" v-model="remember" />
            Se souvenir de moi
          </label>
          <a href="#" class="forgot">Mot de passe oublié ?</a>
        </div>
        <button type="submit" class="login-btn">
          <span class="mini-flames">
            <svg class="mini-flame-top" viewBox="0 0 64 64" fill="none">
              <defs>
                <linearGradient
                  id="mini-flame-green"
                  x1="0"
                  y1="64"
                  x2="0"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stop-color="#39FF14" />
                  <stop offset="100%" stop-color="#00FFA3" />
                </linearGradient>
              </defs>
              <path
                d="M32 2C20 14 8 28 32 62C56 28 44 14 32 2Z"
                fill="url(#mini-flame-green)"
              />
            </svg>
            <svg class="mini-flame-bottom" viewBox="0 0 64 64" fill="none">
              <defs>
                <linearGradient
                  id="mini-flame-blue"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="64"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stop-color="#2196F3" />
                  <stop offset="100%" stop-color="#00C6FB" />
                </linearGradient>
              </defs>
              <path
                d="M32 62C44 50 56 36 32 2C8 36 20 50 32 62Z"
                fill="url(#mini-flame-blue)"
              />
            </svg>
          </span>
          Se connecter
        </button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </form>
      <div class="register-link">
        Pas encore de compte ? <a href="#">Inscription</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      email: "",
      password: "",
      remember: false,
      errorMessage: "",
    };
  },
  methods: {
    handleLogin() {
      const superUser = {
        username: "saka@hay.com",
        password: "1234",
      };

      if (
        this.email === superUser.username &&
        this.password === superUser.password
      ) {
        this.$router.push("/AppPage");
      } else {
        this.errorMessage = "Identifiants incorrects !";
      }
    },
  },
};
</script>

<style scoped>
.home-container {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  background: #0a0a0a;
  font-family: "Segoe UI", "Roboto", Arial, sans-serif;
}

.branding {
  flex: 3 1 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 320px;
  max-width: 100vw;
  height: 100vh;
  box-sizing: border-box;
}

.flames-logo-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
  width: 100%;
}

.flames {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.flame-top {
  width: 500px;
  height: 500px;
  filter: drop-shadow(0 0 48px #39ff14aa);
  opacity: 0.97;
  z-index: 1;
}

.flame-bottom {
  width: 500px;
  height: 500px;
  filter: drop-shadow(0 0 48px #2196f3aa);
  opacity: 0.97;
  margin-top: -420px;
  z-index: 0;
}

.brand-name {
  font-size: 58px;
  font-weight: bold;
  color: #fff;
  letter-spacing: 0.12em;
  text-shadow: 0 2px 24px #39ff14, 0 2px 24px #2196f3;
  margin-top: 2.5rem;
  white-space: nowrap;
  z-index: 2;
}

.brand-desc {
  color: #fff;
  font-size: 1.25rem;
  margin-top: 2.5rem;
  text-align: center;
  max-width: 420px;
  opacity: 0.85;
  text-shadow: 0 2px 12px #0a0a0a;
}

.login-card {
  flex: 1 1 0;
  min-width: 320px;
  max-width: 420px;
  background: #181c24;
  border-radius: 1.5rem;
  padding: 2.5rem 2rem 2rem 2rem;
  text-align: center;
  margin: auto 0;
  box-shadow: 0 8px 32px #000a 0.2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
}

.login-card h2 {
  color: #fff;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
}

.github-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

.form-group label {
  color: #b0b0b0;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.form-group input {
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #232a36;
  background: #232a36;
  color: #fff;
  font-size: 1rem;
  outline: none;
  width: 100%;
  transition: background 0.2s, border 0.2s;
}

.form-group input:focus {
  background: #283040;
  border: 1px solid #39ff14;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 0.95rem;
  color: #b0b0b0;
}

.remember {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.forgot {
  color: #39ff14;
  text-decoration: none;
  transition: color 0.2s;
}

.forgot:hover {
  color: #00ffa3;
}

.login-btn {
  width: 100%;
  padding: 0.85rem 0;
  background: #24292f;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 0.75rem;
  margin-bottom: 1.25rem;
  cursor: pointer;
  transition: background 0.2s;
  box-shadow: 0 2px 12px #0008;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
}

.login-btn:hover {
  background: #333940;
}

.mini-flames {
  display: flex;
  align-items: center;
  gap: 0.1rem;
  margin-right: 0.5rem;
}
.mini-flame-top,
.mini-flame-bottom {
  width: 32px;
  height: 32px;
  display: inline-block;
}

.error {
  color: #ff4d4f;
  font-size: 1rem;
  text-align: center;
  margin-bottom: 1rem;
}

.register-link {
  color: #b0b0b0;
  text-align: center;
  font-size: 1rem;
  margin-top: 1.5rem;
}
.register-link a {
  color: #39ff14;
  text-decoration: none;
  margin-left: 0.25rem;
  transition: color 0.2s;
}
.register-link a:hover {
  color: #00ffa3;
}

@media (max-width: 1200px) {
  .flame-top,
  .flame-bottom {
    width: 220px;
    height: 220px;
    margin-top: 0;
  }
  .flame-bottom {
    margin-top: -260px;
  }
  .brand-name {
    font-size: 38px;
  }
}
@media (max-width: 900px) {
  .home-container {
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
  }
  .branding {
    align-items: center;
    padding-right: 0;
    margin-bottom: 2rem;
    height: auto;
  }
  .brand-desc {
    text-align: center;
  }
  .login-card {
    margin: 0 auto 2rem auto;
    height: auto;
    min-height: 0;
  }
  .flame-top,
  .flame-bottom {
    width: 220px;
    height: 220px;
  }
  .flame-bottom {
    margin-top: -180px;
  }
  .brand-name {
    font-size: 28px;
  }
}
@media (max-width: 600px) {
  .branding {
    min-width: 0;
    padding-right: 0;
  }
  .flames-logo-group {
    gap: 1.2rem;
  }
  .brand-name {
    font-size: 1.5rem;
  }
  .flame-top,
  .flame-bottom {
    width: 90px;
    height: 90px;
  }
  .flame-bottom {
    margin-top: -70px;
  }
  .brand-desc {
    font-size: 1rem;
    max-width: 90vw;
  }
  .login-card {
    padding: 1.5rem 0.5rem 1rem 0.5rem;
    border-radius: 1rem;
    min-width: 0;
    max-width: 100vw;
  }
}
</style>
