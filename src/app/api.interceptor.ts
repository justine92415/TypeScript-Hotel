import { HttpInterceptorFn } from '@angular/common/http';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.includes('login') || req.url.includes('signup')) {
    return next(req);
  }
  const newRequest = req.clone({
    setHeaders: {
      Authorization: `${localStorage.getItem('token')}`
    }
  })
  return next(newRequest);
};
