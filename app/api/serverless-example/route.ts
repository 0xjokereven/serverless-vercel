import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import axios from 'axios';

export function GET(request: NextRequest) {
  return axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
      return NextResponse.json(
        {
          body: response.data,
          path: request.nextUrl.pathname,
          query: request.nextUrl.search,
          cookies: request.cookies.getAll(),
        },
        {
          status: 200,
        }
      );
    })
    .catch(error => {
      console.error(error);
      return NextResponse.error();
    });
}
