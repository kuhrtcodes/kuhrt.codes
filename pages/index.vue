<template>
  <div class="kc-home">
    <div class="kc-home__title">
      <h1 class="title mb-0">Kuhrt.Codes</h1>
      <p>TypeScript and JavaScript Developer</p>
    </div>
    <section class="kc-home__hero"></section>
    <section class="kc-home__contact section--green">
      <div class="container">
        <h2 class="h3 mt-0 text-right">Get In Touch</h2>
        <div class="kc-home-contact__links">
          <a class="contact-link" href="mailto:contact@kuhrt.codes">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <span>Email</span>
          </a>
          <a class="contact-link" href="tel:8063195726">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>Phone</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api';

export default defineComponent({
  setup() {
    onMounted(() => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);

      window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      });
    });
  },
});
</script>

<style lang="scss">
.kc-home {
  position: relative;
  width: 100%;

  .kc-home__title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 10;
  }

  .kc-home__hero {
    @apply flex justify-center items-center text-center;
    position: relative;
    min-height: 70vh;
    min-height: calc(var(--vh, 1vh) * 70);
    overflow: hidden;

    & > * {
      position: relative;
      z-index: 10;
    }

    &:after {
      content: '';
      @apply bg-green-500;
      position: absolute;
      top: 90%;
      left: 0;
      width: 100%;
      height: 50%;
      transform: skewY(-5deg);
      z-index: 1;

      @media screen and (min-width: $lg) {
        top: 80%;
      }

      @media screen and (min-width: $xxl) {
        top: 85%;
      }
    }
  }

  .kc-home__contact {
    position: relative;
    text-align: right;
    min-height: 30vh;
    min-height: calc(var(--vh, 1vh) * 30);

    .container {
      position: absolute;
      right: 1.5rem;
      bottom: 1.5rem;

      @media screen and (min-width: $xxl) {
        max-width: 100%;
        padding: 0;
      }
    }

    .kc-home-contact__links {
      display: inline-block;

      .contact-link {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-size: 1.25rem;
        @include default-transition;

        &:hover,
        &:focus {
          @apply text-black;
        }

        svg {
          width: 1.75rem;
          height: 1.75rem;
          margin-right: 1rem;
        }
      }
    }
  }
}
</style>
