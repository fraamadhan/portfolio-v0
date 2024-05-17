const category = localStorage.getItem("category");
document.getElementById("project-category-title").innerHTML = category;

showProject(category);

function showProject(category) {
  let projects = json_data.project.filter((project) => project.category === category);
  let content = "";

  let path;

  if (category === "Mobile Development") {
    path = "../img/mobile/cardImage.png";
  } else if (category === "Website Development") {
    path = "../img/website/cardImage.png";
  } else {
    alert("Category not found");
  }

  // Loop through each project data

  projects.forEach((project) => {
    content += `
        <div class="col-sm-6 col-md-4 col-lg-3 mb-4 d-flex align-items-stretch">
          <div class="card mb-3">
            <img src=${path} class="card-img-top" alt="Project Image" />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${project["project-name"]}</h5>
              <p class="card-text">${project.description}</p>
              <a href="${project["doc-link"]}" class="btn btn-primary mt-auto align-self-end" target="_blank" id="button">Repository</a>
            </div>
          </div>
        </div>
      `;
  });

  //append to html tag yee
  document.querySelector("#project-items").innerHTML = content;
}
