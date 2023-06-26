export async function getData() {
  try {
    const response = await fetch(
      'https://games-test-api-81e9fb0d564a.herokuapp.com/api/data',
      {
        headers: { 'dev-email-address': 'teste@gmail.com' },
        signal: AbortSignal.timeout(5000)
      }
    );
    if (response.status >= 200 && response.status < 299) {
      return response.json();
    } else if (response.status >= 500 && response.status < 509) {
      return 'O servidor fahou em responder, tente recarregar a página';
    } else {
      return 'O servidor não conseguirá responder por agora, tente voltar novamente mais tarde';
    }
  } catch (e) {
    return 'O servidor demorou para responder, tente mais tarde';
  }
}
