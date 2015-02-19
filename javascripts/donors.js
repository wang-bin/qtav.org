var kDonators = [
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
];

var DonationHistory = {
  createTag: function() {
    var doc = "<table id='donors' class='detail'>";
    kDonators.forEach(function(d){
      doc += "<tr><td>" + d.date + "</td><td>" + d.name + "</td><td>" + d.value + "</td></tr>";
    });
    doc += "</table>";
    console.log(doc);
    document.write(doc);
  }
};
