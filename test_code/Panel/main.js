var converter = new showdown.Converter(),
    text = '# hello, this text is a markdown string!',
    html= converter.makeHtml(text);






d3.select('#markDiv').html(html);




