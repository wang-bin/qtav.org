var kDonors = [
  {date: "2014-03-07", name: "sportimization", value: "100 USD"},
  {date: "2014-05-04", name: "郭＊海", value: "100 CNY"},
  {date: "2014-05-27", name: "郭＊海", value: "100 CNY"},
  {date: "2014-09-11", name: "Brian Duffy", value: "40 USD"},
  {date: "2014-11-13", name: "田＊民", value: "10 CNY"},
  {date: "2014-12-09", name: "Marius Wachtler", value: "20 EUR"},
  {date: "2015-01-10", name: "姚＊冬", value: "100 CNY"},
  {date: "2015-02-05", name: "MyndPlay Ltd", value: "50 USD"},
  {date: "2015-02-14", name: "Mario Zeller", value: "20 EUR"},
  {date: "2015-02-17", name: "Tomasz Ziobrowski", value: "50 EUR"},
  {date: "2015-03-13", name: "张敏", value: "20 CNY"},
  {date: "2015-04-22", name: "王＊河", value: "100 CNY"},
  {date: "2015-04-22", name: "吴＊富", value: "100 CNY"},
  {date: "2015-12-24", name: "镇*铖", value: "54 CNY"},
  {date: "2016-01-19", name: "Joe Connellan", value: "150 USD"},
  {date: "2016-02-22", name: "三", value: "50 CNY"},
  {date: "2016-03-03", name: "Nguyen", value: "20 USD"},
  {date: "2016-03-09", name: "Krys", value: "50 CNY"},
  {date: "2016-05-08", name: "Paul Harrison", value: "50 GBP"},
  {date: "2016-06-14", name: "Verma Piyush", value: "10 USD"},
  {date: "2016-08-30", name: "sportimization", value: "250 EUR"},
  {date: "2016-09-05", name: "George Berthiaume", value: "10 USD"},
  {date: "2016-09-14", name: "e-Virtual Group", value: "10 USD"},
  {date: "2016-09-18", name: "军", value: "500 CNY"},
];

var DonationHistory = {
  createTag: function() {
    var doc = "<table id='donors' class='detail'>";
    kDonors.reverse().forEach(function(d){
      doc += "<tr><td>" + d.date + "</td><td>" + d.name + "</td><td>" + d.value + "</td></tr>";
    });
    doc += "</table>";
    console.log(doc);
    document.write(doc);
  }
};
