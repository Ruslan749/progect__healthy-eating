const postData = async (url, data) =>{ //async начало асинхронного кода  await ставиться в тех местах где нужно выполнить паузу чтоб и только потом как функция получит значения код пропкстит ее дальше
    const res = await fetch(url, {
        method: "POST", // создаем метод для запроса (в данном случае мы отправляем)

        headers:  { // заголовок запроса заполняеться в случае json  файлов

            'Content-Type': 'application/json'
        },

        body: data
    });

    return await res.json(); // из переменной res получаем промис и обрабатываем его в json формат
};


export {postData};