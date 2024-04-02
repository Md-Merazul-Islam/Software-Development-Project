
let videos;
let isSorting = false;

const HandelCategories = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await response.json();

    const categories = data.data
}
const DisplayCategories = (categories) => {

    const categoriContainer = document.getElementById('container');

    categories.forEach(single_catagories => {
        const div = document.createElement('div');
        div.innerHTML(`<button onclick = "SingleCategoryLoad('${single_catagories.category_id}')">${single_catagories.category}</button>`)
    });
    categoriContainer.append(div);
}