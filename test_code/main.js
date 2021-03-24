// // Part 1
// // Generating an SVG

// var svg = d3.select("body").append("svg");

// svg.attr("width", "100px").attr("height", "100px");

// // Part 2
// // Binding the SVG to data

// var circles = svg.selectAll("circle");

// var rValues = [40, 25, 10];

// circles.data(rValues)
//     .enter()
//     .append("circle")
//     .attr("cx", 50)
//     .attr("cy", 50)
//     .attr("r", function(d) {
//       return d;
//     })
//     .attr("stroke", "black")
//     .attr("stroke-width", "5")
//     .attr("fill", "red");

///// make 1 info/big circle and make small selector circles, one for each section(Overview(brandStatement),education, projects, technical skills, recent employement history)
///// Maybe make the brand statement a non-dynamic

var w = window.innerWidth;
var h = window.innerHeight;


// https://freefrontend.com/css-circle-menus/

///// evenutally use window width to determin svg width and height

var svg_height =  800;
var svg_width = svg_height * 1.5;

var svg_width = window.innerWidth;
var svg_height = svg_width/1.5;




var info_circle_x= svg_height *.75;

var info_circle_y = svg_height * .5;

// var info_circle_r = svg_height * .375;
var info_circle_r = svg_height * .275;

var track_circle_r=info_circle_r+(info_circle_r*.4);

// var color1='rgb(255,182,0)';

var color2 = 'rgb(225,50,50)';

var color3 = 'rgb(255,100,42)';


///// define svg
var svg = d3.select("body").append("svg");

/// set the width and height of the canvas

svg.attr("width",svg_width).attr("height", svg_height);


///// create group for info bubble
var info_group=svg.append('g');


/// add big info circle
var info_cirlce = info_group.append('circle')
                    .attr("cx", info_circle_x)
                    .attr("cy", info_circle_y)
                    .attr('r',info_circle_r)
                    .attr("stroke", "black")
                    .attr("stroke-width", "3")
                    .attr("fill", color3);

//  invisible circlular track to plot circle upon
var track_circle = svg.append('circle')
                    .attr("cx", info_circle_x)
                    .attr("cy", info_circle_y)
                    .attr('r',track_circle_r)
                    .attr("stroke", "none")
                    .attr("fill", "none");
                               
//// used to make subcircles for menus
///////// position 
function makeSubCircle(position,textAdj,text){
    var group = svg.append('g');
    var circle_x = (info_circle_x-((track_circle_r)*Math.sin(position)));
    var circle_y = (info_circle_y+((track_circle_r)*Math.cos(position)));
    var circle_r = (info_circle_r*.3);

    var sub_circle = group.append('circle')
                        .attr("cx", circle_x)
                        .attr("cy", circle_y)
                        .attr('r',circle_r)
                        .attr("stroke", "black")
                        .attr("stroke-width", "3")
                        .attr("fill", color3);

                    group.append('text')
                        .attr("x", circle_x - (circle_r *textAdj))
                        .attr("y", circle_y )
                        .attr("stroke", "black")
                        .text(text);



    return sub_circle,group;

};


function addInfo(text){
    info_group.append('text')
    .attr("x", info_circle_x)
    .attr("y", info_circle_y )
    .attr("stroke", "black")
    .text(text);

};

function mouseOver(){
    console.log('mouse over');

    // var text = text;

    d3.select(this).select('circle')
        .transition()
        .duration(50)
        .attr('r',(info_circle_r*.35))
        .attr('fill',color2);

    d3.select(this).select('text')
        .transition()
        .duration(50)
        .attr('font-size','1.2rem');


 
    if(info_group.text()){
        info_group.selectAll('text').remove()

        addInfo('blah');


    }
    else{    
        addInfo('blah');

    };


        
};


function mouseOut(){
    console.log('mouse out');
    d3.select(this).select('circle')
        .transition()
        .duration(50)
        .attr('r',(info_circle_r*.3))
        .attr('fill',color3);


    d3.select(this).select('text')
        .transition()
        .duration(50)
        .attr('font-size','1rem')


};




/////////  use the make sub circle function to make a circle for each menu
/////  first parameter: position on circle track
/////  second parameter: adjusts the position of the text horizontally
///// third parameter : circle's text
var emp_circle, emp_group = makeSubCircle(-1,.60,'Employment');
var tech_circle, tech_group = makeSubCircle(-.5,.75,'Technical Skills');
var link_circle, link_group = makeSubCircle(0,.25,'Links');
var proj_circle, proj_group = makeSubCircle(.5,.50,'Projects');
var edu_circle, edu_group = makeSubCircle(1,.50,'Education');


////// make on click event listeners

// emp_group.on('mouseover',mouseOver).on('mouseout', mouseOut);
tech_group.on('mouseover',mouseOver).on('mouseout', mouseOut);
link_group.on('mouseover',mouseOver).on('mouseout', mouseOut);
proj_group.on('mouseover',mouseOver).on('mouseout', mouseOut);
edu_group.on('mouseover',mouseOver).on('mouseout', mouseOut);


///// trying to get this to work so I can pass specific text, depending on  which group, to the mouse over function to populate it with specific text
// emp_group.on('mouseover', function(){
//     console.log('emp test');
//     mouseOver();



// }).on('mouseout', mouseOut);



//// add on mouse over events and hover over events




// ////// test code under block
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// emp_group.on('mouseover',function(){
//     // alert('emp mouseover');
//     console.log('mouse over');

//     d3.select(this).select('circle')
//         .transition()
//         .duration(50)
//         .attr('r',(info_circle_r*.4))
//         .attr('fill','blue');

//     d3.select(this).select('text')
//             .text('this is a list of all my jobs or something. Im just going to ramble on and make this a long string for testing purposes');

//     d3plus.textwrap()
//         .container(d3.select(this).select('text'))
//         .draw();
        
// })
//     .on('mouseout',function() {
//         console.log('mouse out');
//         d3.select(this).select('circle')
//             .transition()
//             .duration(50)
//             .attr('r',(info_circle_r*.3))
//             .attr('fill','none');

//         d3.select(this).select('text')
//             .text('Employment');

//         d3plus.textwrap()
//         .container(d3.select(this).select('text'))
//         .draw();

// });


// //// make menu subcircle
// var sub_circle_1 = svg.append('circle')
//                     .attr("cx", (info_circle_x-((track_circle_r)*Math.sin(-1))))
//                     .attr("cy", (info_circle_y+((track_circle_r)*Math.cos(-1))))
//                     .attr('r',(info_circle_r*.3))
//                     .attr("stroke", "black")
//                     .attr("stroke-width", "5")
//                     .attr("fill", "none");





// ///// do this outside a for loop to define each circle
// ///// THis one has 5 circle located at the bottom
// for (var p =-1; p<1.5;p+=0.5){
//     svg.append('circle')
//         .attr("cx", (info_circle_x-((track_circle_r)*Math.sin(p))))
//         .attr("cy", (info_circle_y+((track_circle_r)*Math.cos(p))))
//         .attr('r',(info_circle_r*.3))
//         .attr("stroke", "black")
//         .attr("stroke-width", "5")
//         .attr("fill", "none");

// };


// function makeSubCircle(position,text){};





















// //////////////////////////
// //////////////////////////
// //////////////////////////
// var group_1 = svg.append('g');
// var sub_circle = group_1.append('circle')
//                         .attr("cx", (info_circle_x-((track_circle_r)*Math.sin(-1))))
//                         .attr("cy", (info_circle_y+((track_circle_r)*Math.cos(-1))))
//                         .attr('r',(info_circle_r*.3))
//                         .attr("stroke", "black")
//                         .attr("stroke-width", "5")
//                         .attr("fill", "none");
// group_1.append('text')
//         .attr("x", (info_circle_x-((track_circle_r)*Math.sin(-1))))
//         .attr("y", (info_circle_y+((track_circle_r)*Math.cos(-1))))
//         .attr("stroke", "black")
//         .text("this is filler text");
// //////////////////////////
// //////////////////////////
// //////////////////////////                                   








// ////// add  text to subcircle
// sub_circle_1.append('text')
//             .text('this is test text')
//             .attr('font-size',8)
//             .attr('dx',20)
//             .attr('dy',20);


///// do this outside a for loop to define each circle
// ///// currently looping from -2 to through 2
// for (var p =-2; p<3;p++){
//     svg.append('circle')
//         .attr("cx", (info_circle_x-((track_circle_r)*Math.sin(p))))
//         .attr("cy", (info_circle_y+((track_circle_r)*Math.cos(p))))
//         .attr('r',(info_circle_r*.3))
//         .attr("stroke", "black")
//         .attr("stroke-width", "5")
//         .attr("fill", "none");

// };



// ///// do thie outside a for loop to define each circle
// ///// this one has 4 circles grouped at the bottom
// for (var p =-.75; p<1;p+=0.5){
//     svg.append('circle')
//         .attr("cx", (info_circle_x-((track_circle_r)*Math.sin(p))))
//         .attr("cy", (info_circle_y+((track_circle_r)*Math.cos(p))))
//         .attr('r',(info_circle_r*.3))
//         .attr("stroke", "black")
//         .attr("stroke-width", "5")
//         .attr("fill", "none");

// };