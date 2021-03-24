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


///// evenutally use window width to determin svg width and height

var svg_height =  800;
/// i could make the height of the SVG dynamic, then use dynamic svg height and width to determine the sizes of the info circle and 

var svg_width = svg_height * 1.5;

var info_circle_x= svg_height *.75;

var info_circle_y = svg_height * .5;

// var info_circle_r = svg_height * .375;
var info_circle_r = svg_height * .275;

var track_circle_r=info_circle_r+(info_circle_r*.4);


///// define svg
var svg = d3.select("body").append("svg");

/// set the width and height of the canvas
// svg.attr("width", "1200px").attr("height", "800px");
svg.attr("width",svg_width).attr("height", svg_height);
/// add big info circle
var info_cirlce = svg.append('circle')
                    .attr("cx", info_circle_x)
                    .attr("cy", info_circle_y)
                    .attr('r',info_circle_r)
                    .attr("stroke", "black")
                    .attr("stroke-width", "5")
                    .attr("fill", "red");

//  invisible circlular track to plot circle upon
var track_circle = svg.append('circle')
                    .attr("cx", info_circle_x)
                    .attr("cy", info_circle_y)
                    .attr('r',track_circle_r)
                    .attr("stroke", "none")
                    .attr("stroke-width", "5")
                    .attr("fill", "none");


///// do thie outside a for loop to define each circle
for (var p =-2; p<3;p++){
    svg.append('circle')
        .attr("cx", (info_circle_x-((track_circle_r)*Math.sin(p))))
        .attr("cy", (info_circle_y+((track_circle_r)*Math.cos(p))))
        .attr('r',(info_circle_r*.3))
        .attr("stroke", "black")
        .attr("stroke-width", "5")
        .attr("fill", "none");

};





// var menu_circle_1 = svg.append('circle')
//                     .attr("cx", (info_circle_x+((track_circle_radius)*Math.sin(1))))
//                     .attr("cy", (info_circle_y-((track_circle_radius)*Math.cos(1))))
//                     .attr('r',50)
//                     .attr("stroke", "black")
//                     .attr("stroke-width", "5")
//                     .attr("fill", "none");




// svg.append('circle')
// .attr("cx", (info_circle_x+((track_circle_radius)*Math.sin(-1))))
// .attr("cy", (info_circle_y-((track_circle_radius)*Math.cos(-1))))
// .attr('r',50)
// .attr("stroke", "black")
// .attr("stroke-width", "5")
// .attr("fill", "none");








// //// using a circle formlua to plot circles along a half circle path
// //// this formula accepts an x point and a radius  and returns the y axis along a half circle
// function halfCircleTrack(x,r){
//     var y = Math.sqrt((r*r)-(x*x));
//     return y;
// };




// var menu_circle1 = svg.append('circle')
//                     .attr("cx", ((svg_height *.75)-(svg_height *.50)))
//                     .attr("cy", (svg_height * .5))
//                     .attr('r',(svg_height * .075))
//                     .attr("stroke", "black")
//                     .attr("stroke-width", "5")
//                     .attr("fill", "red");

// var menu_circle2 = svg.append('circle')
//     .attr("cx", ((svg_height *.75)+(svg_height *.50)))
//     .attr("cy", (svg_height*.5))
//     .attr('r',(svg_height * .075))
//     .attr("stroke", "black")
//     .attr("stroke-width", "5")
//     .attr("fill", "red");




// // ///// list of the x point for each of the smaller circles

// var menu_circle_x_list = [(info_circle_x /2) ,info_circle_x,(info_circle_x * 2)];

// menu_circle_x_list.forEach(function(x){
//     ///// use the half circle track function to get the y variable

//     var cx = x;
//     console.log(cx);

//     var cy= halfCircleTrack(cx,info_circle_r);
//     console.log(cy);

//     // svg.append('circle')
//     // .attr("cx", cx)
//     // .attr("cy", cy)
//     // .attr('r',(svg_height * .075))
//     // .attr("stroke", "black")
//     // .attr("stroke-width", "5")
//     // .attr("fill", "red");

// });


                   
// for (var p =0; p<7;p++){
//     // console.log('tdsest');
//     // console.log(halfCircleTrack(p,20));
//     /// x posiiton of circle
//     var cx = info_circle_x/2;
//     // var cx = 

//     ///// use the half circle track function to get the y variable
//     var cy= halfCircleTrack(p*10,info_circle_r);
//     console.log(cy)

//     svg.append('circle')
//     .attr("cx", cx)
//     .attr("cy", cy)
//     .attr('r',(svg_height * .075))
//     .attr("stroke", "black")
//     .attr("stroke-width", "5")
//     .attr("fill", "red");


// };