document.addEventListener('DOMContentLoaded', function () {
    fetchCategories();
});


async function fetchCategories() {
    try {
        const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
        const data = await response.json();
        if (data.status === false || data.data.length === 0) {
            displayErrorMessage();
            return;
        }
        displayCategories(data.data);
        // Display video data for the first category
        const categoryData = await fetchCategoryData(data.data[0].category_id);
        displayVideo(categoryData);
    } catch (error) {
         displayErrorMessage();
    }
}


async function fetchCategoryData(categoryId) {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await response.json();
    return data.data;
}


async function displayCategories(categories) {
    const navButtonsContainer = document.querySelector('.container');
    const videoListContainer = document.querySelector('.video-list');

    // Add flexbox classes to center menu items horizontally
    videoListContainer.innerHTML = "";
    navButtonsContainer.innerHTML = "";
    navButtonsContainer.classList.add('flex', 'justify-center', 'items-center', 'py-4', 'mx-auto');
    categories.forEach(async function (category) {
        const navButton = document.createElement('div');
        navButton.classList.add('nav-btn', 'bg-gray-200', 'rounded-lg', 'py-2', 'px-4', 'cursor-pointer', 'mx-2'); // Add mx-2 class for horizontal margin
        navButton.textContent = category.category;
        navButton.addEventListener('click', async () => {
            const categoryData = await fetchCategoryData(category.category_id);
            displayVideo(categoryData);

            // remove bg 
            document.querySelectorAll('.nav-btn').forEach(button => button.classList.remove('bg-orange-500'));
            navButton.classList.add('bg-orange-500');
        });
        navButtonsContainer.appendChild(navButton);
    });
}


function displayVideo(videos) {
    const videoListContainer = document.querySelector('.video-list');
    videoListContainer.innerHTML = "";

    videos.forEach(video => {
        const isVerified = video.authors[0].verified ? '<img class="verified-icon w-5 h-auto" src="./icon/verify.png" alt="Verified">' : '';

        const videoCard = `
            <div class="video-card">
                <figure class="relative">
                    <img class="thumbnail" src="${video.thumbnail}" alt="${video.title}">
                    <div class="absolute bottom-3 right-3 text-white text-xs bg-[#171717] p-0.5 rounded-md">
                        <span>${video.others.duration}</span> <!-- Replace this with the actual video duration -->
                    </div>
                </figure>
                <div class="flex gap-3 mt-5">
                    <div class="w-fit mt-0.5">
                        <img class="profile-image w-8 h-8 rounded-full mr-2" src="${video.authors[0].profile_picture}" alt="${video.authors[0].profile_name}">
                    </div>
                    <div class="flex-1">
                        <h3 class="text-neutral-950 max-w-prose line-clamp-2 font-bold text-base ">${video.title}</h3>
                        <div class="flex gap-2 mt-2 mb-2 items-center">
                            <span class="text-sm text-heroText">${video.authors[0].profile_name}</span>
                            ${isVerified}
                        </div>
                        <p class="text-xs text-gray-500">${video.others.views} views</p>
                    </div>
                </div>
            </div>
        `;
        videoListContainer.insertAdjacentHTML('beforeend', videoCard);
    });
}

function displayErrorMessage() {
    const errorMessage = document.getElementById('error-message');
    errorMessage.classList.remove('hidden');
}
