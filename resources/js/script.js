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

    function myTimer() {
        loadCharts1("chartContainer1");
        loadCharts2("chartContainer2");
    };
    var myVar = function() {
        setInterval(myTimer, 10000);
        loadCharts3("chartContainer3");
    };

    var loadCharts1 = function (selector) {
        d3.csv("data/5minutesago-1.csv").then(function(data) {
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
                        { label: data1[0].HotHashtag, y: parseInt(data1[0].Number)},	
                        { label: data1[1].HotHashtag, y: parseInt(data1[1].Number)},
                        { label: data1[2].HotHashtag, y: parseInt(data1[2].Number)},
                        { label: data1[3].HotHashtag, y: parseInt(data1[3].Number)},
                        { label: data1[4].HotHashtag, y: parseInt(data1[4].Number)},       
                    ]
                }]
            });
            chart.render();                   
        });  
        
    };

    
    var loadCharts2 = function (selector) {
        d3.csv("data/tophashtag-2.csv").then(function(data) {
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
                        { label: data2[0].hashtag, y: parseInt(data2[0].number)},	
                        { label: data2[1].hashtag, y: parseInt(data2[1].number)},	
                        { label: data2[2].hashtag, y: parseInt(data2[2].number)},	
                        { label: data2[3].hashtag, y: parseInt(data2[3].number)},	
                        { label: data2[4].hashtag, y: parseInt(data2[4].number)},	
                        { label: data2[5].hashtag, y: parseInt(data2[5].number)},	
                        { label: data2[6].hashtag, y: parseInt(data2[6].number)},	
                        { label: data2[7].hashtag, y: parseInt(data2[7].number)},	
                        { label: data2[8].hashtag, y: parseInt(data2[8].number)},
                        { label: data2[9].hashtag, y: parseInt(data2[9].number)}	 
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

