const milestoneData = JSON.parse(data).data;

//load course mistones data
function loadMistones() {
    const milstones = document.querySelector('.milestones');
    
    milstones.innerHTML =`${milestoneData.map(function(milstone) {
        return `
        <div class="milestone border-b" id=${milstone._id}>
            <div class="flex">
              <div class="checkbox"><input type="checkbox" onclick="markMilestone(this, ${milstone._id})" /></div>
              <div onclick="openMilstone(this, ${milstone._id})">
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
//milestone click function for open sub menu
function openMilstone(milstoneElement, id) {
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

  showMilestone(id);
}
//showing all data after click
function showMilestone(id) {
  const milestoneImage =document.querySelector(".milestoneImage");
  const milestoneTitle =document.querySelector(".title");
  const milestoneDetails =document.querySelector(".details");

  milestoneImage.style.opacity="0";
  milestoneImage.src = milestoneData[id].image;
  milestoneTitle.innerText = milestoneData[id].name;
  milestoneDetails.innerText = milestoneData[id].description;
  
}
//milestone image style.opacity
const milestoneImage =document.querySelector(".milestoneImage");
milestoneImage.onload = function() {
  this.style.opacity ="1";  
}

function markMilestone(checkbox, id) {
  const milestoneList =document.querySelector(".milestones");
  const doneList =document.querySelector(".doneList");

  const item =document.getElementById(id);

  if(checkbox.checked){
    //mark done
    doneList.appendChild(item);
  }else{
    //back to main list
    milestoneList.appendChild(item);
    sortList(milestoneList);
    
  }
  
}
function sortList(list) {
  const items = Array.from(list.children);
  items.sort((a, b)=> Number(a.id) - Number(b.id));
  items.forEach(item=>list.appendChild(item));
  
}



loadMistones();