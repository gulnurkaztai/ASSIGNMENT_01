document.addEventListener('DOMContentLoaded', function () {
    let currentProject = 0;
    const projects = document.querySelectorAll('.project');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    // Displays a specific project and hides others
    function showProject(projectIndex) {
        projects[currentProject].style.display = 'none';
        projects[projectIndex].style.display = 'block';
        currentProject = projectIndex;
    }
    // Event listener for the prev button
    prevButton.addEventListener('click', function () {
        let prevProject = (currentProject - 1 + projects.length) % projects.length;
        showProject(prevProject);
    });
    // Event listener for the next button
    nextButton.addEventListener('click', function () {
        let nextProject = (currentProject + 1) % projects.length;
        showProject(nextProject);
    });

    // Shows the first project on page load
    showProject(currentProject);
});
