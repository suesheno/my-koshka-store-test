export interface IAPPMessages {
  code: number;
  text: string;
  html?: {
    code: number;
    text: string;
  };
}
enum HTML_CODES {
  OK,
  CREATED,
  MOVED_PERMANENTLY,
  FOUND,
  NOT_MODIFIED,
  TEMP_REDIRECT,
  PERM_REDIRECT,
  BAD_REQUEST,
  UNAUTHORIZED,
  PAYMENT_REQUIRED,
  FORBIDDEN,
  NOT_FOUND,
  METHOD_NOT_ALLOWED,
  NOT_ACCEPTABLE,
  PROXY_AUTH_REQUIRED,
  REQUEST_TIMEOUT,
  CONFLICT,
  GONE,
  PRECONDITION_FAILED,
  UNSUPPORTED_MEDIA_TYPE,
}
const HTMLMessages = [
  { code: 200, text: 'OK' },
  { code: 201, text: 'Created' },
  { code: 301, text: 'Moved Permanently' },
  { code: 302, text: 'Found' },
  { code: 304, text: 'Not Modified' },
  { code: 307, text: 'Temporary Redirect' },
  { code: 308, text: 'Permanent Redirect' },
  { code: 400, text: 'Bad Request' },
  { code: 401, text: 'Unauthorized' },
  { code: 402, text: 'Payment Required' },
  { code: 403, text: 'Forbidden' },
  { code: 404, text: 'Not Found' },
  { code: 405, text: 'Method Not Allowed' },
  { code: 406, text: 'Not Acceptable' },
  { code: 407, text: 'Proxy Authentication Required' },
  { code: 408, text: 'Request Timeout' },
  { code: 409, text: 'Conflict' },
  { code: 410, text: 'Gone' },
  { code: 412, text: 'Precondition Failed' },
  { code: 415, text: 'Unsupported Media Type' },
];

const BackEndError: Array<IAPPMessages> = [
  {
    code: 100.1,
    text: 'Please check your credentials',
    html: HTMLMessages[HTML_CODES.FORBIDDEN],
  },
  {
    code: 100.2,
    text: 'Error fetching customer profile',
    html: HTMLMessages[HTML_CODES.NOT_FOUND],
  },
  {
    code: 100.3,
    text: 'Request is missing authorization',
    html: HTMLMessages[HTML_CODES.BAD_REQUEST],
  },
];
const FrontEndError: Array<IAPPMessages> = [
  { code: 200.1, text: 'Invalid credentials please validate and try again' },
  { code: 200.2, text: 'Error fetching customer profile' },
  { code: 200.3, text: 'Request is missing authorization' },
  { code: 200.4, text: 'A customer with the same email exists' },
];
// Combine the Message into one object
const GlobalMessages: Array<IAPPMessages> = [...BackEndError, ...FrontEndError];

export enum BACKEND_CODES {
  LOGIN_ERROR = 100.1,
  PROFILE_NOT_FOUND = 100.2,
  MISSING_AUTHENTICATION = 100.3,
}
export enum FRONTEND_CODES {
  LOGIN_ERROR = 200.1,
  PROFILE_NOT_FOUND = 200.2,
  MISSING_AUTHENTICATION = 200.3,
  EMAIL_EXIST = 200.4,
}
export const Message = (code: number) => {
  return GlobalMessages.filter((e) => (e.code = code))[0];
};
