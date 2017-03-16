function renderOption1New(question, target){
    var height = "500px", 
        width = "1000px",
        border = "1px dashed black",
        imgWidth ="180px",
        imgHeight ="180px";

    var chart = d3.select(target);

    chart.style("width", width)
        .style("height", height)
        .style("border",border);
    
    chart.selectAll('p.qstm-holder')
         .data(question.qstm)
         .enter()
         .append('p')
            .attr('class', 'qstm-holder')
            .text(function(d) { return d; });

    chart.selectAll('div.img-space')
         .data(question.illustration)
         .enter()
         .append('div')
             .attr("class","img-space")
             .append('div')
             .attr('class', 'type1-img')
             .style("width",imgWidth)
             .style("height",imgHeight)
             .append("img")
                 .attr('src', function(d) { return d.img; })
                 .append("span")
                      .text(function(d) { return d.label; });

    chart.append("div").attr("class","clear");
 
    chart.selectAll('div.option-space') 
        .data(question.option)
        .enter()
        .append('div')
            .attr('class', 'type1-option')
            .text(function(d) { return d.label; })

    chart.append("div").attr("class","clear");
    chart.append("button")
        .attr("class","submit-answer")
        .text("Submit");
 
}

// funtion render Option-1 question 
// @param Object of Question: $question
// @param target html to render question to: $target
function renderOption1 (question ,target){
    var height = "500px", 
        width = "1000px",
        border = "1px dashed black",
        imgWidth ="180px",
        imgHeight ="180px";

    var chart = d3.select(target);

    chart.style("width", width)
        .style("height", height)
        .style("border",border)
        .append("p")
        .text(question.qstm1);

    if (question.illustration){
        var ilt = question.illustration;

        chart.append("div")
             .attr("class","img-space");

        var imgSpace = d3.select(".img-space");

        for (var i = 0; i < ilt.length ; i++){
            var imgDiv = imgSpace.append("div");
                imgDiv.attr("class","type1-img")
                .style("width",imgWidth)
                .style("height",imgHeight)
                .append("img")
                .attr("src",ilt[i].img);
            imgDiv.append("span")
            .text(ilt[i].label);	

        }
    }

    chart.append("div").attr("class","clear");

    if (question.type === 1){
        if (question.qstm2) {
            chart.append("p")
                 .text(question.qstm2);
        }
    }

    if (question.option){
        var opt = question.option;
        var option = chart.append("div")
        .attr("class","option-space");
        for (var i = 0 ; i < opt.length ; i++){
            option.append("div")
            .attr("class","type1-option")
            .text(opt[i].label);
        }
        $(".type1-option").on('click',function(){
            $(".type1-option").removeClass("selected");
            $(this).addClass("selected");
        });
    }
    chart.append("div").attr("class","clear");
    chart.append("button")
    .attr("class","submit-answer")
    .text("Submit");
 
}

