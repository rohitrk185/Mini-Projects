const header = document.querySelector('#header');
const title = document.querySelector('#title');
const excerpt = document.querySelector('#excerpt');
const profile_img = document.querySelector('#profile_img');
const _name = document.querySelector('#name');
const date = document.querySelector('#date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bgs_texts = document.querySelectorAll('animated-bg-text');

function getData() {
    header.innerHTML = `<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="">`;
    title.innerHTML = `Lorem ipsum dolor sit amet.`;
    excerpt.innerHTML = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore perferendis.`;
    profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Profile Image">`;
    _name.innerHTML = `John Doe`;
    date.innerHTML = `Oct 05, 2022`;

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
    animated_bgs_texts.forEach(bg => bg.classList.remove('animated-bg-text'));
}

setTimeout(getData, 2500);