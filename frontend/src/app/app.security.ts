import { CookieXSRFStrategy } from "@angular/http/";



export function xsrfValue() {
   return new CookieXSRFStrategy('CSRF-TOKEN', 'X-CSRF-TOKEN');
}
