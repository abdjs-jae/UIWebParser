$(document).ready(function() {

  // Drag and drop functions
  function drag_start(event) {
      var style = window.getComputedStyle(event.target, null);
      event.dataTransfer.setData("text",
      (parseInt(style.getPropertyValue("left"),10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"),10) - event.clientY));
      event.dataTransfer.setData("id", event.target.id);
  }
  function drag_over(event) {
      event.preventDefault();
      return false;
  }
  function drop(event) {
      var offset = event.dataTransfer.getData("text").split(',');
      var id = event.dataTransfer.getData("id");
      var dm = document.getElementById(id);
      // left position in the window
      dm.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
      // top position in the window
      dm.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
      event.preventDefault();
      return false;
  }

  // Get the draggable elements and add the drag and drop properties
  function refreshDraggers(){
    var dm = document.getElementsByClassName('dragger');
    $.each( dm, function( index, value ) {
    		dm[index].addEventListener('dragstart',drag_start,false);
    });
    document.body.addEventListener('dragover',drag_over,false);
    document.body.addEventListener('drop',drop,false);
  }

  refreshDraggers();

  // Adding of element functions

  var counter = 1;
  function addInput(divName){

    // Get input type of element to be added
    var inputType = $( "#elementlist" ).val();
    var placeholder = $( "#placeholder" ).val();
    var height = $( "#height" ).val();
    var width = $( "#width" ).val();
    var fontSize = $( "#fontsize" ).val();

    // if(placeholder != "" && height >= 0 && width >= 0 && fontSize > 0){
    if(placeholder != ""){
      
      console.log(counter);

      // Create the aside objects
      var element = document.createElement('aside');
      element.draggable = true;
      element.className = "dragger";
      element.id = "dragme" + counter;

      switch(inputType) {
            case 'text':
                 element.innerHTML = "<input type='text' placeholder='" + placeholder + "' style='height: "
                                      + height + "px; width: " + width + "px; font-size: " + fontSize + "px;'>";
                 document.getElementById(divName).appendChild(element);
                 refreshDraggers();
                 counter++;
                 break;
            case 'label':
                 element.innerHTML = "<span style='height: " + height +
                                      "px; width: " + width + "px; font-size: " + fontSize + "px;'>"
                                      + placeholder + "</span>";
                 document.getElementById(divName).appendChild(element);
                 refreshDraggers();
                 counter++;
                 break;
            case 'button':
                 element.innerHTML = "<button style='height: " + height +
                                      "px; width: " + width + "px; font-size: " + fontSize + "px;'>"
                                      + placeholder + "</button>";
                 document.getElementById(divName).appendChild(element);
                 refreshDraggers();
                 counter++;
                 break;
      }
    } else {
      alert("Error in receiving input. There might be missing or incorrect inputs. Please check!")
    }
  }


  // Adding of button listeners
  $( "#addElementButton" ).click(function() {
      addInput('gui');
  });
});
