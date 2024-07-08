/**
 * 
 * @param {Event} event
 */
function allowDrop(event) {
    event.preventDefault();
}

/**
 * 
 * @param {DragEvent} event 
 */
function drag(event) {
    event.dataTransfer.setData("target_id", event.target.id);
}

/**
 * @param {Event} event
 */
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("target_id")
    event.target.appendChild(document.getElementById(data))
}