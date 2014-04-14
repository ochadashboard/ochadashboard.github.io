var numberFormat = d3.format(".2f");
var worldChart = dc.geoChoroplethChart("#world-chart");
var rowChart = dc.rowChart("#dc-row-graph");
var barChart = dc.barChart("#dc-bar-chart");
var piechart = dc.pieChart("#dc-pie-chart");
    
d3.json("data/coalcanada.json", function (csv) {
    var data = crossfilter(csv);
    var groupdata = data.groupAll();
    
    var countries = data.dimension(function (d) {
        return d.country;
    });
    var countrygroup = countries.group().reduceSum(function (d) {
        return d.commodity_id;
    });
    
    var projection = d3.geo.mercator()
        .center([15,25])
        .scale(100)
            
    d3.json("data/worldgeojson.json", function (worldJson) {
        worldChart.width(800)
                .height(500)
                .transitionDuration(500)
                .dimension(countries)
                .group(countrygroup)
                       .projection(projection)
                        .colors(d3.scale.quantize().range(["#E2F2FF", "#C4E4FF", "#9ED2FF", "#81C5FF", "#6BBAFF", "#51AEFF", "#36A2FF", "#1E96FF", "#0089FF", "#1f77b4"]))
                        .colorDomain([0, 500])
                        .colorCalculator(function (d) { return d ? worldChart.colors()(d) : '#ccc'; })
                        .overlayGeoJson(worldJson.features, "countries", function (d) {
                            return d.properties.iso_a2;
                        })
                        .title(function (d){
                                
                            return "Country: " + d.key;
                        });
    
            var commod_text = data.dimension(function (d) { return d.commodity_text; });
            var commod_group = commod_text.group();
                
                 rowChart
                 .width(400)
                .height(514)
                .dimension(commod_text)
                .group(commod_group)
                .transitionDuration(500)
                .colors("#1f77b4")
                 
            
          
               
             piechart.width(270)
             .height(514)
             .radius(130)
             .dimension(commod_text)
             .group(commod_group)
        
               
                 
    var dateDim = data.dimension(function(d) {return d.page_id;});
    var hits = dateDim.group().reduceSum(function(d) {return d.commodity_id;}); 
                
    var countsgroup = dateDim.group();
                
   
        
    var minDate = dateDim.bottom(1)[0].page_id;
    var maxDate = dateDim.top(1)[0].page_id;
    

                 
 barChart
    .width(1000)
    .height(200)
      .round(dc.round.floor)
        .alwaysUseRounding(true)
    .margins({top: 10, right: 50, bottom: 30, left: 40})
    .dimension(dateDim)
    .group(countsgroup)
 .renderHorizontalGridLines(true)
 .valueAccessor(function (d) {
            return d.value;
        })
    .x(d3.scale.linear().domain([minDate,maxDate]))
    .xAxisLabel("Page ID")
 .xAxisPadding(maxDate+500)
    .yAxisLabel("Mentions per page ")
 barChart.xAxis().ticks(20)
 barChart.elasticY(true)
  

                 
                
                  dc.dataCount(".dc-data-count")
            .dimension(data)
            .group(groupdata)
            ;
            
    var businessDimension = data.dimension(function (d) { return d.document_title; }); 
     var dynatable = $('#dc-table-graph').dynatable({
                features: {
                    pushState: false
                },
                dataset: {
                    records: businessDimension.top(Infinity),
                    perPageDefault: 8,
                    perPageOptions: [8, 16, 24]
                }
            }).data('dynatable');
    
    function RefreshTable() {
                dc.events.trigger(function () {
                    dynatable.settings.dataset.originalRecords = businessDimension.top(Infinity);
                    dynatable.process();
                });
            };
        
         for (var i = 0; i < dc.chartRegistry.list().length; i++) {
                var chartI = dc.chartRegistry.list()[i];
                chartI.on("filtered", RefreshTable);
            }
        RefreshTable();
                
                    
    
                dc.renderAll();
            });
        });