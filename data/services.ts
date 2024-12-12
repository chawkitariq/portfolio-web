import type { TService } from "~/types";

export default [
  {
    title: "Nest",
    description:
      "Création d'API sécurisées et performantes avec NestJS, pour des solutions backend évolutives et faciles à maintenir.",
    icon: `<svg width="35" height="35" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.44163 2.31006C9.15084 1.85237 9.24384 1.55056 9.40431 1.23897C9.54797 0.960031 9.60666 0.475281 9.09906 0.0938123C9.56641 -0.0782189 10.3039 0.225937 10.3166 0.783031C10.0454 1.15616 9.30463 1.30444 9.44163 2.31006ZM12.797 12.5949C12.5701 13.3303 12.6735 13.7216 11.6868 15.2486C13.4315 14.0708 14.2546 12.5502 14.5263 10.8243C14.6968 11.544 14.7129 12.1968 14.6459 12.8136C16.0917 10.9102 17.0823 7.07209 13.7503 3.21391C13.6163 4.91931 11.967 6.26213 10.0648 5.73559C13.3263 5.37606 13.5353 1.22887 10.7334 0.27125C10.7882 1.425 9.214 1.04719 9.67694 2.59069C8.07356 1.68353 4.57041 1.49709 3.17775 2.87337C2.45981 3.58287 1.96975 4.16966 1.07247 4.20844C0.331625 4.24044 -0.646687 5.44262 0.626188 6.05744C0.74775 6.56978 1.175 6.8615 1.42275 6.91178C1.36109 7.82413 1.55519 7.35897 1.83956 6.96128C1.744 8.11456 1.9015 7.69909 2.34719 7.10575C6.11813 6.34313 8.20063 9.41837 8.22419 11.3072C8.20763 10.9645 7.65978 10.5659 7.36987 10.6757C7.174 11.0907 6.96056 11.4429 6.69716 11.6167C6.72469 11.3416 6.70591 11.0664 6.65591 10.7913C6.56903 11.124 6.4055 11.4695 6.14412 11.8313C5.62419 11.8603 4.89653 11.4736 5.10819 10.8326C5.40678 10.2091 4.82112 10.0795 4.34931 10.258C3.99478 10.3921 3.75519 10.7635 3.72244 10.879C3.60416 11.2956 3.64306 12.2257 4.452 12.8425C4.23994 12.8815 4.02222 12.9163 3.87419 13.0034C5.25022 13.8356 6.65475 13.5544 7.43687 13.2404C8.71744 12.7262 9.60066 11.3031 9.73884 10.2052C10.0943 11.7494 9.4575 13.4656 8.03016 14.3861C8.43797 14.4292 9.23619 14.1529 10.0524 13.8619C9.43538 14.6385 8.69778 15.3748 7.4895 15.9543C9.86944 15.755 11.6102 14.56 12.797 12.5949" fill="black"/>
</svg>
`,
  },
  {
    title: "React",
    description:
      "Création d'applications web interactives et rapides avec React, pour des interfaces dynamiques et une expérience utilisateur fluide.",
    icon: `<svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.448 16.24C13.9123 17.0012 13.3288 17.7277 12.701 18.415C14.374 20.038 15.929 20.798 16.792 20.299C17.655 19.801 17.774 18.074 17.205 15.815C16.352 16.005 15.426 16.15 14.448 16.24ZM13.138 16.326C12.38 16.3568 11.621 16.3568 10.863 16.326C11.239 16.818 11.621 17.274 12 17.689C12.3807 17.2737 12.76 16.82 13.138 16.326ZM18.178 8.431C20.843 9.195 22.584 10.465 22.584 11.998C22.584 13.531 20.844 14.801 18.179 15.565C18.849 18.255 18.619 20.397 17.292 21.163C15.965 21.93 13.995 21.058 12 19.132C10.006 21.057 8.036 21.93 6.709 21.163C5.382 20.396 5.152 18.255 5.822 15.565C3.157 14.803 1.417 13.533 1.417 12C1.417 10.467 3.157 9.197 5.822 8.433C5.152 5.743 5.382 3.601 6.709 2.834C8.036 2.068 10.006 2.94 12 4.866C13.995 2.94 15.965 2.068 17.292 2.834C18.619 3.601 18.849 5.743 18.179 8.433M17.206 8.185C17.776 5.925 17.656 4.199 16.793 3.7C15.93 3.202 14.375 3.962 12.703 5.585C13.3304 6.27234 13.9136 6.9988 14.449 7.76C15.427 7.85 16.353 7.994 17.206 8.185ZM6.796 15.815C6.227 18.075 6.346 19.801 7.21 20.299C8.073 20.797 9.628 20.038 11.3 18.415C10.6725 17.7273 10.0894 17.0005 9.554 16.239C8.62693 16.1558 7.70608 16.0138 6.797 15.814M10.865 7.672C11.623 7.64118 12.382 7.64118 13.14 7.672C12.7794 7.20213 12.399 6.74772 12 6.31C11.62 6.72667 11.241 7.18133 10.863 7.674M9.553 7.761C10.0884 6.9998 10.6716 6.27334 11.299 5.586C9.627 3.962 8.072 3.202 7.21 3.7C6.347 4.199 6.227 5.926 6.797 8.185C7.65 7.995 8.576 7.851 9.554 7.76M13.894 15.28C14.6061 14.2353 15.2392 13.1389 15.788 12C15.2395 10.8611 14.6067 9.7647 13.895 8.72C12.6344 8.62577 11.3686 8.62577 10.108 8.72C9.39557 9.76464 8.76214 10.861 8.213 12C8.76182 13.1389 9.39492 14.2353 10.107 15.28C11.3676 15.3742 12.6334 15.3742 13.894 15.28ZM15.179 15.148C15.795 15.068 16.3783 14.967 16.929 14.845C16.7486 14.281 16.5444 13.7248 16.317 13.178C15.9648 13.8498 15.5855 14.507 15.18 15.148M8.823 8.851C8.207 8.93167 7.62367 9.033 7.073 9.155C7.243 9.69233 7.44733 10.248 7.686 10.822C8.03816 10.1502 8.41747 9.493 8.823 8.852M7.073 14.846C7.62367 14.9673 8.207 15.0683 8.823 15.149C8.41747 14.508 8.03816 13.8508 7.686 13.179C7.45825 13.7258 7.25373 14.2819 7.073 14.846ZM6.095 14.601C6.357 13.767 6.695 12.893 7.105 12.001C6.71368 11.1566 6.37633 10.2882 6.095 9.401C3.854 10.037 2.418 11.005 2.418 12.001C2.418 12.997 3.854 13.964 6.095 14.601ZM16.93 9.155C16.3787 9.033 15.7953 8.93167 15.18 8.851C15.5855 9.492 15.9648 10.1492 16.317 10.821C16.555 10.2477 16.7593 9.69233 16.93 9.155ZM17.907 9.4C17.647 10.234 17.307 11.108 16.897 12C17.307 12.892 17.647 13.766 17.907 14.6C20.149 13.963 21.585 12.996 21.585 12C21.585 11.004 20.149 10.037 17.907 9.4ZM12 13.879C11.7481 13.8872 11.4971 13.8447 11.2619 13.754C11.0268 13.6632 10.8123 13.5262 10.6312 13.3509C10.4501 13.1756 10.3061 12.9657 10.2077 12.7336C10.1094 12.5015 10.0587 12.252 10.0587 12C10.0587 11.748 10.1094 11.4985 10.2077 11.2664C10.3061 11.0343 10.4501 10.8244 10.6312 10.6491C10.8123 10.4738 11.0268 10.3368 11.2619 10.246C11.4971 10.1553 11.7481 10.1128 12 10.121C12.4877 10.1369 12.9502 10.3419 13.2896 10.6925C13.6289 11.0431 13.8187 11.512 13.8187 12C13.8187 12.488 13.6289 12.9569 13.2896 13.3075C12.9502 13.6581 12.4877 13.8631 12 13.879Z" fill="black"/>
</svg>
`,
  },
  {
    title: "React Native",
    description:
      "Développement d'applications mobiles multiplateformes avec React Native, pour une expérience fluide sur iOS et Android.",
    icon: `<svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.357 9C3.72 9.68 2 10.845 2 12.175C2 14.282 6.405 16 11.85 16C12.59 16 13.11 15.961 13.8 15.903" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.837 15.9C9.424 15.304 9.031 14.767 8.657 14.1C5.906 9.2 5.169 4.33 7.027 3.227C8.177 2.53 10.074 3.48 12.001 5.481" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.429 15.387C5.727 18.075 5.869 20.103 6.989 20.782C8.772 21.862 12.376 18.824 15.032 13.978C15.392 13.308 15.7147 12.6487 16 12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 18.52C13.928 20.52 15.817 21.47 16.978 20.773C18.828 19.671 18.099 14.801 15.345 9.9C14.961 9.223 14.568 8.696 14.165 8.1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.66 15C20.272 14.313 22 13.15 22 11.824C22 9.714 17.592 8 12.155 8C11.408 8 10.889 8.029 10.2 8.087" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 12C8.285 11.34 8.607 10.692 8.968 10.022C11.615 5.178 15.221 2.132 17.014 3.221C18.124 3.9 18.276 5.927 17.574 8.614M12.26 12.015H12.25C12.24 12.145 12.13 12.255 11.99 12.255C11.923 12.2517 11.8599 12.2229 11.8134 12.1746C11.7669 12.1263 11.7407 12.062 11.74 11.995C11.74 11.855 11.85 11.745 11.98 11.745H11.97C12.1 11.735 12.22 11.855 12.22 11.985" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
  },
  {
    title: "Next",
    description:
      "Création d'applications web performantes et SEO-friendly avec Next.js, pour un rendu côté serveur optimisé et une expérience fluide.",
    icon: `<svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.664 17.65L10.26 8H8V16H10V10.946L16.087 18.879C14.3382 19.9195 12.2585 20.2545 10.2714 19.8157C8.28432 19.3769 6.53912 18.1973 5.39108 16.5171C4.24304 14.8369 3.77846 12.7823 4.09191 10.7716C4.40536 8.76094 5.47327 6.94527 7.07827 5.69423C8.68327 4.44319 10.7047 3.85081 12.7311 4.03768C14.7575 4.22455 16.6365 5.17663 17.9856 6.7001C19.3347 8.22357 20.0526 10.2039 19.993 12.238C19.9335 14.2721 19.101 16.2071 17.665 17.649M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22ZM14 12V8H16V12H14Z" fill="black"/>
</svg>
`,
  },
  {
    title: "Vue",
    description:
      "Conception d'applications web rapides et interactives avec Vue.js, pour des interfaces réactives et une navigation agréable.",
    icon: `<svg height="35" width="35" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="m356.9 64.3h-76.9l-56 88.6-48-88.6h-176l224 383.7 224-383.7zm-301.2 32h53.8l114.5 198.2 114.4-198.2h53.8l-168.2 288.2z"/></svg>`,
  },
  {
    title: "Nuxt",
    description:
      "Conception d'applications web performantes et SEO-friendly avec Nuxt.js, pour un rendu côté serveur optimisé et une expérience fluide.",
    icon: `<svg height="35" width="35" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m26.297 27.031.031-.063c.031-.047.052-.099.073-.156v-.005c.099-.26.12-.536.073-.813v.01c-.052-.292-.156-.573-.313-.828l.01.01-7.094-12.474-1.083-1.891-8.156 14.365c-.141.25-.229.521-.276.802v.016c-.057.323-.021.651.109.953l-.005-.01c.016.047.042.089.068.135l-.005-.005c.214.365.667.802 1.667.802h13.198c.208 0 1.234-.042 1.708-.849zm-8.302-12.422 6.479 11.396h-12.953zm13.666 10.579-9.354-16.479c-.099-.177-.635-1.052-1.578-1.052-.422 0-1.026.182-1.521 1.047l-1.208 2.12 1.073 1.896 1.667-2.953 9.255 16.245h-3.521c.047.271.021.547-.073.807v-.01c-.021.057-.042.115-.073.167v-.005l-.031.063c-.474.807-1.495.849-1.693.849h5.505c.203 0 1.219-.042 1.693-.849.214-.37.359-.984-.141-1.844zm-21.921 1.89c-.021-.042-.042-.083-.063-.125v-.005c-.13-.302-.172-.63-.115-.953v.01h-7.563l11.24-19.776 3.687 6.484 1.073-1.891-3.219-5.667c-.089-.161-.63-1.036-1.568-1.036-.422 0-1.031.182-1.521 1.052l-11.385 20.016c-.099.172-.568 1.078-.099 1.885.214.37.667.802 1.667.802h9.531c-.99 0-1.453-.427-1.667-.802z"/></svg>`,
  },
  {
    title: "Symfony",
    description:
      "Création de solutions backend robustes et évolutives avec Symfony, pour des applications web performantes et sécurisées.",
    icon: `<svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM16.37 5.7C17.39 5.67 18.15 6.13 18.21 6.84C18.22 7.15 18.04 7.75 17.42 7.77C16.95 7.79 16.63 7.5 16.62 7.09C16.61 6.93 16.88 6.42 16.88 6.33C16.87 6.06 16.47 6.05 16.36 6.06C14.86 6.11 14.46 8.13 14.14 9.78L14 10.65C14.84 10.78 15.46 10.62 15.8 10.4C16.28 10.09 15.66 9.77 15.74 9.41C15.82 9.04 16.15 8.87 16.41 8.86C16.78 8.85 17.04 9.23 17.03 9.62C17 10.26 16.17 11.14 14.5 11.1C14.28 11.1 14.09 11.08 13.91 11.06C13.3 14.16 12.92 16 11.56 17.58C10.39 18.97 9.2 19.18 8.67 19.2C7.67 19.24 7 18.71 7 18C6.97 17.32 7.57 16.94 7.97 16.93C8.5 16.91 8.87 17.3 8.88 17.74C8.9 18.11 8.7 18.23 8.57 18.3C8.5 18.37 8.35 18.45 8.36 18.6C8.36 18.67 8.43 18.82 8.65 18.81C9.07 18.8 9.34 18.59 9.54 18.45C10.5 17.65 10.88 16.24 11.37 13.68C11.63 12.23 11.82 11.3 12.1 10.38C11.42 9.87 11 9.23 10.09 9C9.46 8.81 9.08 8.96 8.81 9.3C8.5 9.71 8.6 10.23 8.9 10.54C10.05 11.82 10.39 12.38 10.26 13.14C10.06 14.35 8.62 15.27 6.92 14.75C5.47 14.3 5.2 13.28 5.37 12.71C5.53 12.22 5.92 12.12 6.31 12.24C6.73 12.37 6.89 12.87 6.77 13.26C6.75 13.3 6.55 13.67 6.5 13.79C6.41 14.1 6.83 14.31 7.12 14.4C7.77 14.6 8.4 14.26 8.55 13.73C8.7 13.25 8.4 12.91 8.27 12.78C7.38 11.8 6.76 10.93 7.06 9.95C7.18 9.58 7.42 9.18 7.78 8.91C8.53 8.36 9.35 8.26 10.12 8.5C11.13 8.77 11.61 9.44 12.24 9.95C12.59 8.93 13.08 7.92 13.81 7.07C14.47 6.3 15.35 5.74 16.37 5.7Z" fill="black"/>
</svg>
`,
  },
  {
    title: "Laravel",
    description:
      "Création de solutions backend solides et évolutives avec Laravel, un framework PHP moderne, pour des applications web performantes et sécurisées.",
    icon: `<svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.7 6.53C21.71 6.55 21.71 6.58 21.71 6.61V10.9C21.71 11 21.65 11.12 21.56 11.17L17.95 13.25V17.36C17.95 17.47 17.9 17.57 17.8 17.63L10.28 21.96C10.26 21.97 10.24 22 10.22 22H10C10 22 10 21.97 9.96 21.96L2.44 17.63C2.39425 17.6013 2.3565 17.5615 2.33027 17.5143C2.30404 17.4671 2.29019 17.414 2.29 17.36V4.5C2.29 4.45 2.29 4.42 2.3 4.4C2.3 4.39 2.31 4.38 2.31 4.37C2.31 4.35 2.32 4.34 2.33 4.32C2.33 4.31 2.34 4.3 2.35 4.29L2.38 4.26L2.41 4.23C2.42 4.22 2.43 4.21 2.44 4.21L6.2 2.04C6.3 2 6.42 2 6.5 2.04L10.28 4.21C10.29 4.22 10.3 4.22 10.31 4.23L10.34 4.26L10.37 4.29C10.38 4.3 10.39 4.31 10.39 4.32C10.4 4.34 10.41 4.35 10.41 4.37C10.41 4.38 10.42 4.39 10.42 4.4C10.43 4.43 10.43 4.45 10.43 4.5V12.5L13.57 10.72V6.61C13.57 6.58 13.57 6.55 13.58 6.53L13.59 6.5C13.59 6.5 13.6 6.47 13.61 6.45C13.61 6.44 13.62 6.43 13.63 6.42L13.66 6.39L13.69 6.36C13.7 6.35 13.71 6.34 13.72 6.34L17.5 4.17C17.58 4.11 17.7 4.11 17.8 4.17L21.56 6.34C21.57 6.34 21.58 6.35 21.59 6.36L21.62 6.39L21.65 6.42C21.66 6.43 21.66 6.44 21.67 6.45C21.68 6.47 21.68 6.5 21.69 6.5C21.7 6.5 21.7 6.5 21.7 6.53ZM21.09 10.72V7.15L17.95 8.95V12.5L21.09 10.72ZM17.33 17.18V13.6L10.43 17.54V21.15L17.33 17.18ZM2.91 5V17.18L9.81 21.15V17.54L6.21 15.5H6.2C6.19 15.5 6.18 15.5 6.17 15.47C6.16 15.47 6.15 15.46 6.14 15.45L6.11 15.42C6.1 15.41 6.1 15.4 6.09 15.39C6.08 15.37 6.08 15.36 6.07 15.35C6.07 15.33 6.06 15.32 6.06 15.31C6.05 15.3 6.05 15.28 6.05 15.27V6.82L2.91 5ZM6.36 2.68L3.23 4.5L6.36 6.28L9.5 4.5L6.36 2.68ZM9.81 12.88V5L6.67 6.82V14.69L9.81 12.88ZM17.64 4.8L14.5 6.61L17.64 8.41L20.77 6.61L17.64 4.8ZM17.33 8.95L14.19 7.15V10.72L17.33 12.5V8.95ZM10.12 17L17 13.06L13.88 11.26L7 15.23L10.12 17Z" fill="black"/>
</svg>
`,
  },
  {
    title: "Wordpress",
    description:
      "Conception de thèmes et plugins sur mesure pour personnaliser votre site et optimiser son efficacité.",
    icon: `<svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM3.01 12C3.01 10.7 3.29 9.46 3.79 8.34L8.08 20.09C5.08 18.63 3.01 15.56 3.01 12ZM12 20.99C11.12 20.99 10.27 20.86 9.46 20.62L12.16 12.78L14.92 20.35C14.94 20.39 14.96 20.44 14.98 20.47C14.05 20.81 13.05 20.99 12 20.99ZM13.24 7.78C13.78 7.75 14.27 7.69 14.27 7.69C14.75 7.63 14.7 6.92 14.21 6.95C14.21 6.95 12.75 7.06 11.81 7.06C10.93 7.06 9.44 6.95 9.44 6.95C8.96 6.93 8.9 7.67 9.39 7.7C9.39 7.7 9.85 7.76 10.33 7.79L11.73 11.63L9.76 17.53L6.49 7.78C7.03 7.76 7.52 7.7 7.52 7.7C8 7.64 7.95 6.93 7.46 6.96C7.46 6.96 6 7.07 5.06 7.07C4.89 7.07 4.69 7.07 4.48 7.06C6.1 4.62 8.86 3.01 12 3.01C14.34 3.01 16.47 3.9 18.07 5.37C18.03 5.37 17.99 5.36 17.95 5.36C17.07 5.36 16.44 6.13 16.44 6.96C16.44 7.7 16.87 8.33 17.32 9.07C17.66 9.67 18.06 10.44 18.06 11.55C18.06 12.32 17.76 13.21 17.38 14.46L16.48 17.46L13.24 7.78ZM19.89 7.69C21.0127 9.74575 21.2887 12.1585 20.6593 14.4147C20.0299 16.6709 18.5447 18.5923 16.52 19.77L19.27 11.83C19.78 10.55 19.95 9.52 19.95 8.61C19.95 8.28 19.93 7.97 19.89 7.69Z" fill="black"/>
</svg>
`,
  },
] as TService[];
