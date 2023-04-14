export const TaskDescription2 = () => {
    return (
    <div className="task">
                        **Задача №2** 
                        
                Робота з **Fetching Data HOC,** який відповідає за функціонал для асинхронного запиту.

            2.1. Створити наступні компоненти: **UsersList, User, AlbumsList, Album, withFetchingData**

            - **UsersList** – список усіх юзерів (тобто список із **User**).
            - **User** – описує 1 юзера (*username, email*, *address, phone, company*)
            - **AlbumsList** – список усіх коментарів (Comment)
            - **Album** – описує 1 альбом (*title*)
            - **withFetchingData** – HOC з функціоналом роботи з асинхронним кодом (запит на сервер, отримання даних, стан загрузки, наявність помилки)

            2.2. Списки **(UsersList** **та AlbumsList**)

            - логіку по роботі із асинхронним кодом отримують із HOC – *withFetchingData (див.п2.3)*, який снабжає їх відповідними пропсами:

            ***data*** (результат загрузки – масив певних даних),  ***isLoading*** (стан загрузки), ***error*** (текст помилки)

            - показують компонент Loader, якщо йде загрузка відповідних списків
            - показують компонент Error, якщо наявна помилка при запиті
            - рендерять відповідні списки – результат запиту

            *Примітки:*

            - в якості компонентів Loader і Error можна відобразити 'div' з відповідним текстом
            - компоненти **User** та **Album можна взяти iз попереднього завдання**

            2.3.  **HOC -  withFetchingData**

            - робить асинхронний запит
            - забезпечує WrappedComponent наступними даними:

            ***data*** (результат загрузки даних),  ***isLoading*** (стан загрузки), ***error*** (текст помилки)

            - сcилка для запиту отримується із пропса ***url*** компонента, створеного за допомогою нашого HOC

            2.4. **Ендпоінти** для запитів:

            - юзерів -  https://jsonplaceholder.typicode.com/users?_limit=10
            - альбоми - [https://jsonplaceholder.typicode.com/albums/1/photos?_limit=10](https://jsonplaceholder.typicode.com/albums/1/photos?_limit=10)
    </div>
)}