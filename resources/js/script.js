(function (global) {

    var dc = {};
    const homeHtml = "snippets/home-snippets.html"

    // Convenience function for inserting innerHTML for 'select'
    var insertHtml = function (selector, html) {
        var targetElem = document.querySelector(selector);
        targetElem.innerHTML = html;
    };
    
    // Show loading icon inside element identified by 'selector'.
    var showLoading = function (selector) {
        var html = "<div class='text-center'>";
        html += "<img src='images/ajax-loader.gif'></div>";
        insertHtml(selector, html);
    };
    
    // On page load (before images or CSS)
    document.addEventListener("DOMContentLoaded", function (event) {
    
    // On first load, show home view, call server to load
    showLoading("#main-content");
    $ajaxUtils.sendGetRequest(
        homeHtml,
        function (responseText) {
            document.querySelector("#main-content")
                .innerHTML = responseText;
            //loadAllCharts() 
            myVar();
      },
      false);
    });



    // load each timeline-graph-chart
    // var loadAllCharts = function () {  
    //     //TODO: load data from external files
    //     loadCharts1("chartContainer1");
    //     loadCharts2("chartContainer2");
    //     loadCharts3("chartContainer3");
        
    // }

    function myTimer1() {
        loadCharts1("chartContainer1");
        //loadCharts2("chartContainer2");
    };
     function myTimer2() {
        //loadCharts1("chartContainer1");
        loadCharts2("chartContainer2");
    };   

    var myVar = function() {
        //setInterval(loadCharts1("chartContainer1"), 35000);
        //setInterval(loadCharts2("chartContainer2"), 10000);
        setInterval(myTimer1, 35000);
        setInterval(myTimer2, 10000);
        loadCharts3("chartContainer3");
    };

    var loadCharts1 = function (selector) {
        d3.csv("data/wordcount/wordcount.csv").then(function(data) {
            var data1 = data;
            var chart = new CanvasJS.Chart(document.getElementById(selector), {
                animationEnabled: true,
                theme: "light2", 
                title: {
                    text: " "
                },
                axisY: {
                    title: "Number",
                    suffix: "",
                    includeZero: false
                },
                axisX: {
                    title: "hashtag"
                },
                data: [{
                    type: "column",
                    yValueFormatString: "###",
                    dataPoints: [
                        { label: data1[0].word, y: parseInt(data1[0].count)},	
                        { label: data1[1].word, y: parseInt(data1[1].count)},
                        { label: data1[2].word, y: parseInt(data1[2].count)},
                        //{ label: data1[3].word, y: parseInt(data1[3].count)},
                        //{ label: data1[4].word, y: parseInt(data1[4].count)},       
                    ]
                }]
            });
            chart.render();                   
        });  
        
    };

    
    var loadCharts2 = function (selector) {
        d3.csv("data/hashtags/hashtags.csv").then(function(data) {
            var data2 = data;
            var chart = new CanvasJS.Chart(document.getElementById(selector), {
                animationEnabled: true,
                theme: "light2", 
                title: {
                    text: " "
                },
                axisY: {
                    title: "Number",
                    suffix: "",
                    includeZero: false
                },
                axisX: {
                    title: "hashtag"
                },
                data: [{
                    type: "column",
                    yValueFormatString: "###",
                    dataPoints: [
                        { label: data2[0].hashtags, y: parseInt(data2[0].count)},	
                        { label: data2[1].hashtags, y: parseInt(data2[1].count)},	
                        { label: data2[2].hashtags, y: parseInt(data2[2].count)},	
                        { label: data2[3].hashtags, y: parseInt(data2[3].count)},	
                        { label: data2[4].hashtags, y: parseInt(data2[4].count)},	
                        { label: data2[5].hashtags, y: parseInt(data2[5].count)},	
                        { label: data2[6].hashtags, y: parseInt(data2[6].count)},	
                        { label: data2[7].hashtags, y: parseInt(data2[7].count)},	
                        { label: data2[8].hashtags, y: parseInt(data2[8].count)},
                        { label: data2[9].hashtags, y: parseInt(data2[9].count)}	 
                    ]
                }]
            });
            chart.render();                   
        });  
    };

    var loadCharts3 = function (selector) {
        d3.csv("data/test-3.csv").then(function(data) {
            var data3 = data;
            console.log(data3);
            var chart = new CanvasJS.Chart(document.getElementById(selector), {
                animationEnabled: true,
                title:{
                    text: ""
                },
                axisX: {
                    valueFormatString: "DD MMM,YY"
                },
                axisY: {
                    title: "Attitude (in %)",
                    includeZero: false,
                    suffix: " %"
                },
                legend:{
                    cursor: "pointer",
                    fontSize: 16,
                    itemclick: toggleDataSeries
                },
                toolTip:{
                    shared: true
                },
                data: [{
                    name: data3[0].Hashtag,
                    type: "spline",
                    yValueFormatString: "###",
                    showInLegend: true,
                    dataPoints: [
                        { x: new Date(data3[0].Date), y: parseInt(data3[0].Attitude) },
                        { x: new Date(data3[3].Date), y: parseInt(data3[3].Attitude) },
                        { x: new Date(data3[6].Date), y: parseInt(data3[6].Attitude) },
                        { x: new Date(data3[9].Date), y: parseInt(data3[9].Attitude) },
                        { x: new Date(data3[12].Date), y: parseInt(data3[12].Attitude) }

                    ]
                },
                {
                    name: data3[1].Hashtag,
                    type: "spline",
                    yValueFormatString: "###",
                    showInLegend: true,
                    dataPoints: [
                        { x: new Date(data3[1].Date), y: parseInt(data3[1].Attitude) },
                        { x: new Date(data3[4].Date), y: parseInt(data3[4].Attitude) },
                        { x: new Date(data3[7].Date), y: parseInt(data3[7].Attitude) },
                        { x: new Date(data3[10].Date), y: parseInt(data3[10].Attitude) },
                        { x: new Date(data3[13].Date), y: parseInt(data3[13].Attitude) }
                    ]
                },
                {
                    name: data3[2].Hashtag,
                    type: "spline",
                    yValueFormatString: "###",
                    showInLegend: true,
                    dataPoints: [
                        { x: new Date(data3[2].Date), y: parseInt(data3[2].Attitude) },
                        { x: new Date(data3[5].Date), y: parseInt(data3[5].Attitude) },
                        { x: new Date(data3[8].Date), y: parseInt(data3[8].Attitude) },
                        { x: new Date(data3[11].Date), y: parseInt(data3[11].Attitude) },
                        { x: new Date(data3[14].Date), y: parseInt(data3[14].Attitude) }
                    ]
                }]
            });
            chart.render();
    
            function toggleDataSeries(e){
                if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                    e.dataSeries.visible = false;
                }
                else{
                    e.dataSeries.visible = true;
                }
                chart.render();
            }
        });         
    };


    
    global.$d3 = d3;
    global.$('.carousel').carousel();   
    
})(window);

