(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImNsaWVudC9qcy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblxuICAvLyBEcmFnIGFuZCBkcm9wIGZ1bmN0aW9uc1xuICBmdW5jdGlvbiBkcmFnX3N0YXJ0KGV2ZW50KSB7XG4gICAgICB2YXIgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShldmVudC50YXJnZXQsIG51bGwpO1xuICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJ0ZXh0XCIsXG4gICAgICAocGFyc2VJbnQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImxlZnRcIiksMTApIC0gZXZlbnQuY2xpZW50WCkgKyAnLCcgKyAocGFyc2VJbnQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcInRvcFwiKSwxMCkgLSBldmVudC5jbGllbnRZKSk7XG4gICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcImlkXCIsIGV2ZW50LnRhcmdldC5pZCk7XG4gIH1cbiAgZnVuY3Rpb24gZHJhZ19vdmVyKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGZ1bmN0aW9uIGRyb3AoZXZlbnQpIHtcbiAgICAgIHZhciBvZmZzZXQgPSBldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHRcIikuc3BsaXQoJywnKTtcbiAgICAgIHZhciBpZCA9IGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwiaWRcIik7XG4gICAgICB2YXIgZG0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICAvLyBsZWZ0IHBvc2l0aW9uIGluIHRoZSB3aW5kb3dcbiAgICAgIGRtLnN0eWxlLmxlZnQgPSAoZXZlbnQuY2xpZW50WCArIHBhcnNlSW50KG9mZnNldFswXSwxMCkpICsgJ3B4JztcbiAgICAgIC8vIHRvcCBwb3NpdGlvbiBpbiB0aGUgd2luZG93XG4gICAgICBkbS5zdHlsZS50b3AgPSAoZXZlbnQuY2xpZW50WSArIHBhcnNlSW50KG9mZnNldFsxXSwxMCkpICsgJ3B4JztcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBHZXQgdGhlIGRyYWdnYWJsZSBlbGVtZW50cyBhbmQgYWRkIHRoZSBkcmFnIGFuZCBkcm9wIHByb3BlcnRpZXNcbiAgZnVuY3Rpb24gcmVmcmVzaERyYWdnZXJzKCl7XG4gICAgdmFyIGRtID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHJhZ2dlcicpO1xuICAgICQuZWFjaCggZG0sIGZ1bmN0aW9uKCBpbmRleCwgdmFsdWUgKSB7XG4gICAgXHRcdGRtW2luZGV4XS5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLGRyYWdfc3RhcnQsZmFsc2UpO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLGRyYWdfb3ZlcixmYWxzZSk7XG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJyxkcm9wLGZhbHNlKTtcbiAgfVxuXG4gIHJlZnJlc2hEcmFnZ2VycygpO1xuXG4gIC8vIEFkZGluZyBvZiBlbGVtZW50IGZ1bmN0aW9uc1xuXG4gIHZhciBjb3VudGVyID0gMTtcbiAgZnVuY3Rpb24gYWRkSW5wdXQoZGl2TmFtZSwgaW5wdXRUeXBlLCBwbGFjZWhvbGRlciwgaGVpZ2h0LCB3aWR0aCwgZm9udFNpemUpe1xuXG4gICAgLy8gZGl2TmFtZSBpcyB0aGUgbmFtZSBvZiB0aGUgZGl2IHRvIGFkZCB0aGUgZWxlbWVudCBvblxuICAgIC8vIGlmKHBsYWNlaG9sZGVyICE9IFwiXCIgJiYgaGVpZ2h0ID49IDAgJiYgd2lkdGggPj0gMCAmJiBmb250U2l6ZSA+IDApe1xuICAgIGlmKHBsYWNlaG9sZGVyICE9IFwiXCIpe1xuXG4gICAgICBjb25zb2xlLmxvZyhjb3VudGVyKTtcblxuICAgICAgLy8gQ3JlYXRlIHRoZSBhc2lkZSBvYmplY3RzXG4gICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FzaWRlJyk7XG4gICAgICBlbGVtZW50LmRyYWdnYWJsZSA9IHRydWU7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IFwiZHJhZ2dlclwiO1xuICAgICAgZWxlbWVudC5pZCA9IFwiZHJhZ21lXCIgKyBjb3VudGVyO1xuXG4gICAgICBzd2l0Y2goaW5wdXRUeXBlKSB7XG4gICAgICAgICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBcIjxpbnB1dCB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nXCIgKyBwbGFjZWhvbGRlciArIFwiJyBzdHlsZT0naGVpZ2h0OiBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIGhlaWdodCArIFwicHg7IHdpZHRoOiBcIiArIHdpZHRoICsgXCJweDsgZm9udC1zaXplOiBcIiArIGZvbnRTaXplICsgXCJweDsnPlwiO1xuICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZOYW1lKS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgcmVmcmVzaERyYWdnZXJzKCk7XG4gICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdsYWJlbCc6XG4gICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXCI8c3BhbiBzdHlsZT0naGVpZ2h0OiBcIiArIGhlaWdodCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHg7IHdpZHRoOiBcIiArIHdpZHRoICsgXCJweDsgZm9udC1zaXplOiBcIiArIGZvbnRTaXplICsgXCJweDsnPlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgcGxhY2Vob2xkZXIgKyBcIjwvc3Bhbj5cIjtcbiAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGl2TmFtZSkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgIHJlZnJlc2hEcmFnZ2VycygpO1xuICAgICAgICAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYnV0dG9uJzpcbiAgICAgICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBcIjxidXR0b24gc3R5bGU9J2hlaWdodDogXCIgKyBoZWlnaHQgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInB4OyB3aWR0aDogXCIgKyB3aWR0aCArIFwicHg7IGZvbnQtc2l6ZTogXCIgKyBmb250U2l6ZSArIFwicHg7Jz5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIHBsYWNlaG9sZGVyICsgXCI8L2J1dHRvbj5cIjtcbiAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGl2TmFtZSkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgIHJlZnJlc2hEcmFnZ2VycygpO1xuICAgICAgICAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydChcIkVycm9yIGluIHJlY2VpdmluZyBpbnB1dC4gVGhlcmUgbWlnaHQgYmUgbWlzc2luZyBvciBpbmNvcnJlY3QgaW5wdXRzLiBQbGVhc2UgY2hlY2shXCIpXG4gICAgfVxuICB9XG5cbiAgLypcbiAgIExvYWQgSlNPTiBmaWxlIGFuZCBkaXNwbGF5IGFsbCB0aGUgZWxlbWVudHMgaW5zaWRlIGl0XG5cbiAgIE9wZW4gdGhlIGZpbGUgY2hvb3NlciBhbmQgc2VsZWN0IHRoZSBKU09OIGZpbGVcbiAgIEZlZWwgZnJlZSB0byBkbyBlcnJvciBoYW5kbGluZ1xuXG4gICBSZWFkIHRoZSBwcm9wZXJ0aWVzIGFuZCBhZGQgdGhlIGVsZW1lbnRzIHVzaW5nIHRoZSBhZGRJbnB1dCgpIGZ1bmN0aW9uXG5cbiAgIFNldCB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXMgYXMgd2VsbDpcbiAgIGNsYXNzTmFtZSA9IGRyYWdnZXIgPC0gYWxsb3dzIHRoZSBkcmFnZ2luZyBwcm9wZXJ0aWVzXG4gICBkcmFnZ2FibGUgPSB0cnVlXG4gICBzdHlsZS5sZWZ0IDwtIGxlZnQgcG9zaXRpb24gb2YgdGhlIGVsZW1lbnQgaW4gdGhlIHdpbmRvd1xuICAgc3R5bGUudG9wIDwtIHRvcCBwb3NpdGlvbiBvZiB0aGUgZWxlbWVudCBpbiB0aGUgd2luZG93XG5cbiAgIFJ1biB0aGUgcmVmcmVzaERyYWdnZXJzKCkgZnVuY3Rpb24gdG8gYWN0aXZhdGUgYWxsIHRoZSBwcm9wZXJ0aWVzIG9mIFwiZHJhZ2dlclwiXG5cbiAgKi9cbiAgZnVuY3Rpb24gbG9hZEpTT04oKXtcblxuICB9XG5cbiAgLypcbiAgIFNhdmUgYWxsIHRoZSBlbGVtZW50cyBhbmQgdGhlaXIgcmVzcGVjdGl2ZSBwcm9wZXJ0aWVzIGluIGEgSlNPTiBmaWxlLlxuICAgUHJvcGVydGllcyBvZiB0aGUgZWxlbWVudHMgaW5jbHVkZTpcbiAgIGlucHV0VHlwZVxuICAgcGxhY2Vob2xkZXJcbiAgIGhlaWdodFxuICAgd2lkdGhcbiAgIGZvbnRTaXplXG4gICBsZWZ0UG9zaXRpb25cbiAgIHJpZ2h0UG9zaXRpb25cblxuICAqL1xuICBmdW5jdGlvbiBzYXZlSlNPTigpe1xuXG4gIH1cblxuICAvLyBBZGRpbmcgb2YgYnV0dG9uIGxpc3RlbmVyc1xuICAkKCBcIiNhZGRFbGVtZW50QnV0dG9uXCIgKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAvLyBHZXQgaW5wdXQgdHlwZSBvZiBlbGVtZW50IHRvIGJlIGFkZGVkXG4gICAgdmFyIGlucHV0VHlwZSA9ICQoIFwiI2VsZW1lbnRsaXN0XCIgKS52YWwoKTtcbiAgICB2YXIgcGxhY2Vob2xkZXIgPSAkKCBcIiNwbGFjZWhvbGRlclwiICkudmFsKCk7XG4gICAgdmFyIGhlaWdodCA9ICQoIFwiI2hlaWdodFwiICkudmFsKCk7XG4gICAgdmFyIHdpZHRoID0gJCggXCIjd2lkdGhcIiApLnZhbCgpO1xuICAgIHZhciBmb250U2l6ZSA9ICQoIFwiI2ZvbnRzaXplXCIgKS52YWwoKTtcblxuICAgIGFkZElucHV0KCdndWknLCBpbnB1dFR5cGUsIHBsYWNlaG9sZGVyLCBoZWlnaHQsIHdpZHRoLCBmb250U2l6ZSk7XG4gIH0pO1xuICAkKCBcIiNsb2FkQnV0dG9uXCIgKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgIGxvYWRKU09OKCk7XG4gIH0pO1xuICAkKCBcIiNzYXZlQnV0dG9uXCIgKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgIHNhdmVKU09OKCk7XG4gIH0pO1xufSk7XG4iXX0=
