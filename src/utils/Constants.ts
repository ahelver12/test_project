export const TIMEOUTS = {
  SHORT: 3000,
  DEFAULT: 5000,
  MEDIUM: 10000,
  LONG: 30000,
};

export const SELECTORS = {
  BUTTON: 'button',
  INPUT: 'input',
  TEXT_INPUT: 'input[type="text"]',
  PASSWORD_INPUT: 'input[type="password"]',
  CHECKBOX: 'input[type="checkbox"]',
  RADIO: 'input[type="radio"]',
  SELECT: 'select',
  LINK: 'a',
  HEADING_1: 'h1',
  HEADING_2: 'h2',
  HEADING_3: 'h3',
  PARAGRAPH: 'p',
  LABEL: 'label',
  FORM: 'form',
  TABLE: 'table',
  ALERT: '[role="alert"]',
  DIALOG: '[role="dialog"]',
  NAVIGATION: 'nav',
  FOOTER: 'footer',
  HEADER: 'header',
  MAIN: 'main',
};

export const KEYS = {
  ENTER: 'Enter',
  ESCAPE: 'Escape',
  TAB: 'Tab',
  SPACE: ' ',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
};

export const ERROR_MESSAGES = {
  ELEMENT_NOT_FOUND: 'Element not found',
  TIMEOUT: 'Operation timed out',
  NAVIGATION_FAILED: 'Navigation failed',
  ELEMENT_NOT_VISIBLE: 'Element is not visible',
  ELEMENT_DISABLED: 'Element is disabled',
};

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};
