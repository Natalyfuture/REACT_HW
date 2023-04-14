export const TaskDescription1 = () => {
    return (
    <div className="task">
                **Задача №1. 
                
            Робота з Toggler HOC**  - відповідає за функціоналом тоглера (переключення стану  true/false)

        1. Створити компонент **User** тa **Album**, **withToggler**
        - **User** рендерить дані юзера
        - **Album**  - рендерить дані альбома
        - **withToggler –** HOC, який забезпечує функціонал тоглера

        1. **User:**
        - дані для поста можна скопіювати тут - [https://jsonplaceholder.typicode.com/users/1](https://jsonplaceholder.typicode.com/users/1)
        - рендерить данні *username, email*, a також *детальну інформацію* про юзера: address (city, street, suit), phone, company (name)

        та *кнопку “See details” / “hide details”*

        - при початковому рендері детальна інформація прихована, назва кнопки “See details”.
        - при кліці на кнопку в стані “See details” – показуємо детальну інформацію і змінюємо назву кнопки на “Hide details”
        - при кліці на кнопку в стані “ Hide details ” – приховуємо детальну інформацію і змінюємо назву кнопки на “ See details”

        1. **Album  :**
        - ****дані для альбому можна отримати тут - [https://jsonplaceholder.typicode.com/albums/1/photos](https://jsonplaceholder.typicode.com/albums/1/photos) 
        (перший елемент масиву)
        - показує – назву альбома і його картинку
        - Кнопка міняє свій статус (подобається / НЕ подобається) при кліці.

        Іконки для кнопки можна отримати тут -  [https://www.flaticon.com/free-icons/heart](https://www.flaticon.com/free-icons/heart)

        1. Логіку для toggled винести в HOC – **withToggler**.

        Постачає WrappedComponent пропсами:

        ***toggled***  (стан тоглера true/false) і ***changeToggled*** (функція для зміни стану тоглера)
    </div>
)}