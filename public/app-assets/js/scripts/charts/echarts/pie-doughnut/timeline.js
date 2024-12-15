/*=========================================================================================
    File Name: timeline.js
    Description: echarts timeline chart
    ----------------------------------------------------------------------------------------
    Item Name: Modern Admin - Clean Bootstrap 4 Dashboard HTML Template
    Version: 1.0
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

// Timeline chart
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
            'echarts/chart/pie',
            'echarts/chart/funnel'
        ],


        // Charts setup
        function (ec) {
            // Initialize chart
            // ------------------------------
            var myChart = ec.init(document.getElementById('timeline'));

            var idx = 1;

            // Chart Options
            // ------------------------------
            chartOptions = {

                // Add timeline
                timeline: {
                    x: 10,
                    x2: 10,
                    data: [
                        '2019-07-01', '2019-07-02', '2019-07-03', '2019-07-04', '2019-07-05',
                        { name:'2019-07-06', symbol: 'emptyStar2', symbolSize: 8 },
                        '2019-07-07', '2014-07-08', '2019-07-09', '2019-07-10', '2019-07-11',
                        { name:'2019-07-12', symbol: 'star2', symbolSize: 8 }
                    ],
                    label: {
                        formatter: function(s) {
                            return s.slice(0, 7);
                        }
                    },
                    autoPlay: true,
                    playInterval: 3000
                },

                // Set options
                options: [
                    {

                        // Add title
                        title: {
                            text: 'Call Status',
                            subtext: 'Inbound - Outbound Numbers',
                            x: 'center',                            
                            
                        },

                        // Add tooltip
                        tooltip: {
                            trigger: 'item',
                            formatter: "{a} <br/>{b}: {c} ({d}%)"
                        },

                        // Add legend
                        legend: {
                            x: 'left',
                            orient: 'vertical',
                            data: ['Inbound','Outbound']
                        },

                        // Add custom colors
                        color: ['#2CCCE4', '#F47373'],
                        // Display toolbox
                        toolbox: {
                            show: true,
                            orient: 'vertical',
                            feature: {
                                mark: {
                                    show: true,
                                    title: {
                                        mark: 'Markline switch',
                                        markUndo: 'Undo markline',
                                        markClear: 'Clear markline'
                                    }
                                },
                                dataView: {
                                    show: true,
                                    readOnly: false,
                                    title: 'Call numbers',
                                    lang: ['Chart Numbers', 'Close', 'Update']
                                },
                                magicType: {
                                    show: true,
                                    title: {
                                        pie: 'Pie Chart',
                                        funnel: 'Funnel Chart'
                                    },
                                    type: ['pie', 'funnel'],
                                    option: {
                                        funnel: {
                                            x: '25%',
                                            width: '50%',
                                            funnelAlign: 'left',
                                            max: 1700
                                        }
                                    }
                                },
                                restore: {
                                    show: true,
                                    title: 'Refresh'
                                },
                                saveAsImage: {
                                    show: true,
                                    title: 'Save as Image',
                                    lang: ['Save']
                                }
                            }
                        },

                        // Add series
                        series: [{
                            name: 'Call Status',
                            type: 'pie',
                            center: ['50%', '50%'],
                            radius: '60%',
                            data: [
                                { value: idx * 128 + 80, name: 'Inbound'},
                                { value: idx * 64 + 160, name: 'Outbound'}
                            ]
                        }]
                    },

                    {
                        series: [{
                            name: 'Call Status',
                            type: 'pie',
                            data: [
                                { value: idx * 128 + 80, name:'Inbound'},
                                { value: idx * 64 + 160, name: 'Outbound' }
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'Call Status',
                            type: 'pie',
                            data: [
                                { value: idx * 128 + 80, name:'Inbound'},
                                { value: idx * 64 + 160, name: 'Outbound' }
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'Call Status',
                            type: 'pie',
                            data: [
                                { value: idx * 128 + 80, name:'Inbound'},
                                { value: idx * 64 + 160, name: 'Outbound' }
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'Call Status',
                            type: 'pie',
                            data: [
                                { value: idx * 128 + 80, name:'Inbound'},
                                { value: idx * 64 + 160, name: 'Outbound' }
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'Call Status',
                            type: 'pie',
                            data: [
                                { value: idx * 128 + 80, name:'Inbound'},
                                { value: idx * 64 + 160, name: 'Outbound' }
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'Call Status',
                            type: 'pie',
                            data: [
                                { value: idx * 128 + 80, name:'Inbound'},
                                { value: idx * 64 + 160, name: 'Outbound' }
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'Call Status',
                            type: 'pie',
                            data: [
                                { value: idx * 128 + 80, name:'Inbound'},
                                { value: idx * 64 + 160, name: 'Outbound' }
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'Call Status',
                            type: 'pie',
                            data: [
                                { value: idx * 128 + 80, name:'Inbound'},
                                { value: idx * 64 + 160, name: 'Outbound' }
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'Call Status',
                            type: 'pie',
                            data: [
                                { value: idx * 128 + 80, name:'Inbound'},
                                { value: idx * 64 + 160, name: 'Outbound' }
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'Call Status',
                            type: 'pie',
                            data: [
                                { value: idx * 128 + 80, name:'Inbound'},
                                { value: idx * 64 + 160, name: 'Outbound' }
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'Call Status',
                            type: 'pie',
                            data: [
                                { value: idx * 128 + 80, name:'Inbound'},
                                { value: idx * 64 + 160, name: 'Outbound' }
                            ]
                        }]
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