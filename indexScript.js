const wrapper = document.getElementById('wrapper');
const wrapperB = document.getElementById('wrapper-b');
const registerBtn = document.getElementById('non-pos');
const loginBtn = document.getElementById('pos');
const imageA = document.getElementById('image-a');
const imageB = document.getElementById('image-b');

wrapperB.classList.add("active");
imageB.classList.add("active");

const toggleWrapper = () => {
    wrapper.classList.add("animated","active");
    imageA.classList.add("animated","active");

    wrapperB.classList.remove("active");
    imageB.classList.remove("active");
};
const toggleWrapperB = () => {
    wrapperB.classList.add("animated","active");
    imageB.classList.add("animated","active");

    wrapper.classList.remove("active");
    imageA.classList.remove("active");
};
registerBtn.addEventListener('click', toggleWrapper);
loginBtn.addEventListener('click', toggleWrapperB);