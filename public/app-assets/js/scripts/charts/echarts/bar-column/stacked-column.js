/*=========================================================================================
    File Name: stacked-column.js
    Description: echarts stacked column chart
    ----------------------------------------------------------------------------------------
    Item Name: Modern Admin - Clean Bootstrap 4 Dashboard HTML Template
    Version: 1.0
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

// Stacked column chart
// ------------------------------

$(window).on("load", function(){

    // Set paths
    // ------------------------------

    require.config({
        paths: {
            echarts: '../../../app-assets/vendors/js/charts/echarts'
        }
    });


    // Configuration
    // ------------------------------

    require(
        [
            'echarts',
            'echarts/chart/bar',
            'echarts/chart/line'
        ],


        // Charts setup
        function (ec) {
            // Initialize chart
            // ------------------------------
            var myChart = ec.init(document.getElementById('stacked-column'));

            // Chart Options
            // ------------------------------
            chartOptions = {

                // Setup grid
                grid: {
                    x: 40,
                    x2: 40,
                    y: 45,
                    y2: 25
                },

                // Add tooltip
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // Axis indicator axis trigger effective
                        type : 'shadow'        // The default is a straight line, optionally: 'line' | 'shadow'
                    }
                },

                // Add legend
                legend: {
                    data: [ 'Total Inbound Calls', 'Total Outbound Calls', 'Total Ext 2 Ext Calls', 'Total Missed Calls', 'Total Abondaned Calls', 'Total Currently Active Calls']
                },

                // Add custom colors
                color: [' #FF6384', '#FFCE56', '#36A2EB', '#4BC0C0', '#FF9F40', '#9966FF'], 

                // Enable drag recalculate
                calculable: true,

                // Horizontal axis
                xAxis: [{
                    type: 'category',
                    data: ['01:00', '04:00', '07:00', '10:00', '13:00', '16:00', '19:00']
                }],

                // Vertical axis
                yAxis: [{
                    type: 'value',
                }],

                // Add series
                series : [
                    {
                        name:'Total Inbound Calls',
                        type:'bar',
                        data:[320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name:'Total Outbound Calls',
                        type:'bar',
                        stack: 'advertising',
                        data:[120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name:'Total Ext 2 Ext Calls',
                        type:'bar',
                        stack: 'advertising',
                        data:[220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name:'Total Missed Calls',
                        type:'bar',
                        stack: 'advertising',
                        data:[150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name:'Total Abondaned Calls',
                        type:'bar',
                        data:[862, 1018, 964, 1026, 1679, 1600, 1570],
                        markLine : {
                            itemStyle:{
                                normal:{
                                    lineStyle:{
                                        type: 'dashed'
                                    }
                                }
                            },
                            data : [
                                [{type : 'min'}, {type : 'max'}]
                            ]
                        }
                    },
                    {
                        name:'Total Currently Active Calls',
                        type:'bar',
                        barWidth : 12,
                        stack: 'search engine',
                        data:[620, 732, 701, 734, 1090, 1130, 1120]
                    }
                ]
            };

            // Apply options
            // ------------------------------

            myChart.setOption(chartOptions);


            // Resize chart
            // ------------------------------

            $(function () {

                // Resize chart on menu width change and window resize
                $(window).on('resize', resize);
                $(".menu-toggle").on('click', resize);

                // Resize function
                function resize() {
                    setTimeout(function() {

                        // Resize chart
                        myChart.resize();
                    }, 200);
                }
            });
        }
    );
});