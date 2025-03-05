const todayDate = new Date();
const weekday = document.getElementById('weekday');
const today = document.getElementById('date-today');

const nameOfDay = todayDate.toLocaleString('en-US', {weekday: "short"});
const nameOfMonth = todayDate.toLocaleString('en-US', {month: "short"});
const day = todayDate.getDate();
const year = todayDate.getFullYear();

weekday.innerText = nameOfDay;
today.innerText = `${nameOfMonth} ${day} ${year}`;

const smsContainer = document.getElementById('completed-message-container');

function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return `${hours}:${minutes}:${seconds} ${ampm}`;
}

function onCompletedBtnClick(e) {
    const btn = e.target;
    const tasks = document.getElementById('task-assigned');
    const tasksValue = parseInt(document.getElementById('task-assigned').innerHTML);
    const totalTasks = document.getElementById('total-tasks');
    const totalTasksValue = parseInt(document.getElementById('total-tasks').innerHTML);

    alert('Board Updated Successfully !!!');
    btn.setAttribute('disabled', 'true');
    btn.style.backgroundColor = "#ced6ff";
    tasks.innerHTML = tasksValue - 1;
    totalTasks.innerHTML = totalTasksValue + 1;

    const cardTitle = e.target.closest('.task-card').querySelector('.task-card-title').innerHTML;
    const p = document.createElement('p');
    const today = new Date();
    const clickedTime = formatTime(today);

    p.classList.add('completed-task-message');
    p.innerText = `You have Completed The Task ${cardTitle} at ${clickedTime}`;
    smsContainer.appendChild(p);

    if(tasksValue == 1) {
        alert("Congrats !!! You have completed all the current tasks !!!")
    }
}

function goToBlogPage() {
    window.location.href = 'blog.html';
}
function backToDesk() {
    window.location.href = 'index.html';
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
}

function bgChanger() {
    document.body.style.backgroundColor = getRandomColor();
}

function clearMessage() {
    smsContainer.innerHTML = '';
}