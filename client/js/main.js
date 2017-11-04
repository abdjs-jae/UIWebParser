function draggableElements(){
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
      dm.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
      dm.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
      event.preventDefault();
      return false;
  }
  var dm = document.getElementsByClassName('dragger');
  $.each( dm, function( index, value ) {
  		dm[index].addEventListener('dragstart',drag_start,false);
  });
  document.body.addEventListener('dragover',drag_over,false);
  document.body.addEventListener('drop',drop,false);
}
