d3.json("data/ssdclusters.json", function (cluster_data){
    //format the data
    var dateFormat = d3.time.format("%Y");
    var numberFormat = d3.format(",f");

    //run the data through crossfilter
    var ndx = crossfilter(cluster_data);
    var all = ndx.groupAll();


    //Create chart objects
    var functionClusterPieChart = dc.pieChart("#cluster-pie");
    var functionClusterRowChart = dc.rowChart("#cluster-row");
    var functionClusterDataTable = dc.dataTable("#cluster-datatable"); 

    //Create the dimensions
    var clusterDimension = ndx.dimension(function (d) {
        return d.cluster;
    });
    //date dimension
    var dateDimension = ndx.dimension(function (d){
        return d.year;
    });
    //datatable
    var clusterDimension = ndx.dimension(function (d) {
        return d.cluster_id;
    });

    //visualize
   functionClusterPieChart.width(200)
        .height(200)
        .transitionDuration(1500)
        .dimension(startValue)
        .group(startValueGroup)
        .radius(90)
        .minAngleForLabel(0)
        .label(function(d) { return d.data.key; })
        .on("filtered", function (chart) {
            dc.events.trigger(function () {
                if(chart.filter()) {
                    console.log(chart.filter());
                    volumeChart.filter([chart.filter()-.25,chart.filter()-(-0.25)]);
                    }
                else volumeChart.filterAll();
            });
        });


});