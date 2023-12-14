const project = document.querySelectorAll('.slider-project');
const controlls = document.querySelectorAll('.controlls');
let projectIndex = 0;

function show(index) {
    project[projectIndex].classList.remove('active');
    project[index].classList.add('active');
    projectIndex = index;
}

controlls.forEach((e) => {
    e.addEventListener('click', () => {
        if (event.target.classList.contains('prev')) {
            let index = projectIndex - 1;

            if (index < 0) {
                index = project.length - 1;
            }

            show(index);
        } else if (event.target.classList.contains('next')) {
            let index = projectIndex + 1;
            if (index >= project.length) {
                index = 0;
            }
            show(index);
        }
    })
})

show(projectIndex);