import { css } from 'styled-components';

const variables = css`
  --black-025: hsl(210, 8%, 97.5%);
  --black-050: hsl(210, 8%, 95%);
  --black-075: hsl(210, 8%, 90%);
  --black-100: hsl(210, 8%, 85%);
  --black-150: hsl(210, 8%, 80%);
  --black-200: hsl(210, 8%, 75%);
  --black-300: hsl(210, 8%, 65%);
  --black-350: hsl(210, 8%, 60%);
  --black-400: hsl(210, 8%, 55%);
  --black-500: hsl(210, 8%, 45%);
  --black-600: hsl(210, 8%, 35%);
  --black-700: hsl(210, 8%, 25%);
  --black-750: hsl(210, 8%, 20%);
  --black-800: hsl(210, 8%, 15%);
  --black-900: hsl(210, 8%, 5%);

  --orange-050: hsl(27, 100%, 97%);
  --orange-100: hsl(27, 95%, 90%);
  --orange-200: hsl(27, 90%, 83%);
  --orange-300: hsl(27, 90%, 70%);
  --orange-400: hsl(27, 90%, 55%);
  --orange-500: hsl(27, 90%, 50%);
  --orange-600: hsl(27, 90%, 45%);
  --orange-700: hsl(27, 90%, 39%);
  --orange-800: hsl(27, 87%, 35%);
  --orange-900: hsl(27, 80%, 30%);

  --blue-050: hsl(206, 100%, 97%);
  --blue-100: hsl(206, 96%, 90%);
  --blue-200: hsl(206, 93%, 83.5%);
  --blue-300: hsl(206, 90%, 69.5%);
  --blue-400: hsl(206, 85%, 57.5%);
  --blue-500: hsl(206, 100%, 52%);
  --blue-600: hsl(206, 100%, 40%);
  --blue-700: hsl(209, 100%, 37.5%);
  --blue-800: hsl(209, 100%, 32%);
  --blue-900: hsl(209, 100%, 26%);

  --powder-050: hsl(205, 47%, 97%);
  --powder-100: hsl(205, 46%, 92%);
  --powder-200: hsl(205, 53%, 88%);
  --powder-300: hsl(205, 57%, 81%);
  --powder-400: hsl(205, 56%, 76%);
  --powder-500: hsl(205, 41%, 63%);
  --powder-600: hsl(205, 36%, 53%);
  --powder-700: hsl(205, 47%, 42%);
  --powder-800: hsl(205, 46%, 32%);
  --powder-900: hsl(205, 46%, 22%);

  --gold: hsl(48, 100%, 50%);
  --gold-lighter: hsl(48, 100%, 91%);
  --gold-darker: hsl(45, 100%, 47%);

  --silver: hsl(210, 6%, 72%);
  --silver-lighter: hsl(0, 0%, 91%);
  --silver-darker: hsl(210, 3%, 61%);

  --bronze: hsl(28, 38%, 67%);
  --bronze-lighter: hsl(28, 40%, 92%);
  --bronze-darker: hsl(28, 31%, 52%);

  --bc-lightest: var(--black-025);
  --bc-lighter: var(--black-050);
  --bc-light: var(--black-075);
  --bc-medium: var(--black-100);
  --bc-dark: var(--black-150);
  --bc-darker: var(--black-200);

  --fc-dark: hsl(210, 8%, 5%);
  --fc-medium: hsl(210, 8%, 25%);
  --fc-light: hsl(210, 8%, 45%);

  --focus-ring-success: hsla(140, 40%, 75%, 0.4);
  --focus-ring-warning: hsla(47, 79%, 58%, 0.4);
  --focus-ring-error: hsla(358, 62%, 47%, 0.15);
  --focus-ring-muted: hsla(210, 8%, 15%, 0.1);

  --_o-disabled: 0.5;
  --_o-disabled-static: 0.5;

  --bs-sm: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  --bs-md: 0 1px 3px hsla(0, 0%, 0%, 0.06), 0 2px 6px hsla(0, 0%, 0%, 0.06),
    0 3px 8px hsla(0, 0%, 0%, 0.09);
  --bs-lg: 0 1px 4px hsla(0, 0%, 0%, 0.09), 0 3px 8px hsla(0, 0%, 0%, 0.09),
    0 4px 13px hsla(0, 0%, 0%, 0.13);
  --bs-xl: 0 10px 24px hsla(0, 0%, 0%, 0.05), 0 20px 48px hsla(0, 0%, 0%, 0.05),
    0 1px 4px hsla(0, 0%, 0%, 0.1);

  --scrollbar: hsla(0, 0%, 0%, 0.2);

  --highlight-bg: hsl(0, 0%, 96.5%);
  --highlight-color: var(--black-750);
  --highlight-comment: hsl(210, 8%, 43.5%);
  --highlight-punctuation: var(--black-600);
  --highlight-namespace: hsl(27, 99%, 36%);
  --highlight-attribute: hsl(206, 98.5%, 29%);
  --highlight-literal: hsl(27, 99%, 36%);
  --highlight-symbol: hsl(306, 43%, 35%);
  --highlight-keyword: hsl(206, 98.5%, 29%);
  --highlight-variable: hsl(80, 80.5%, 26.5%);
  --highlight-addition: var(--green-700);
  --highlight-deletion: var(--red-600);

  --theme-base-primary-color-h: 27;
  --theme-base-primary-color-s: 90%;
  --theme-base-primary-color-l: 55%;
  --theme-base-primary-color-r: 243.525;
  --theme-base-primary-color-g: 129.9225;
  --theme-base-primary-color-b: 36.975;
  --theme-button-color: var(--blue-600);
  --theme-button-hover-color: var(--blue-700);
  --theme-button-hover-background-color: var(--blue-050);
  --theme-button-active-background-color: var(--blue-100);
  --theme-button-selected-color: var(--blue-900);
  --theme-button-selected-background-color: var(--blue-200);
  --theme-button-filled-color: var(--powder-700);
  --theme-button-filled-background-color: var(--powder-100);
  --theme-button-filled-border-color: var(--powder-500);
  --theme-button-filled-hover-color: var(--powder-800);
  --theme-button-filled-hover-background-color: var(--powder-300);
  --theme-button-filled-active-background-color: var(--powder-400);
  --theme-button-filled-active-border-color: var(--powder-600);
  --theme-button-filled-selected-color: var(--powder-900);
  --theme-button-filled-selected-background-color: var(--powder-300);
  --theme-button-filled-selected-border-color: var(--powder-700);
  --theme-button-outlined-border-color: var(--blue-400);
  --theme-button-outlined-selected-border-color: var(--blue-600);
  --theme-button-primary-background-color: var(--blue-500);
  --theme-button-primary-hover-background-color: var(--blue-600);
  --theme-button-primary-active-background-color: var(--blue-700);
  --theme-button-primary-selected-background-color: var(--blue-800);
  --theme-background-color: var(--white);
  --theme-background-position: top left;
  --theme-background-repeat: repeat;
  --theme-background-size: auto;
  --theme-background-attachment: auto;
  --theme-content-background-color: var(--white);
  --theme-content-border-color: var(--black-100);
  --theme-header-background-color: var(--theme-primary-color);
  --theme-header-background-position: center left;
  --theme-header-background-repeat: repeat;
  --theme-header-background-size: auto;
  --theme-header-background-border-bottom: 0;
  --theme-header-link-color: var(--theme-primary-color);
  --theme-header-sponsored-color: hsla(0, 0%, 100%, 0.4);
  --theme-header-foreground-color: transparent;
  --theme-header-foreground-position: bottom right;
  --theme-header-foreground-repeat: no-repeat;
  --theme-header-foreground-size: auto;
  --theme-footer-background-color: hsl(210, 8%, 15%);
  --theme-footer-background-position: top left;
  --theme-footer-background-repeat: no-repeat;
  --theme-footer-background-size: auto;
  --theme-footer-background-border-top: 0;
  --theme-footer-title-color: hsl(210, 8%, 75%);
  --theme-footer-text-color: hsl(210, 8%, 60%);
  --theme-footer-link-color: hsl(210, 8%, 60%);
  --theme-footer-link-color-hover: hsl(210, 8%, 65%);
  --theme-footer-link-color-active: hsl(27, 90%, 55%);
  --theme-footer-link-caret-color: var(--theme-footer-background-color);
  --theme-footer-divider-color: hsl(210, 8%, 25%);
  --theme-footer-padding-top: 0;
  --theme-footer-padding-bottom: 0;
  --theme-link-color: var(--blue-600);
  --theme-link-color-hover: var(--blue-500);
  --theme-link-color-visited: var(--blue-700);
  --theme-tag-color: var(--powder-700);
  --theme-tag-background-color: var(--powder-100);
  --theme-tag-border-color: transparent;
  --theme-tag-hover-color: var(--powder-800);
  --theme-tag-hover-background-color: var(--powder-200);
  --theme-tag-hover-border-color: transparent;
  --theme-body-font-family: var(--ff-sans);
  --theme-body-font-color: var(--black-800);
  --theme-post-title-font-family: var(--ff-sans);
  --theme-post-title-color: var(--theme-link-color);
  --theme-post-title-color-hover: var(--theme-link-color-hover);
  --theme-post-title-color-visited: var(--theme-link-color-visited);
  --theme-post-body-font-family: var(--ff-sans);
  --theme-post-owner-background-color: var(--theme-secondary-075);
  --theme-post-owner-new-background-color: var(--powder-200);

  --theme-primary-color: #f48225;
`;

export default variables;
