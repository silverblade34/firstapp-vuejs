<template>
    <!-- asignamos una clase dinamica en base a una condicion -->
    <aside :class="`${is_expanded && 'is-expanded'}`">
        <div class="logo">
            <img src="../assets/logo.png" alt="">
        </div>
        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="ToggleMenu">
                <span class="material-symbols-outlined">
                    keyboard_double_arrow_right
                </span>
            </button>
        </div>

        <h3>Menú</h3>
        <div class="menu">
            <router-link class="button" to="/">
                <span class="material-symbols-outlined">
                    home
                </span>
                <spna class="text">Home</spna>
            </router-link>
            <router-link class="button" to="/about">
                <span class="material-symbols-outlined">
                    description
                </span>
                <spna class="text">About</spna>
            </router-link>
            <router-link class="button" to="/team">
                <span class="material-symbols-outlined">
                    group
                </span>
                <spna class="text">Team</spna>
            </router-link>
            <router-link class="button" to="/contact">
                <span class="material-symbols-outlined">
                    mail
                </span>
                <spna class="text">Contact</spna>
            </router-link>
        </div>

        <div class="flex"></div>

        <div class="menu settings">
            <router-link class="button" to="/settings">
                <span class="material-symbols-outlined">
                    settings
                </span>
                <spna class="text">Settings</spna>
            </router-link>
        </div>
    </aside>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'SidebarComponent',
  setup() {
    const is_expanded = ref(false);
    const ToggleMenu = (): void => {
        is_expanded.value = !is_expanded.value;
        // Accede al $root y actualiza el marginLeft del main
  const app = document.getElementById("app");
  if (app) {
    const main = app.querySelector("main");
    if (main) {
      main.style.marginLeft = is_expanded.value ? `320px` : "calc(2rem + 52px)";
    }
  }
    };
    
    return { is_expanded, ToggleMenu };
  },
});
</script>


<style lang="scss" scoped>
aside {
    background: var(--grissuave);
    color: var(--white);
    display: flex;
    flex-direction: column;
    width: calc(2rem + 32px);
    overflow: hidden;
    padding: 1rem;
    transition: 0.2s ease-out;
    position: fixed;
    height: 100vh;

    .logo {
        display: flex;
        justify-content: center;
        margin-bottom: 1rem;

        img {
            width: 2rem;
        }
    }

    .flex {
        flex: 1 1 0;
    }

    .menu.settings {
        margin-bottom: 2rem;
    }

    .menu-toggle-wrap {
        display: flex;
        justify-content: center;
        margin-bottom: 1rem;
        position: relative;
        top: 0;
        transition: 0.2s ease-out;

        .menu-toggle {
            transition: 0.2s ease-out;

            .material-symbols-outlined {
                font-size: 2rem;
                color: var(--white);
                transition: 0.2s ease-out;
            }

            &:hover {
                .material-symbols-outlined {
                    color: var(--primary);
                    transform: translateX(0.5rem);
                }
            }
        }
    }

    h3,
    .button .text {
        opacity: 0;
        transition: 0.3s ease-out;
    }

    h3 {
        color: var(--grisfuerte);
        padding: 0rem 1rem;
        text-transform: uppercase;
    }

    .menu {
        margin: 0 -1rem;

        .button {
            display: flex;
            align-items: center;
            text-decoration: none;
            padding: 0.5rem 1rem;

            transition: 0.2s ease-out;

            .material-symbols-outlined {
                font-size: 2rem;
                color: var(--white);
                transform: translateX(0.8rem);
                transition: 0.2s ease-out;
            }

            .text {
                color: var(--white);
                transition: 0.2s ease-out;
            }

            &:hover,
            &.router-link-exact-active {
                background-color: var(--secondary);

                .material-symbols-outlined,
                .text {
                    color: var(--textohover);
                }
            }

            &.router-link-exact-active {
                border-right: 5px solid var(--primary);
            }
        }
    }

    &.is-expanded {
        width: var(--sidebar-width);

        .logo {
            display: block;
            padding: 0 1rem;
        }

        .menu-toggle-wrap {
            justify-content: flex-end;
            top: -3.8rem;

            .menu-toggle {
                transform: rotate(-180deg);
            }
        }

        h3,
        .button .text {
            opacity: 1;
        }

        .button {
            .material-symbols-outlined {
                margin-right: 1.5rem;
            }
        }
    }

    @media (max-width: 768px) {
        position: fixed;
        z-index: 999;
    }
}

</style>