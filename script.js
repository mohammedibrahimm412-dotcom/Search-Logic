let userContainer = document.querySelector('.userContainer');
let searchInput = document.querySelector('#searchInput');

const users = [
    {
        profileUrl: '/Project2/Images/download (1).jfif',
        name: 'Pankaj Tripathi',
        email: 'pankajmirja@tripathi.com'
    },
    {
        profileUrl: '/Project2/Images/download (2).jfif',
        name: 'Munna Tripathi',
        email: 'pankajmirja@tripathi.com'
    },
    {
        profileUrl: '/Project2/Images/download.jfif',
        name: 'Guddu Bhaiya',
        email: 'pankajmirja@tripathi.com'
    },
    {
        profileUrl: '/Project2/Images/images.jfif',
        name: 'Guddu Bhaiya',
        email: 'pankajmirja@tripathi.com'
    },
];


function renderUsers(arr) {
    userContainer.innerHTML = '';
    arr.map(function (obj) {
        let { profileUrl, name, email } = obj;
        let divElem = document.createElement('div');
        divElem.className = 'userItem';
        divElem.innerHTML = `
                <div class="image">
                    <img src="${profileUrl}" alt="error loading image">
                </div>
                <div class="userDetails">
                    <h3>${name}</h3>
                    <p>${email}</p>
                </div>
            `
        userContainer.append(divElem);
    })
}
renderUsers(users);
function handleSearch(e) {
    let searchValue = e.target.value;
    let filterUsers = users.filter(obj => {
        return (
        obj.name.toLowerCase().includes(searchValue.toLowerCase())
        ||
        obj.email.toLowerCase().includes(searchValue.toLowerCase())
        )
    })
    renderUsers(filterUsers)
}

searchInput.addEventListener('input', handleSearch)