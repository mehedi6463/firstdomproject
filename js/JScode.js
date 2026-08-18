const milestoneData = JSON.parse(data).data;

//load course mistones data
function loadMistones() {
    const milstones = document.querySelector('.milestones');
    
    milstones.innerHTML =`${milestoneData.map(function(milstone) {
        return `
        <div class="milestone border-b">
            <div class="flex">
              <div class="checkbox"><input type="checkbox" /></div>
              <div onclick="openMilstone(this)">
                <p>
                  ${milstone.name}
                  <span><i class="fas fa-chevron-down"></i></span>
                </p>
              </div>
            </div>
            <div class="hidden_panel">
              ${milstone.modules.map(function(module) {
                return `
                <div class="module border-b">
                    <p>${module.name}</p>
                </div>`;
              }).join("")}
            </div>
        </div>
        `;        
    }).join("")}`;
    
}

function openMilstone(milstoneElement) {
  const currentPanel = milstoneElement.parentNode.nextElementSibling;
  const shownPanel = document.querySelector(".show");
  const active = document.querySelector(".active");
  
  if(active && !milstoneElement.classList.contains("active")){
    active.classList.remove("active");
  }
  milstoneElement.classList.toggle("active");

  if(!currentPanel.classList.contains("show") && shownPanel)
  shownPanel.classList.remove("show");

  currentPanel.classList.toggle("show");
}

loadMistones();