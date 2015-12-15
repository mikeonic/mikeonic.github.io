
function jsonFlickrFeed(data) {
  console.log(data);
  var output = '';

  for (var i=0; i < data.items.length; i++) {
    var title = data.items[i].title;
    var link = data.items[i].media.m.substring(0,56);
    var blocktype = 
      ((i % 4) === 3) ? 'd':
      ((i % 4) === 2) ? 'c':
      ((i % 4) === 1) ? 'b':
      'a';
    output += '<div class="ui-block-' + blocktype + '">';
    output += '<a href="#showphoto" data-transition="fade" onclick="showPhoto(\'' + link + '\',\'' + title + '\')">';
    output += '<img src="' + link + '_q.jpg" alt="' + title + '">';
    output += '</a>';
    output += '</div>';
  }
  $('#photolist').html(output);
}

function showPhoto(link, title) {
  var output = '<a href="#photos" data-transition="fade">';
  output +='<img src="' + link +'_n.jpg" alt="' + title + '">';
  output +='</a>';
  $('#myphoto').html(output);
}