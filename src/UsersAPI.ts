interface ResponseBody {
  count: number;
  next: string;
  results: User[];
}

interface User {
  id: string;
  name: string;
  birth_year: string;
  created: Date;
  edited: Date;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  skin_color: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}

class UsersAPI {
  url: string;
  loading;

  constructor() {
    this.url = 'https://swapi.dev/api/people/';
    this.loading = true;
  }

  startLoading() {
    this.loading = true;
  }

  finishLoading() {
    this.loading = false;
  }

  async fetch() {
    this.startLoading();
    const response = await fetch(this.url);
    const responseBody: ResponseBody = await response.json();
    this.finishLoading();

    return responseBody;
  }
}

/*
async function fetchUsers() {
  const response = await fetch('https://swapi.dev/api/people/');
  const responseBody: ResponseBody = await response.json();
  console.log(responseBody);
  return responseBody;
}
*/

export type { User };
export default UsersAPI;
