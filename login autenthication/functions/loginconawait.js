export const login = async (email,password) => {

    const response =  await fetch('https://reqres.in/api/login', {
    body: JSON.stringify({
        email,
        password
    }),
    headers: {
        'Content-Type': 'application/json'
    },
    method: 'POST',
    })

    const data = await response.json();
    sessionStorage.setItem('user.token', data.token);
    console.log(data.token); //serve a me per vedere
    return data.token;
};


