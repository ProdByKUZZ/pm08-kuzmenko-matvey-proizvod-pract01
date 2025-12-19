// Данные кондиционеров с фотографиями
const airConditioners = [
    {
        id: 1,
        brand: 'Haier',
        name: 'Haier AS09NS4ERA-W / 1U09BS3ERA',
        power: '2.5 кВт',
        area: '25 м²',
        noise: '22 дБ',
        energy: 'A++',
        price: 32000,
        oldPrice: 38000,
        category: 'budget',
        badge: 'Хит продаж',
        image: 'https://climstore.ru/upload/resize_cache/iblock/cea/700_700_1/ceab052e1000dd383ab184d9e42c90fc.jpg'
    },
    {
        id: 2,
        brand: 'Mitsubishi',
        name: 'Mitsubishi Electric MSZ-LN25VGV',
        power: '2.5 кВт',
        area: '25 м²',
        noise: '19 дБ',
        energy: 'A+++',
        price: 89000,
        oldPrice: 105000,
        category: 'premium',
        badge: 'Премиум',
        image: 'https://mitsubishiaircon.ru/wa-data/public/shop/products/47/28/2847/images/3462/3462.900x0.jpg'
    },
    {
        id: 3,
        brand: 'Daikin',
        name: 'Daikin FTXB25C / RXB25C',
        power: '2.5 кВт',
        area: '25 м²',
        noise: '21 дБ',
        energy: 'A++',
        price: 65000,
        oldPrice: 75000,
        category: 'mid',
        badge: '',
        image: 'https://mclimatservice.ru/251-large_default/daikin-ftxb25crxb25c-nastennyj-kondicioner.jpg'
    },
    {
        id: 4,
        brand: 'LG',
        name: 'LG P09SP2 Dual Inverter',
        power: '2.6 кВт',
        area: '27 м²',
        noise: '20 дБ',
        energy: 'A++',
        price: 45000,
        oldPrice: 52000,
        category: 'mid',
        badge: 'Wi-Fi',
        image: 'https://www.lg.com/ru/images/air-conditioners-split-systems/md06085479/gallery/medium01.jpg'
    },
    {
        id: 5,
        brand: 'Samsung',
        name: 'Samsung AR09TXHQASINUA',
        power: '2.5 кВт',
        area: '25 м²',
        noise: '21 дБ',
        energy: 'A++',
        price: 42000,
        oldPrice: 48000,
        category: 'mid',
        badge: '',
        image: 'https://main-cdn.sbermegamarket.ru/big1/hlr-system/165/182/829/612/918/27/100062414259b0.jpg'
    },
    {
        id: 6,
        brand: 'Ballu',
        name: 'Ballu BSUI-09HN8',
        power: '2.6 кВт',
        area: '26 м²',
        noise: '24 дБ',
        energy: 'A+',
        price: 28000,
        oldPrice: 32000,
        category: 'budget',
        badge: 'Выгодно',
        image: 'https://static.santehnika-online.ru/static/qYu_jKCUjQJLbABlIBrvTxxFPMDcJ9Eg4LzJHulzi7o/rs:fit:1600:800:0/g:no/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLndlYnNpdGUueWFuZGV4Y2xvdWQubmV0L3BpY3R1cmVzL2tvbmRpY2lvbmVyeS9rb25kaWNpb25lci8xYzk4ZTZjMC1jOTAxLTExZWItODFlMS0wMDUwNTYwMTA0YWEvS09ORElDSU9ORVJZX0JBTExVX1BMQVRJTlVNX0VWT0xVVElPTl9EQ19JTlZFUlRFUl9fTjAwMDM2MDE4MF83LkpQRw.jpg'
    },
    {
        id: 7,
        brand: 'Fujitsu',
        name: 'Fujitsu ASYG09LMCE-R',
        power: '2.5 кВт',
        area: '25 м²',
        noise: '20 дБ',
        energy: 'A+++',
        price: 78000,
        oldPrice: 90000,
        category: 'premium',
        badge: 'Тихий',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3gs-2Y06Kydf6K5VXEgh41uMuL4rZe6GJVA&s'
    },
    {
        id: 8,
        brand: 'Hisense',
        name: 'Hisense AS-09UR4SYDDB1G',
        power: '2.5 кВт',
        area: '25 м²',
        noise: '23 дБ',
        energy: 'A+',
        price: 30000,
        oldPrice: 35000,
        category: 'budget',
        badge: '',
        image: 'https://fresh-air.moscow/wa-data/public/shop/products/58/10/1058/images/412/412.640.gif'
    }
];

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Показать промо через 3 секунды
    setTimeout(function() {
        const promo = document.getElementById('promoNotification');
        if (promo && !localStorage.getItem('promoHidden')) {
            promo.classList.add('show');
        }
    }, 3000);
    
    // Инициализация каталога
    initCatalog();
    
    // Инициализация подбора
    initSelection();
    
    // Инициализация анимаций
    initAnimations();
    
    // Инициализация кнопки наверх
    initScrollTop();
    
    // Инициализация вкладок советов
    initTipsTabs();
    
    // Инициализация фильтра каталога
    initCatalogFilter();
});

// Закрытие промо
function closePromo() {
    const promo = document.getElementById('promoNotification');
    promo.classList.remove('show');
    localStorage.setItem('promoHidden', 'true');
}

// Мобильное меню
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('mobileOverlay');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
}

// Инициализация каталога
function initCatalog() {
    const grid = document.getElementById('catalogGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    airConditioners.forEach(function(ac) {
        const card = document.createElement('div');
        card.className = 'catalog-card fade-in';
        card.setAttribute('data-category', ac.category);
        
        const badgeHtml = ac.badge ? '<span class="catalog-badge">' + ac.badge + '</span>' : '';
        const oldPriceHtml = ac.oldPrice ? '<span class="catalog-price-old">' + ac.oldPrice.toLocaleString('ru-RU') + ' ₽</span>' : '';
        
        card.innerHTML = 
            badgeHtml +
            '<div class="catalog-image">' +
                '<img src="' + ac.image + '" alt="' + ac.name + '">' +
            '</div>' +
            '<div class="catalog-content">' +
                '<div class="catalog-brand">' + ac.brand + '</div>' +
                '<h3 class="catalog-title">' + ac.name + '</h3>' +
                '<ul class="catalog-specs">' +
                    '<li><i class="fas fa-bolt"></i> ' + ac.power + '</li>' +
                    '<li><i class="fas fa-expand"></i> ' + ac.area + '</li>' +
                    '<li><i class="fas fa-volume-mute"></i> ' + ac.noise + '</li>' +
                    '<li><i class="fas fa-leaf"></i> ' + ac.energy + '</li>' +
                '</ul>' +
                '<div class="catalog-pricing">' +
                    '<div>' +
                        '<div class="catalog-price">' + ac.price.toLocaleString('ru-RU') + ' ₽</div>' +
                        oldPriceHtml +
                    '</div>' +
                    '<a href="https://t.me/nottooholy" target="_blank" class="btn btn-primary">Заказать</a>' +
                '</div>' +
            '</div>';
        
        grid.appendChild(card);
    });
    
    // Запустить анимации после добавления карточек
    setTimeout(initAnimations, 100);
}

// Фильтр каталога
function initCatalogFilter() {
    const buttons = document.querySelectorAll('.catalog-filter .filter-btn');
    
    buttons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            buttons.forEach(function(b) { b.classList.remove('active'); });
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            const cards = document.querySelectorAll('.catalog-card');
            
            cards.forEach(function(card) {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    setTimeout(function() {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(function() {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Данные подбора
const selectionData = {
    area: 25,
    roomType: '',
    features: [],
    budget: 45000
};

// Инициализация подбора
function initSelection() {
    const areaSlider = document.getElementById('areaSlider');
    const areaValue = document.getElementById('areaValue');
    const budgetSlider = document.getElementById('budgetSlider');
    const budgetValue = document.getElementById('budgetValue');
    
    if (areaSlider) {
        areaSlider.addEventListener('input', function() {
            const value = parseInt(this.value);
            areaValue.textContent = value + ' м²';
            selectionData.area = value;
        });
    }
    
    if (budgetSlider) {
        budgetSlider.addEventListener('input', function() {
            const value = parseInt(this.value);
            budgetValue.textContent = value.toLocaleString('ru-RU') + ' ₽';
            selectionData.budget = value;
        });
    }
    
    // Выбор опций
    document.querySelectorAll('.option-card').forEach(function(card) {
        card.addEventListener('click', function() {
            const stepId = this.closest('.selector-step').id;
            
            if (stepId === 'step2') {
                document.querySelectorAll('#step2 .option-card').forEach(function(c) {
                    c.classList.remove('selected');
                });
                this.classList.add('selected');
                selectionData.roomType = this.getAttribute('data-type');
            } else if (stepId === 'step3') {
                this.classList.toggle('selected');
                const feature = this.getAttribute('data-feature');
                if (this.classList.contains('selected')) {
                    if (selectionData.features.indexOf(feature) === -1) {
                        selectionData.features.push(feature);
                    }
                } else {
                    selectionData.features = selectionData.features.filter(function(f) {
                        return f !== feature;
                    });
                }
            }
        });
    });
    
    // Кнопки "Далее"
    document.querySelectorAll('.next-step').forEach(function(btn) {
        btn.addEventListener('click', function() {
            const currentStep = this.closest('.selector-step');
            const nextStepNum = this.getAttribute('data-next');
            
            // Валидация для шага 2
            if (currentStep.id === 'step1' && nextStepNum === '2') {
                // Можно продолжить
            }
            
            if (currentStep.id === 'step2' && nextStepNum === '3' && !selectionData.roomType) {
                alert('Пожалуйста, выберите тип помещения');
                return;
            }
            
            currentStep.classList.remove('active');
            document.getElementById('step' + nextStepNum).classList.add('active');
            updateProgress(parseInt(nextStepNum));
        });
    });
    
    // Кнопки "Назад"
    document.querySelectorAll('.prev-step').forEach(function(btn) {
        btn.addEventListener('click', function() {
            const currentStep = this.closest('.selector-step');
            const prevStepNum = this.getAttribute('data-prev');
            
            currentStep.classList.remove('active');
            document.getElementById('step' + prevStepNum).classList.add('active');
            updateProgress(parseInt(prevStepNum));
        });
    });
    
    // Кнопка "Подобрать варианты"
    const calculateBtn = document.getElementById('calculateResults');
    if (calculateBtn) {
        calculateBtn.addEventListener('click', showResults);
    }
    
    // Кнопка "Начать заново"
    const restartBtn = document.getElementById('restartSelection');
    if (restartBtn) {
        restartBtn.addEventListener('click', restartSelection);
    }
}

// Обновление прогресса
function updateProgress(stepNum) {
    document.querySelectorAll('.progress-step').forEach(function(step, index) {
        step.classList.remove('active', 'completed');
        if (index + 1 < stepNum) {
            step.classList.add('completed');
        } else if (index + 1 === stepNum) {
            step.classList.add('active');
        }
    });
}

// Показать результаты
function showResults() {
    document.getElementById('step4').classList.remove('active');
    document.getElementById('resultsContainer').style.display = 'block';
    updateProgress(5);
    
    // Сформировать описание
    const roomTypes = {
        'apartment': 'квартира',
        'office': 'офис',
        'cottage': 'коттедж',
        'shop': 'магазин'
    };
    
    let summary = selectionData.area + ' м², ' + 
                  (roomTypes[selectionData.roomType] || 'не указано') + ', бюджет ' + 
                  selectionData.budget.toLocaleString('ru-RU') + ' ₽';
    
    document.getElementById('resultsSummary').textContent = summary;
    
    // Подобрать подходящие модели
    const suitable = airConditioners.filter(function(ac) {
        const budgetMin = selectionData.budget * 0.5;
        const budgetMax = selectionData.budget * 1.3;
        const areaMatch = parseInt(ac.area) >= selectionData.area * 0.8;
        const budgetMatch = ac.price >= budgetMin && ac.price <= budgetMax;
        return areaMatch && budgetMatch;
    }).slice(0, 3);
    
    // Отобразить результаты
    const resultsGrid = document.getElementById('resultsGrid');
    resultsGrid.innerHTML = '';
    
    if (suitable.length === 0) {
        resultsGrid.innerHTML = 
            '<div style="text-align: center; grid-column: 1/-1; padding: 40px;">' +
                '<h3 style="margin-bottom: 20px;">Не найдено подходящих вариантов</h3>' +
                '<p style="margin-bottom: 20px; color: var(--medium-gray);">Попробуйте изменить параметры или свяжитесь с нами для индивидуального подбора</p>' +
                '<a href="https://t.me/nottooholy" target="_blank" class="btn btn-green"><i class="fab fa-telegram"></i> Связаться</a>' +
            '</div>';
    } else {
        suitable.forEach(function(ac) {
            const card = document.createElement('div');
            card.className = 'result-card';
            card.innerHTML = 
                '<div class="result-image">' +
                    '<img src="' + ac.image + '" alt="' + ac.name + '">' +
                '</div>' +
                '<div class="result-content">' +
                    '<h4 class="result-title">' + ac.name + '</h4>' +
                    '<ul class="result-specs">' +
                        '<li><i class="fas fa-bolt"></i> ' + ac.power + '</li>' +
                        '<li><i class="fas fa-expand"></i> ' + ac.area + '</li>' +
                        '<li><i class="fas fa-volume-mute"></i> ' + ac.noise + '</li>' +
                        '<li><i class="fas fa-leaf"></i> ' + ac.energy + '</li>' +
                    '</ul>' +
                    '<div class="result-price">' + ac.price.toLocaleString('ru-RU') + ' ₽</div>' +
                '</div>';
            resultsGrid.appendChild(card);
        });
    }
}

// Начать заново
function restartSelection() {
    document.getElementById('resultsContainer').style.display = 'none';
    document.getElementById('step1').classList.add('active');
    
    selectionData.area = 25;
    selectionData.roomType = '';
    selectionData.features = [];
    selectionData.budget = 45000;
    
    document.getElementById('areaSlider').value = 25;
    document.getElementById('areaValue').textContent = '25 м²';
    document.getElementById('budgetSlider').value = 45000;
    document.getElementById('budgetValue').textContent = '45 000 ₽';
    
    document.querySelectorAll('.option-card').forEach(function(card) {
        card.classList.remove('selected');
    });
    
    updateProgress(1);
}

// Вкладки советов
function initTipsTabs() {
    const tabs = document.querySelectorAll('.tip-tab');
    
    tabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
            tabs.forEach(function(t) { t.classList.remove('active'); });
            this.classList.add('active');
            
            const tabId = this.getAttribute('data-tab');
            document.querySelectorAll('.tip-panel').forEach(function(panel) {
                panel.classList.remove('active');
            });
            document.getElementById('panel-' + tabId).classList.add('active');
        });
    });
}

// FAQ
function toggleFaq(element) {
    const item = element.closest('.faq-item');
    item.classList.toggle('active');
}

// Анимации при скролле
function initAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(function(el) {
        observer.observe(el);
    });
}

// Кнопка наверх
function initScrollTop() {
    const scrollBtn = document.getElementById('scrollTop');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Плавный скролл для ссылок
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});