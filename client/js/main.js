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
      var getter = "#" + id;
      var getData = $(getter).text();

      // left position in the window
      dm.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
      // top position in the window
      dm.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
      editValueAtJSON(getData, dm.style.left, dm.style.top);
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

  function editValueAtJSON(text, left, top) {
    console.log(jsonData.length);
    for(i = 0; i < jsonData.length; i++) {
      var text2 = jsonData[i].placeholder;
      if(text.localeCompare(text2) == 0) {
        jsonData[i].leftPosition = left;
        jsonData[i].rightPosition = top;
      }
    }
    console.log(jsonData);
  }

  refreshDraggers();

  // Adding of element functions
  var jsonData = [];
  var counter = 1;
  function addInput(divName, inputType, placeholder, height, width, fontSize){

    // divName is the name of the div to add the element on
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
                 var check = {"inputType":"text", "placeholder":placeholder, "height":height, "width":width, "fontSize":fontSize, "leftPosition":0, "rightPosition":0};
                 jsonData.push(check);
                 refreshDraggers();
                 counter++;
                 break;
            case 'label':
                 element.innerHTML = "<span style='height: " + height +
                                      "px; width: " + width + "px; font-size: " + fontSize + "px;'>"
                                      + placeholder + "</span>";
                 document.getElementById(divName).appendChild(element);
                 var check = {"inputType":"label", "placeholder":placeholder, "height":height, "width":width, "fontSize":fontSize, "leftPosition":0, "rightPosition":0};
                 jsonData.push(check);
                 refreshDraggers();
                 counter++;
                 break;
            case 'button':
                 element.innerHTML = "<button style='height: " + height +
                                      "px; width: " + width + "px; font-size: " + fontSize + "px;'>"
                                      + placeholder + "</button>";
                 document.getElementById(divName).appendChild(element);
                 var check = {"inputType":"button", "placeholder":placeholder, "height":height, "width":width, "fontSize":fontSize, "leftPosition":0, "rightPosition":0};
                 jsonData.push(check);
                 refreshDraggers();
                 counter++;
                 break;
      }
    } else {
      alert("Error in receiving input. There might be missing or incorrect inputs. Please check!")
    }
  }

  /*
   Load JSON file and display all the elements inside it

   Open the file chooser and select the JSON file
   Feel free to do error handling

   Read the properties and add the elements using the addInput() function

   Set the following properties as well:
   className = dragger <- allows the dragging properties
   draggable = true
   style.left <- left position of the element in the window
   style.top <- top position of the element in the window

   Run the refreshDraggers() function to activate all the properties of "dragger"

  */
  function loadJSON(){

  }

  /*
   Save all the elements and their respective properties in a JSON file.
   Properties of the elements include:
   inputType
   placeholder
   height
   width
   fontSize
   leftPosition
   rightPosition

  */
  function saveJSON(){
    //var fs = Npm.require('fs');
    //fs.writeFileSync('test.json', jsonData);


    // This is a super patch way, not a good way.
    // If you can find another way, please do so.
    var jsonDataText = JSON.stringify(jsonData);
    var stringAsBlob = new Blob([jsonDataText], {type:'tapplication/json'});
    var fileNameToSaveAs = "UIparser.json";
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.URL != null)
    {
        // Chrome allows the link to be clicked
        // without actually adding it to the DOM.
        downloadLink.href = window.URL.createObjectURL(stringAsBlob);
    }
    else
    {
        // Firefox requires the link to be added to the DOM
        // before it can be clicked.
        downloadLink.href = window.URL.createObjectURL(stringAsBlob);
        downloadLink.onclick = document.body.removeChild(event.target);
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }

    downloadLink.click();
  }

  // Adding of button listeners
  $( "#addElementButton" ).click(function() {
    // Get input type of element to be added
    var inputType = $( "#elementlist" ).val();
    var placeholder = $( "#placeholder" ).val();
    var height = $( "#height" ).val();
    var width = $( "#width" ).val();
    var fontSize = $( "#fontsize" ).val();

    addInput('gui', inputType, placeholder, height, width, fontSize);
  });
  $( "#loadButton" ).click(function() {
      loadJSON();
  });
  $( "#saveButton" ).click(function() {
      saveJSON();
  });
});
