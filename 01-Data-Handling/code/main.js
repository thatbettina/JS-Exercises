
/**
 * Hobby List
 */

var list = [ 'books.json', 'games.json', 'movies.json', 'songs.json' ];

var file = 'data/' + list[3];


var xhr = new XMLHttpRequest();

xhr.open('GET', file );

xhr.addEventListener('load', receivedData );

xhr.send();



function receivedData ( e ) {

  //var res = e.currentTarget.response;
  var res = xhr.response;

  res = JSON.parse( res );

  var keys = Object.keys(res );

  var colors = [];

  for ( var i = 0; i < keys.length; i++ ) {

    colors.push( 'rgb( ' + Math.floor( Math.random() * 255 ) + ',' +
                           Math.floor( Math.random() * 255 ) + ',' +
                           Math.floor( Math.random() * 255 ) + ')'  );
  }



  var data = [];

  keys.forEach(function ( key ) {

    var value = res[key];

    if ( typeof value === 'object' ) {


      if ( value['time'] || value['date'] ) {

        value = value['time'] || value['date'];

      } else {

        return console.log('doesnt exist');
      }

      console.log(value);
    }



    value = parseInt( value );

    if ( isNaN(value) ) value = 0;



    data.push({

      value: value,
      color: colors[ data.length ]
    });


  });


  var cvs = document.getElementById('cvs'),
      ctx = cvs.getContext('2d');


  new Chart( ctx ).Pie( data );

}