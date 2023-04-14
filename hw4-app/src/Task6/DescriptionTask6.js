export const TaskDescription6 = () => {
    return (
    <div className="task">
                        **Задание 6. React Router**

            1.   Создать роутинг для вышеуказанных задании

            Каждое задание (твоё решений заданий 1-5) нужно рендерить на отдельной странице.

            Taкже должны быть страницы  “Main” и “ Tasks Description ”

            “Main” – это стартовая страница (path=”/”). Укажи для нее контент – “*Это решение 4-го  домашнего задания от [твое имя].”*

            1. Header должен содержать линки (ссылки) и кнопку возврата на предыдущую страницу.

            Он должен бить закреплён вверху и отображаться на всех страницах.

            Название ссылок соответствует названию заданий (task 1, task 2 и т.д)

            Стилизация ссылки, которая отвечает за страницу на которой мы находимся, должна отличаться от остальных ссылок.

            1. Для кнопки возврата можно скачать стрелочку, которая тебе понравится здесь: [https://icon-icons.com/download/72692/SVG/512/](https://icon-icons.com/download/72692/SVG/512/)

            При клике на стрелочку нас возвращает на страницу, на которой мы находились до этого (напр. изначально мы были на странице task 3, далее по ссылке перешли на  task 1. Теперь при нажатии на кнопку возврата  нас возвращает обратно на страницу task 3)

            1. Также отдельно создай страницу Tasks Description. Здесь у нас будет описание заданий, которые у тебя есть.

            4.1 При переходе на эту страницу будем изначально видеть только название задание:

            1. Task #1 - Toggler HOC
            2. Task #2 – Fetching Data HOC
            3. Task #3 - render-props
            4. Task #4: - Tooltip
            5. Task #5 - custom hooks

            4.2 При клике на каждое задание внизу под списком показываем детальную информацию об этом задании.

            При этом путь до задания должен выглядеть так: *description**/**idЗадания*.

            Напр.. если description/3 – то отображаем описание к заданию #3

            Для  написания этого роута используйте вложенные роуты (nested routes), напр..

            [https://lh6.googleusercontent.com/ovtA5ri8sHzzul0OSsfJmrHIctCCpdYPcLHW9Ly2J-WQRGA03FsjVfPPP3hPGyC9lzeigJZW3IqUaATEGS2dsCGsPy9fmuve0NRuwTOnAjLXMzSVX7dTIyNs0bnSa_ouJsvFxFhz_Jf7f_8Z4Gg-yg](https://lh6.googleusercontent.com/ovtA5ri8sHzzul0OSsfJmrHIctCCpdYPcLHW9Ly2J-WQRGA03FsjVfPPP3hPGyC9lzeigJZW3IqUaATEGS2dsCGsPy9fmuve0NRuwTOnAjLXMzSVX7dTIyNs0bnSa_ouJsvFxFhz_Jf7f_8Z4Gg-yg)

            1. Если попытаемся ввести путь, которого у нас не существует, нас перебрасывает на страницу “Main”
    </div>

)}