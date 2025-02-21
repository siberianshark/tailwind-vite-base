// src/components/Footer.jsx
import 'react';

const Footer = () => {
    return (
        <footer className="bg-violet-900 dark:bg-gray-900 text-white py-2">
            <div className="max-w-screen-xl mx-auto px-2">
                {/* Логотип и текст */}
                <div className=" mb-4">
                    <div className="text-2xl font-semibold text-center text-zinc-800 hover:text-violet-500">Магазин</div>
                    <div className="text-sm text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, possimus!</div>
                </div>

                {/* Колонки */}
                <div className="text-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12 pt-4">
                    <div>
                        <h3 className="font-semibold mb-4">О нас</h3>
                        <p className="text-sm">Информация о компании</p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Каталог</h3>
                        <ul>
                            <li>Товар 1</li>
                            <li>Товар 2</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Политика</h3>
                        <ul>
                            <li>Условия использования</li>
                            <li>Конфиденциальность</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Контакты</h3>
                        <ul>
                            <li>Телефон: 123-456-7890</li>
                            <li>Email: contact@shop.com</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Подписка</h3>
                        <p className="text-sm">Подпишитесь на новости и обновления.</p>
                    </div>
                </div>

                {/* Копирайт */}
                <div className="text-center mt-2 text-sm">
                    &copy; {new Date().getFullYear()} Магазин. Все права защищены.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
