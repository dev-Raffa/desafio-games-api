export async function getGames() {
  const response = await fetch(
    'https://games-test-api-81e9fb0d564a.herokuapp.com/api/data',
    {
      headers: { 'dev-email-address': 'teste@gmail.com' },
      signal: AbortSignal.timeout(5000)
    }
  )
    .then((response) => {
      return response;
    })
    .catch(() => {
      throw new Error('O servidor demorou para responder, tente mais tarde');
    });

  console.log(response.status);
  if (response.status >= 200 && response.status < 299) {
    return response.json();
  } else if (
    response.status == 500 ||
    (response.status > 501 && response.status < 505) ||
    (response.status > 506 && response.status < 509)
  ) {
    throw new Error('O servidor fahou em responder, tente recarregar a página');
  } else {
    throw new Error(
      'O servidor não conseguirá responder por agora, tente voltar novamente mais tarde'
    );
  }
}
