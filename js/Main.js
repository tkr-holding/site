document.addEventListener('DOMContentLoaded', function() {
    // Проверяем, загрузилась ли библиотека Swiper
    if (typeof Swiper === 'undefined') {
        console.error('Ошибка: Библиотека Swiper не загружена.');
        return;
    }

// Флаг для отслеживания состояния изменения размера экрана
let isResizing = false;

// Анимация переходов между страницами
const transitionLinks = document.querySelectorAll('.transition-link');
transitionLinks.forEach(link => {
    link.addEventListener('click', handleTransition);
});

function handleTransition(event) {
    event.preventDefault();
    const href = this.getAttribute('href');
    document.body.classList.add('expand');
    setTimeout(() => {
        window.location.href = href;
    }, 500);
}

function handleLoad() {
    document.body.classList.add('shrink');
}

function checkCirclePosition() {
    // Проверяем, не идет ли процесс изменения размера экрана
    if (!isResizing) {
        // Определяем элемент круга
        var circle = document.getElementById('circle');
        // Определяем статус анимации перехода
        var isTransitionAnimating = document.body.classList.contains('expand');
        // Определяем положение круга относительно body
        var circleRect = circle.getBoundingClientRect();
        var bodyRect = document.body.getBoundingClientRect();

        if (!isTransitionAnimating) {
            // Проверяем положение круга и применяем соответствующие классы
            if (circleRect.right < bodyRect.left ||
                circleRect.left > bodyRect.right ||
                circleRect.bottom < bodyRect.top ||
                circleRect.top > bodyRect.bottom) {
                document.body.classList.add('shrink');
            } else {
                document.body.classList.remove('shrink');
            }
        }
    }
}

// Обработчик события изменения размера экрана
window.addEventListener('resize', () => {
    // Устанавливаем флаг изменения размера экрана в true
    isResizing = true;
    // После 500 миллисекунд сбрасываем флаг изменения размера экрана обратно в false
    setTimeout(() => {
        isResizing = false;
    }, 500);
});

window.addEventListener('load', handleLoad);
window.addEventListener('resize', checkCirclePosition);

    // Анимация каталога
    var catalogTitle = document.querySelector('.catalog-h1');
    var catalogMenu = document.querySelector('.catalog-menu');
    if (catalogTitle) {
        var menuVisible = false;
        catalogTitle.addEventListener('click', function() {
            if (!menuVisible) {
                catalogMenu.style.display = 'block';
                menuVisible = true;
            } else {
                catalogMenu.style.display = 'none';
                menuVisible = false;
            }
            catalogTitle.classList.toggle('clicked');
        });
    }
    // Проверка видимости элемента
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

// Анимация чисел
function animateNumbersIfVisible() {
    var dopInfSection = document.querySelector('.dop-inf');
    if (isElementInViewport(dopInfSection)) {
        animateValue("yearsOnMarket", 0, 12, 2000);
        animateValue("equipmentsSold", 0, 70, 2000);
        animateValue("projectsCompleted", 0, 40, 2000);
        window.removeEventListener('scroll', animateNumbersIfVisible);
        window.removeEventListener('resize', animateNumbersIfVisible); // Отключаем событие resize после того, как анимация запущена
    }
}

window.addEventListener('scroll', animateNumbersIfVisible);
window.addEventListener('resize', animateNumbersIfVisible);

function animateValue(id, start, end, duration) {
    var obj = document.getElementById(id);
    var range = end - start;
    var minTimer = 50;
    var stepTime = Math.abs(Math.floor(duration / range));
    stepTime = Math.max(stepTime, minTimer);
    var startTime = new Date().getTime();
    var endTime = startTime + duration;
    var timer;

    function run() {
        var now = new Date().getTime();
        var remaining = Math.max((endTime - now) / duration, 0);
        var value = Math.round(end - (remaining * range));
        obj.innerHTML = value;
        if (value == end) {
            clearInterval(timer);
        }
    }

    timer = setInterval(run, stepTime);
    run();
}

// Функция, определяющая, виден ли элемент во viewport
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

    // Анимация шариков
    var ball1 = document.querySelector('.ball1');
    var ball2 = document.querySelector('.ball2');
    var ball3 = document.querySelector('.ball3');
    var imgVr = document.querySelector('.imgVr');

    function moveUp(ball) {
        ball.style.transition = 'transform 5s ease';
        ball.style.transform = 'translateY(-30px)';
    }

    function moveDown(ball) {
        ball.style.transition = 'transform 5s ease';
        ball.style.transform = 'translateY(0)';
    }

    setInterval(function() {
        moveUp(ball1);
        setTimeout(function() {
            moveDown(ball1);
        }, 1000);
    }, 2000);

    setInterval(function() {
        moveUp(ball2);
        setTimeout(function() {
            moveDown(ball2);
        }, 1500);
    }, 3000);

    setInterval(function() {
        moveUp(ball3);
        setTimeout(function() {
            moveDown(ball3);
        }, 1200);
    }, 2500);

    setInterval(function() {
        moveUp(imgVr);
        setTimeout(function() {
            moveDown(imgVr);
        }, 1500);
    }, 3000);

    document.addEventListener("DOMContentLoaded", function() {
        var links = document.querySelectorAll('.scroll-link');
        links.forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault(); // Предотвращаем стандартное действие ссылки
                var targetId = this.getAttribute('href'); // Получаем целевой ID из атрибута href
                var targetElement = document.querySelector(targetId); // Находим элемент по ID
                if (targetElement) {
                    var offsetTop = targetElement.offsetTop; // Получаем его вертикальное смещение относительно верха страницы
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth' // Добавляем плавную прокрутку
                    });
                }
            });
        });
    });
// Плавная прокрутка для всех якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            e.preventDefault();
            const targetOffset = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const startOffset = window.pageYOffset;
            const distance = targetOffset - startOffset;
            const duration = 500; // Продолжительность анимации в миллисекундах
            const startTime = performance.now();

            function scrollAnimation(currentTime) {
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / duration, 1);
                const easeProgress = ease(progress);
                window.scrollTo(0, startOffset + distance * easeProgress);
                if (elapsedTime < duration) {
                    requestAnimationFrame(scrollAnimation);
                }
            }

            window.location.hash = targetId; // Переходим к якорю до начала анимации
            requestAnimationFrame(scrollAnimation);
        }
    });
});

// Функция плавной прокрутки
function ease(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}    
// Получаем все ссылки в меню навигации
const menuLinks = document.querySelectorAll('.nav .list a');
// Получаем элемент чекбокса, который управляет гамбургер-меню
const navToggle = document.getElementById('navi-toggle');
// Добавляем обработчик события клика на каждую ссылку
document.getElementById('catalogLink').addEventListener('click', function(event) {
    var submenu = document.getElementById('catalogSubmenu');
    submenu.classList.toggle('show');
    e.stopPropagation();
});

menuLinks.forEach(link => {
link.addEventListener('click', () => {
    if (link.id !== 'catalogLink') {
    // Снимаем галочку с чекбокса, чтобы закрыть гамбургер-меню
        navToggle.checked = false;
}
    else {
    navToggle.checked = true;
    }
});
});
document.addEventListener('DOMContentLoaded', () => {
const catalogLink = document.querySelector('.catalog-link');
const catalogMenu = document.querySelector('.catalog-menu');
const transitionLinks = document.querySelectorAll('.transition-link');
});

});
document.addEventListener('DOMContentLoaded', function() {
    if (typeof Swiper === 'undefined') {
        console.error('Ошибка: Библиотека Swiper не загружена.');
        return;
    }

    console.log('Swiper загружен');

    // Инициализируем первый слайдер
    var swiper1 = new Swiper(".mySwiper1", {
        slidesPerView: 'auto',
        spaceBetween: 0,
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
        },
        mousewheel: false,  // Отключаем прокрутку колесиком мыши
        keyboard: true,
        initialSlide: 0,
    });

    // Инициализируем второй слайдер
    var swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: 'auto',
        spaceBetween: 20,
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination2",
        },
        mousewheel: false,  // Отключаем прокрутку колесиком мыши
        keyboard: true,
        initialSlide: 1,
        slideClass: "swiper-slide2",
    });


    console.log('Слайдеры инициализированы');

    // Привязываем события клика к изображениям для первого слайдера
    function bindClickEventsToSlides(slideClass, targetIndex, swiper) {
        var slideImages = document.querySelectorAll(`${slideClass} img`);
        if (slideImages.length > 0) {
            slideImages.forEach((img, index) => {
                img.addEventListener('click', () => {
                    swiper.slideTo(targetIndex);
                });
            });
        }
    }

    bindClickEventsToSlides('#slide-inf1', 0, swiper1);
    bindClickEventsToSlides('#slide-inf2', 1, swiper1);
    bindClickEventsToSlides('#slide-inf3', 2, swiper1);

    // Привязываем события клика к ссылкам поиска
    function bindClickEventsToSearchLinks(linkClass, targetIndex, swiper) {
        var searchLinks = document.querySelectorAll(`.${linkClass}`);
        if (searchLinks.length > 0) {
            searchLinks.forEach((link, index) => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    swiper.slideTo(targetIndex);
                });
            });
        }
    }
    
    // Привязка ссылок для первого слайдера
    bindClickEventsToSearchLinks('slide-link1', 0, swiper1);
    bindClickEventsToSearchLinks('slide-link2', 1, swiper1);
    bindClickEventsToSearchLinks('slide-link3', 2, swiper1);

    // Привязка ссылок для второго слайдера
    bindClickEventsToSearchLinks('slide-link4', 0, swiper2);
    bindClickEventsToSearchLinks('slide-link5', 1, swiper2);
    bindClickEventsToSearchLinks('slide-link6', 2, swiper2);
    bindClickEventsToSearchLinks('slide-link7', 3, swiper2);

    console.log('Скрипт завершен');
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission
        var query = document.getElementById('search-input').value.trim().toLowerCase();

        var searchItems = [
            { queries: ['вождения автомобиля', 'автомобиль', 'вождене автомобиля', 'вождене автмобиля', 'вождение автомобиля', 'вождение автомобиль', 'автомобиль вождение', 'автомобиль водение', 'автомобиль управления', 'автомобиль управление', 'управление автомобилем', 'управлене автомобилем', 'автомобилем водение', 'водение автомобилем', 'автомобиль водителя'], path: 'html/HtmlCarsAndTransportMore/3dCarModel.html' },
            { queries: ['управления камазом', 'камаз', 'управление камазом', 'управлене камазом', 'камазом', 'вождение камазом', 'вождене камазом', 'камаз водение', 'камаз вождение', 'управление камаз', 'управления камаз', 'камаз управления', 'камаз управление', 'камаз водителя', 'водителя камаз'], path: '../html/HtmlCarsAndTransportMore/3dModelOfKamaz.html' },
            { queries: ['тренажер обслуживания автомобиля', 'обслуживания автомобиля', 'обслуживание автомобиля', 'обслуговка автомобиля', 'тренажор обслуживания автомобиля', 'тренажер обслуговка автомобиля', 'автомобиль обслуживание', 'автомобиля обслуживание', 'автомобиль обслуговка', 'автомобиля обслуговка', 'обслуговка автомобиль', 'тренажер автомобиль', 'тренажор автомобиль', 'тренажер автомобиля', 'тренажор автомобиля'], path: 'html/HtmlCarsAndTransportMore/3dModelOfTheMachineStructure.html' },
            { queries: ['управления трактором', 'трактор', 'управление трактором', 'управлене трактором', 'трактором', 'вождение трактором', 'вождене трактором', 'трактор водение', 'трактор вождение', 'управление трактор', 'управления трактор', 'трактор управления', 'трактор управление', 'трактор водителя', 'водителя трактор'], path: 'html/HtmlCollectiveFarmMachinesMore/Tractor.html' },
            { queries: ['опрыскиватель', 'апрыскиватель', 'опрыскыватель', 'апрыскыватель', 'опрыскиватель', 'оприскувач', 'опрыскиватель', 'оприскувач', 'опрыскиватель сельхоз', 'сельхоз опрыскиватель', 'опрыскиватель оборудования', 'оборудование опрыскиватель', 'опрыскиватель агрегат', 'агрегат опрыскиватель', 'опрыскиватель установка', 'установка опрыскиватель'], path: 'html/HtmlCollectiveFarmMachinesMore/Sprayer.html' },
            { queries: ['культиватор', 'культиватар', 'культиваторр', 'култиватор', 'культиватор', 'культиваторь', 'культиваторь', 'культиватор оборудование', 'оборудование культиватор', 'сельхоз культиватор', 'сельхоз оборудование культиватор', 'агрегат культиватор', 'культиватор агрегат', 'установка культиватор', 'культиватор установка'], path: 'html/HtmlCollectiveFarmMachinesMore/Cultivator.html' },
            { queries: ['зерноуборочный комбайн', 'зерно', 'зерноуборочний комбайн', 'зерноуборочний комбайн', 'зерноуборачний комбайн', 'комбайн', 'зернобурачный комбайн', 'зерно комбайн', 'комбайн зерно', 'сельхоз комбайн', 'сельхоз комбайн зерно', 'агрегат комбайн', 'комбайн агрегат', 'установка комбайн', 'комбайн установка'], path: 'html/HtmlCollectiveFarmMachinesMore/CombineHarvester.html' },
            { queries: ['электролизер', 'электролизир', 'электролизёр', 'электролизирр', 'електролизер', 'электролиз', 'електролиз', 'електролизёр', 'електролизир', 'электролиз установка', 'установка электролиз', 'агрегат электролиз', 'электролиз агрегат', 'электролиз оборудование', 'оборудование электролиз'], path: 'html/HtmlMechanicalEngineeringMore/electrolyzer.html' },
            { queries: ['токарное дело', 'токарка', 'токарнае дело', 'токарноe дело', 'токарнoe дело', 'токарне дело', 'токарка дело', 'дело токарное', 'дело токарка', 'токарный дело', 'дело токарный', 'токарное оборудование', 'оборудование токарное', 'токарное агрегат', 'агрегат токарное'], path: 'html/HtmlMechanicalEngineeringMore/lathe.html' },
            { queries: ['сварочное дело', 'сварочное дело vr', 'сварачное дело', 'сварачное дело vr', 'сварачнае дело', 'сварачнаи дело', 'сварачнаи дило', 'сворачнаи дило', 'дело', 'сварка', 'сварачное', 'сварочное', 'сварка vr', 'сварочнoe дело', 'сварочноe дело', 'сварачное дило', 'сварачное дело вр', 'сварка вр', 'сварка дело', 'дело сварка', 'сварка оборудование', 'оборудование сварка', 'сварочное агрегат', 'агрегат сварочное'], path: 'html/HtmlMechanicalEngineeringMore/Welding.html' },
            { queries: ['азтм', 'азмт','Цилиндрический редуктор', 'редуктор', 'Цилиндрический', 'Целиндрический редуктор', 'Целендрический редуктор','Цилиндрический ридуктор', 'Цилиндрический редуктар', 'азтн', 'азмн', 'асмт', 'азптм', 'азотм', 'асотм', 'зтм', 'атм', 'азотом', 'азотом агрегат', 'агрегат азотом', 'установка азотом', 'азотом установка', 'оборудование азотом', 'азотом оборудование'], path: 'html/HtmlMechanicalEngineeringMore/AZTM.html' }
        ];
        

        // Функция поиска по запросу
        var found = searchItems.some(function(item) {
            if (item.queries.includes(query)) {
                window.location.href = item.path;
                return true;
            }
            return false;
        });

        // Если ничего не найдено
        if (!found) {
            alert('Страница не найдена');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var submitBtns = document.querySelectorAll('.codepen-button');
    
    submitBtns.forEach(function(submitBtn) {
        submitBtn.addEventListener('click', function(event) {
            event.preventDefault(); // Предотвратить стандартное поведение ссылки
            window.scrollTo({
                top: 2070, // Позиция по вертикали
                behavior: 'smooth' // Плавный скроллинг
            });
        });
    });
});
var submitBtns2 = document.querySelectorAll('.info-text-btn');
submitBtns2.forEach(function(btn) {
    btn.addEventListener('click', function() {
        window.scrollTo({
            top: 2070, // Позиция по вертикали
            behavior: 'smooth' // Плавный скроллинг
    });
});
});
var submitBtns3 = document.querySelectorAll('.info-text2-btn');
submitBtns3.forEach(function(btn) {
    btn.addEventListener('click', function() {
        window.scrollTo({
            top: 2070, // Позиция по вертикали
            behavior: 'smooth' // Плавный скроллинг
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById("reviewsModal");
    var openBtn = document.getElementById("reviews-link"); // Обращаемся к ссылке через ее id
    var closeBtn = document.querySelector(".close");

    function openModal() {
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Запрещаем прокрутку страницы
    }

    function closeModal() {
        modal.style.display = "none";
        document.body.style.overflow = ""; // Разрешаем прокрутку страницы
    }

    openBtn.onclick = openModal;
    closeBtn.onclick = closeModal;

    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }
});
document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById("reviewsModal");
    var openBtn = document.querySelector(".reviews-h1");
    var closeBtn = document.querySelector(".close");

    function openModal() {
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Запрещаем прокрутку страницы
    }

    function closeModal() {
        modal.style.display = "none";
        document.body.style.overflow = ""; // Разрешаем прокрутку страницы
    }

    openBtn.onclick = openModal;
    closeBtn.onclick = closeModal;

    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }
});
