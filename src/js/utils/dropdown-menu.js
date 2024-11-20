export function dropdown() {
    const dropdownTriggers = document.querySelectorAll(".nav-link-dropdown");

    if (!dropdownTriggers.length) return;

    dropdownTriggers.forEach((trigger) => {
        const dropdownMenu = trigger.querySelector(".dropdown-menu");

        if (!dropdownMenu) return;

        let originalParent = null;
        let placeholder = null;

        const moveDropdownToBody = () => {
            originalParent = dropdownMenu.parentNode;
            placeholder = document.createElement("div");
            originalParent.insertBefore(placeholder, dropdownMenu);
            document.body.appendChild(dropdownMenu);
            dropdownMenu.classList.add("active");
            trigger.classList.add("open");
        };

        const restoreDropdown = () => {
            if (originalParent && placeholder) {
                dropdownMenu.classList.remove("active");
                trigger.classList.remove("open");
                originalParent.insertBefore(dropdownMenu, placeholder);
                placeholder.remove();
                originalParent = null;
                placeholder = null;
            }
        };

        const toggleDropdown = (event) => {
            event.stopPropagation();

            dropdownTriggers.forEach((otherTrigger) => {
                if (otherTrigger !== trigger && otherTrigger.classList.contains("open")) {
                    otherTrigger.querySelector(".dropdown-menu")?.classList.remove("active");
                     otherTrigger.classList.remove("open");
                     restoreDropdown();
                }
            });

            if (dropdownMenu.classList.contains("active")) {
                restoreDropdown();
            } else {
               if (originalParent && placeholder){
                 restoreDropdown();

               }
               else{
                 moveDropdownToBody();
               }
            }
        };

        const closeDropdown = (event) => {
             if(event.target.closest(".dropdown-menu")) return;

            if (!trigger.contains(event.target) ){

                    restoreDropdown()
            }
        };

        trigger.addEventListener("click", toggleDropdown);
        document.addEventListener("click", closeDropdown);

    });
}
