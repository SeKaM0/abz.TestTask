const API_URL_USERS = 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6';
const API_URL_POSITIONS = 'https://frontend-test-assignment-api.abz.agency/api/v1/positions';
const API_POST = 'https://frontend-test-assignment-api.abz.agency/api/v1/users';
const API_TOKEN = 'https://frontend-test-assignment-api.abz.agency/api/v1/token';

export const getData = async (url: string = API_URL_USERS) => {
  const response = await fetch(url);

  const users = await response.json();

  return users;
};

export const getPositions = async () => {
  const response = await fetch(API_URL_POSITIONS);

  const positions = await response.json();

  return positions.positions;
};

export const uploadUser = async (data: FormData) => {
  const responseToken = await fetch(API_TOKEN);
  const token = await responseToken.json();

  const response = await fetch(API_POST, {
    method: 'POST',
    body: data,
    headers: {
      // eslint-disable-next-line quote-props
      'Token': token.token,
    },
  });

  const responseData = await response.json();

  return responseData;
};
