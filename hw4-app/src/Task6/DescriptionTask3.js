export const TaskDescription3 = () => {
    return (
    <div className="task">
                        **Задание #3 - работа с render-props**

        1. Создать компоненты Task3 , DataMaker , Posts , Post
        2. Компонент Task3 
            1. Хранит в себе переменную с url - [https://jsonplaceholder.typicode.com/todos?_limit=10](https://jsonplaceholder.typicode.com/todos?_limit=10)
            2. Внутри себя рендерит div , в котором вложен компонент DataMaker
            3. В DataMaker передается два пропс - url (со значением переменной url) ,и проп renderDataUrl -который в себе использует паттерн render props , а именно принимает data и прокидывай их в компонент Posts в виде пропа
        3. Компонент DataMaker - это функциональный компонент ,который принимает в себя параметры url , и renderDataUrl
            1. Внутри себя компонент имеет состояние posts (в нем буду хранится посты)
            2. Внутри себя выполняется запрос на сервер - используя prop url (который пришел ранее)
            3. Данные полученые с сервера кладутся в state постов
            4. Функциональный компонент возвращает div в котором происходит вызов функции renderDataUrl с передачей постов из state
        4. Компоненты Posts && Post только отображают данные полученые в пропах
            1. Posts получает проп с постами и рисует список, внутри списка рендерятся компоненты Post
            2. В компонент Post передавать все значение одним пропом
            3. Компонент Post -принимает пропы и рисует разметку вида 
            
            ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fe7b2d4d-c346-4f3d-ac4e-4d34034d5d00/Untitled.png)
            

        **Render Props Patern**
            </div>
)}