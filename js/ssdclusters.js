var functionClusterPieChart = dc.pieChart("#cluster-pie", "#expenditures");

d3.json("data/ssdclusters.json", function (data){
    //format the data
    var dateFormat = d3.time.format("%Y");
    var numberFormat = d3.format(",f");

});