// src/components/MainContent.jsx
// src/components/MainContent.jsx
import  'react';

const MainContent = () => {
    return (
        <main className="py-16 px-4 sm:px-6 lg:px-8">
            <section className="mb-16">
                <h1 className="text-4xl font-bold text-center mb-4 hover:text-emerald-700">Добро пожаловать в наш магазин!</h1>
                <p className="text-lg text-center text-gray-700 dark:text-gray-200">
                    У нас есть все, что вам нужно для вашего дома и сада. Исследуйте наш каталог!
                </p>
            </section>

            {/* Колонки */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-2">Категория 1</h2>
                    <p>Описание категории 1</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-2">Категория 2</h2>
                    <p>Описание категории 2</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-2">Категория 3</h2>
                    <p>Описание категории 3</p>
                </div>
            </section>

            {/* Секция с карточками товаров */}
            <section className="mt-16">
                <h2 className="text-3xl font-semibold text-center mb-6">Наши товары</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Пример карточек товаров */}
                    <div className="bg-white dark:bg-gray-700 shadow-lg p-4 rounded-lg">
                        <img src="https://via.placeholder.com/150" alt="product" className="mb-4 rounded-lg" />
                        <h3 className="font-semibold">Товар 1</h3>
                        <p className="text-gray-600 dark:text-gray-300">Описание товара</p>
                    </div>
                    {/* Добавьте еще карточки товаров здесь */}
                </div>
            </section>
        </main>
    );
};

export default MainContent;
