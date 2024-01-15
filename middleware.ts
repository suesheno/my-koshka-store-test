import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
  const rules = [
    //        `default-src 'self'`,
    //        `script-src 'nonce-${nonce}' 'strict-dynamic'`,
    //        `style-src 'self' 'nonce-${nonce}'`,
    `img-src 'self' blob: data: https://koshka.twic.pics/`,
    `font-src 'self' data:`,
    `object-src 'none'`,
    `base-uri 'self'`,
    `form-action 'self'`,
    `frame-ancestors 'none'`,
    `block-all-mixed-content`,
    `upgrade-insecure-requests`,
    `report-uri https://o4506086568361984.ingest.sentry.io/api/4506414172536832/security/?sentry_key=0d4bc53a1ceb7d5455d9295cf7cd9644`,
  ];
  const cspHeader = rules.reduce((result, item) => {
    return `${result}${item};`;
  }, '');

  // Replace newline characters and spaces
  const contentSecurityPolicyHeaderValue = cspHeader
    .replace(/\s{2,}/g, ' ')
    .trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);

  requestHeaders.set(
    'Content-Security-Policy',
    contentSecurityPolicyHeaderValue
  );

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  response.headers.set(
    'Content-Security-Policy',
    contentSecurityPolicyHeaderValue
  );
  return response;
}

export const config = {
  matcher: [
    {
      source: '/((?!api|_next/static|_next/image|_next/static|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};
