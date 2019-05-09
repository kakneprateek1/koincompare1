/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * compare module
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojtable', 'ojs/ojbutton', 'ojs/ojdialog', 'ojs/ojarraytabledatasource', 'ojs/ojbutton', 'ojs/ojcollapsible', 'ojs/ojinputtext'
], function (oj, ko) {
    /**
     * The view model for the main content view template
     */


    var btcbit = {};
    var xrpbit = {};
    var xrpko = {};
    var xrpcd = {};
    var btcko = {};
    var btczp = {};
    var count = 0;
    function testContentViewModel() {
        var self = this;
        self.val = ko.observable("hello");
        self.bitbtcbuy = ko.observable("");
        self.bitbtcsell = ko.observable("");
        self.bitbtcltp = ko.observable("");
        self.cdbtcbuy = ko.observable("");
        self.cdbtcsell = ko.observable("");
        self.cdbtcltp = ko.observable("");
        self.zpbtcbuy = ko.observable("");
        self.zpbtcsell = ko.observable("");
        self.zpbtcltp = ko.observable("");
        self.kobtcbuy = ko.observable("");
        self.kobtcsell = ko.observable("");
        self.kobtcltp = ko.observable("");

        self.bitxrpbuy = ko.observable("");
        self.bitxrpsell = ko.observable("");
        self.bitxrpltp = ko.observable("");
        self.cdxrpbuy = ko.observable("");
        self.cdxrpsell = ko.observable("");
        self.cdxrpltp = ko.observable("");
        self.zpxrpbuy = ko.observable("");
        self.zpxrpsell = ko.observable("");
        self.zpxrpltp = ko.observable("");
        self.koxrpbuy = ko.observable("");
        self.koxrpsell = ko.observable("");
        self.koxrpltp = ko.observable("");


        self.bitltcbuy = ko.observable("");
        self.bitltcsell = ko.observable("");
        self.cdltcbuy = ko.observable("");
        self.cdltcsell = ko.observable("");
        self.cdltcltp = ko.observable("");
        self.zpltcbuy = ko.observable("");
        self.zpltcsell = ko.observable("");
        self.zpltcltp = ko.observable("");
        self.koltcbuy = ko.observable("");
        self.koltcsell = ko.observable("");
        self.koltcltp = ko.observable("");

        self.bitethbuy = ko.observable("");
        self.bitethsell = ko.observable("");
        self.bitethltp = ko.observable("");
        self.cdethbuy = ko.observable("");
        self.cdethsell = ko.observable("");
        self.cdethltp = ko.observable("");
        self.zpethbuy = ko.observable("");
        self.zpethsell = ko.observable("");
        self.zpethltp = ko.observable("");
        self.koethbuy = ko.observable("");
        self.koethsell = ko.observable("");
        self.koethltp = ko.observable("");



        self.cdbchbuy = ko.observable("");
        self.cdbchsell = ko.observable("");
        self.cdbchltp = ko.observable("");
        self.zpbchbuy = ko.observable("");
        self.zpbchsell = ko.observable("");
        self.zpbchltp = ko.observable("");
        self.kobchbuy = ko.observable("");
        self.kobchsell = ko.observable("");
        self.kobchltp = ko.observable("");

        self.bitbtcbuy1 = ko.observable("");
        self.bitbtcsell1 = ko.observable("");
        self.bitbtcltp1 = ko.observable("");
        self.cdbtcbuy1 = ko.observable("");
        self.cdbtcsell1 = ko.observable("");
        self.cdbtcltp1 = ko.observable("");
        self.zpbtcbuy1 = ko.observable("");
        self.zpbtcsell1 = ko.observable("");
        self.zpbtcltp1 = ko.observable("");
        self.kobtcbuy1 = ko.observable("");
        self.kobtcsell1 = ko.observable("");
        self.kobtcltp1 = ko.observable("");

        self.bitxrpbuy1 = ko.observable("");
        self.bitxrpsell1 = ko.observable("");
        self.bitxrpltp1 = ko.observable("");
        self.cdxrpbuy1 = ko.observable("");
        self.cdxrpsell1 = ko.observable("");
        self.cdxrpltp1 = ko.observable("");
        self.zpxrpbuy1 = ko.observable("");
        self.zpxrpsell1 = ko.observable("");
        self.zpxrpltp1 = ko.observable("");
        self.koxrpbuy1 = ko.observable("");
        self.koxrpsell1 = ko.observable("");
        self.koxrpltp1 = ko.observable("");


        self.bitltcbuy1 = ko.observable("");
        self.bitltcsell1 = ko.observable("");
        self.cdltcbuy1 = ko.observable("");
        self.cdltcsell1 = ko.observable("");
        self.cdltcltp1 = ko.observable("");
        self.zpltcbuy1 = ko.observable("");
        self.zpltcsell1 = ko.observable("");
        self.zpltcltp1 = ko.observable("");
        self.koltcbuy1 = ko.observable("");
        self.koltcsell1 = ko.observable("");
        self.koltcltp1 = ko.observable("");

        self.bitethbuy1 = ko.observable("");
        self.bitethsell1 = ko.observable("");
        self.bitethltp1 = ko.observable("");
        self.cdethbuy1 = ko.observable("");
        self.cdethsell1 = ko.observable("");
        self.cdethltp1 = ko.observable("");
        self.zpethbuy1 = ko.observable("");
        self.zpethsell1 = ko.observable("");
        self.zpethltp1 = ko.observable("");
        self.koethbuy1 = ko.observable("");
        self.koethsell1 = ko.observable("");
        self.koethltp1 = ko.observable("");



        self.cdbchbuy1 = ko.observable("");
        self.cdbchsell1 = ko.observable("");
        self.cdbchltp1 = ko.observable("");
        self.zpbchbuy1 = ko.observable("");
        self.zpbchsell1 = ko.observable("");
        self.zpbchltp1 = ko.observable("");
        self.kobchbuy1 = ko.observable("");
        self.kobchsell1 = ko.observable("");
        self.kobchltp1 = ko.observable("");

        self.bitbtcfee = ko.observable("0.001");
        self.cdbtcfee = ko.observable("0.001");
        self.zpbtcfee = ko.observable("0.0005");
        self.kobtcfee = ko.observable("0.001");

        self.bitbtcfeer = ko.observable("0");
        self.cdbtcfeer = ko.observable("0");
        self.zpbtcfeer = ko.observable("0");
        self.kobtcfeer = ko.observable("0");


        self.bitxrpfee = ko.observable("0.01");
        self.cdxrpfee = ko.observable("0.01");
        self.zpxrpfee = ko.observable("0.01");
        self.koxrpfee = ko.observable("0.02");

        self.bitxrpfeer = ko.observable("");
        self.cdxrpfeer = ko.observable("");
        self.zpxrpfeer = ko.observable("");
        self.koxrpfeer = ko.observable("");

        self.bitltcfee = ko.observable("0.01");
        self.cdltcfee = ko.observable("0.002");
        self.zpltcfee = ko.observable("0.006");
        self.koltcfee = ko.observable("0.01");

        self.bitltcfeer = ko.observable("");
        self.cdltcfeer = ko.observable("");
        self.zpltcfeer = ko.observable("");
        self.koltcfeer = ko.observable("");

        self.bitethfee = ko.observable("0.001");
        self.cdethfee = ko.observable("0.001");
        self.zpethfee = ko.observable("0.002");
        self.koethfee = ko.observable("0.003");

        self.bitethfeer = ko.observable("");
        self.cdethfeer = ko.observable("");
        self.zpethfeer = ko.observable("");
        self.koethfeer = ko.observable("");

        self.bitbchfee = ko.observable("0.001");
        self.cdbchfee = ko.observable("0.001");
        self.zpbchfee = ko.observable("0.001");
        self.kobchfee = ko.observable("0.001");

        self.bitbchfeer = ko.observable("");
        self.cdbchfeer = ko.observable("");
        self.zpbchfeer = ko.observable("");
        self.kobchfeer = ko.observable("");
        var xrparray=[];
        function convert(a) {
            a = a.toString();

            var b = (a.search(/\./));
            if (b == 3) {
                return "\u20B9" + a;
            }

            if (b != -1)
            {
                a = a.substring(0, b);
                c = a.substring(a.length - 3, a.length);
                d = a.substring(a.length - 5, a.length - 3);
                e = a.substring(0, a.length - 5);
                a = e + "," + d + "," + c;

            } else {
                c = a.substring(a.length - 3, a.length);
                d = a.substring(a.length - 5, a.length - 3);

                e = a.substring(0, a.length - 5);
            }

            if (a.length - 5 == -1 || a.length - 5 == 0) {

                a = "\u20B9" + d + "," + c;
            } else {
                a = "\u20B9" + e + "," + d + "," + c;
            }


            return a;
        }



        function convert(a) {

            a = parseInt(a);
            a = Math.trunc(a);
            a = a.toString();
            if (a.length >= 6) {
                c = a.substring(a.length - 3, a.length);
                d = a.substring(a.length - 5, a.length - 3);

                e = a.substring(0, a.length - 5);

                a = "\u20B9" + e + "," + d + "," + c;


            }
            if (a.length == 4 || a.length == 5) {
                c = a.substring(a.length - 3, a.length);
                d = a.substring(a.length - 5, a.length - 3);

                e = a.substring(0, a.length - 5);

                a = "\u20B9" + d + "," + c;


            }

            return a;
        }
        function xrpconvert(f) {
            f = f.toString();
            return "\u20B9" + f;
        }
        function minimum(){
            
            
            
        }
        
        function maximum(){
            
            
        }
        function bind1() {


            if (count == 0 || count % 20 == 0) {

                $.ajax({
                    type: "GET",

                    url: "http://45.113.136.146:33025/messenger2/webapi/exchange/bitbins"
                }).done(function (data) {

                    var data1 = JSON.parse(data);
                    var str = JSON.stringify(data1[0]['BTC']);
                    var ob1 = JSON.parse(str);
                    var ask = ob1['sellPrice'];
                    var bid = ob1['buyPrice'];
                    var ltp = ob1['lastTradePrice'];
                    self.bitbtcfeer((0.001 * parseInt(ask)).toFixed(0));
                    self.bitbtcbuy(convert(bid));
                    self.bitbtcsell(convert(ask));
                    self.bitbtcltp(convert(ltp));

                    self.bitbtcbuy1(parseInt(ask) + 0.0025 * parseInt(ask));
                    self.bitbtcsell1(parseInt(bid) - 0.0025 * parseInt(bid));

                    var x = convert(self.bitbtcbuy1());
                    var y = convert(self.bitbtcsell1());

                    self.bitbtcbuy1(y);
                    self.bitbtcsell1(x);

                    var xrpstr = JSON.stringify(data1[1]['XRP']);
                    var xrpob1 = JSON.parse(xrpstr);
                    var xrpask = xrpob1['sellPrice'];
                    var xrpbid = xrpob1['buyPrice'];
                    var xrpltp = xrpob1['lastTradePrice'];


                    self.bitxrpfeer((0.1 * parseFloat(xrpask)).toFixed(1));


                    self.bitxrpbuy(xrpconvert(xrpbid));
                    self.bitxrpsell(xrpconvert(xrpask));
                    self.bitxrpltp(xrpconvert(xrpltp));

                    var x1 = parseFloat(xrpbid) - 0.0025 * parseFloat(xrpbid);
                    var y1 = parseFloat(xrpask) + 0.0025 * parseFloat(xrpask);
                    x1 = xrpconvert(x1.toFixed(2));
                    y1 = xrpconvert(y1.toFixed(2));
                    (self.bitxrpbuy1(x1));
                    (self.bitxrpsell1(y1));



                    self.bitxrpbuy1(x1);
                    self.bitxrpsell1(y1);

                    var ethstr = JSON.stringify(data1[4]['ETH']);
                    var ethob1 = JSON.parse(ethstr);
                    var ethask = ethob1['sellPrice'];
                    var ethbid = ethob1['buyPrice'];
                    var ethltp = ethob1['lastTradePrice'];
                    self.bitethfeer(0.001 * parseInt(ethask).toFixed(1));
                    self.bitethbuy(convert(ethbid));
                    self.bitethsell(convert(ethask));
                    self.bitethltp(convert(ethltp));

                    var x2 = (parseInt(ethbid) - 0.0025 * parseInt(ethbid));
                    var y2 = (parseInt(ethask) + 0.0025 * parseInt(ethask));
                    x2 = convert(x2);
                    y2 = convert(y2);

                    self.bitethbuy1(x2);
                    self.bitethsell1(y2);
                    self.bitethbuy(convert(ethbid));
                    self.bitethsell(convert(ethask));
                    
                    var ltcstr = JSON.stringify(data1[8]['LTC']);
                    var ltcob1 = JSON.parse(ltcstr);
                    var ltcask = ltcob1['sellPrice'];
                    var ltcbid = ltcob1['buyPrice'];

                    self.bitltcbuy(convert(ltcbid));
                    self.bitltcsell(convert(ltcask));
                    
                    var x3 = (parseInt(ltcbid) - 0.0025 * parseInt(ltcbid));
                    var y3 = (parseInt(ltcask) + 0.0025 * parseInt(ltcask));
                    x3 = convert(x3);
                    y3 = convert(y3);
                    self.bitltcfeer((0.01 * parseInt(ltcask)).toFixed(0));
                    self.bitltcbuy1(x3);
                    self.bitltcsell1(y3);

                    self.bitltcbuy1(x3);
                    self.bitltcsell1(y3);
                    


                });

                $.ajax({
                    url: 'https://coindelta.com/api/v1/public/getticker/',
                    type: 'get',
                    crossDomain: true,
                    dataType: 'json',
                    contentType: "application/json",
                    success: function (data) {
                        var str = JSON.stringify(data[0]);
                        var ob1 = JSON.parse(str);
                        var ask = ob1['Ask'];
                        var bid = ob1['Bid'];
                        var ltp = ob1['Last'];
                        ltp = ltp.toString();
                        self.cdbtcfeer((0.001 * parseInt(ask)).toFixed(0));
                        self.cdbtcbuy(convert(bid));
                        self.cdbtcsell(convert(ask));
                        self.cdbtcltp(convert(ltp));

                        var x = (parseInt(bid) - 0.003 * parseInt(bid));
                        var y = (parseInt(ask) + 0.003 * parseInt(ask));
                        x = convert(x);
                        y = convert(y);

                        self.cdbtcbuy1(x);
                        self.cdbtcsell1(y);


                        var xrpstr = JSON.stringify(data[9]);
                        var xrpob1 = JSON.parse(xrpstr);
                        var xrpask = xrpob1['Ask'];
                        var xrpbid = xrpob1['Bid'];
                        var xrpltp = xrpob1['Last'];
                        ltp = ltp.toString();
                        var a = (xrpask);
                        console.log(a);
                        console.log(parseFloat(a));
                        console.log(0.01 * parseFloat(a));
                        console.log((0.01 * parseFloat(a)));
                        self.cdxrpfeer((0.1 * parseFloat(a)).toFixed(1));
                        self.cdxrpbuy(xrpconvert(xrpbid));
                        self.cdxrpsell(xrpconvert(xrpask));
                        self.cdxrpltp(xrpconvert(xrpltp));

                        var x3 = parseFloat(xrpbid) - 0.003 * parseFloat(xrpbid);
                        var y3 = parseFloat(xrpask) + 0.003 * parseFloat(xrpask);
                        x3 = xrpconvert(x3.toFixed(2));
                        y3 = xrpconvert(y3.toFixed(2));
                        (self.cdxrpbuy1(x3));
                        (self.cdxrpsell1(y3));

                        var ltcstr = JSON.stringify(data[2]);
                        var ltcob1 = JSON.parse(ltcstr);
                        var ltcask = ltcob1['Ask'];
                        var ltcbid = ltcob1['Bid'];
                        var ltcltp = ltcob1['Last'];
                        ltp = ltp.toString();
                        self.cdltcfeer((0.002 * parseInt(ltcask)).toFixed(0));
                        self.cdltcbuy(convert(ltcbid));
                        self.cdltcsell(convert(ltcask));
                        self.cdltcltp(convert(ltcltp));

                        var x2 = (parseInt(ltcbid) - 0.003 * parseInt(ltcbid));
                        var y2 = (parseInt(ltcask) + 0.003 * parseInt(ltcask));
                        x2 = convert(x2);
                        y2 = convert(y2);

                        self.cdltcbuy1(x2);
                        self.cdltcsell1(y2);

                        var ethstr = JSON.stringify(data[1]);
                        var ethob1 = JSON.parse(ethstr);
                        var ethask = ethob1['Ask'];
                        var ethbid = ethob1['Bid'];
                        var ethltp = ethob1['Last'];
                        self.cdethfeer((0.001 * parseInt(ethask)).toFixed(0));
                        self.cdethbuy(convert(ethbid));
                        self.cdethsell(convert(ethask));
                        self.cdethltp(convert(ethltp));

                        var x4 = (parseInt(ethbid) - 0.003 * parseInt(ethbid));
                        var y4 = (parseInt(ethask) + 0.003 * parseInt(ethask));
                        x4 = convert(x4);
                        y4 = convert(y4);

                        self.cdethbuy1(x4);
                        self.cdethsell1(y4);

                        var bchstr = JSON.stringify(data[11]);
                        var bchob1 = JSON.parse(bchstr);
                        var bchask = bchob1['Ask'];
                        var bchbid = bchob1['Bid'];
                        var bchltp = bchob1['Last'];
                        self.cdbchfeer((0.001 * parseInt(bchask)).toFixed(1));
                        self.cdbchbuy(convert(bchbid));
                        self.cdbchsell(convert(bchask));
                        self.cdbchltp(convert(bchltp));

                        var x5 = (parseInt(bchbid) - 0.003 * parseInt(bchbid));
                        var y5 = (parseInt(bchask) + 0.003 * parseInt(bchask));
                        x5 = convert(x5);
                        y5 = convert(y5);

                        self.cdbchbuy1(x5);
                        self.cdbchsell1(y5);
                    }
                });

                $.ajax({
                    type: "GET",

                    url: "http://45.113.136.146:33025/messenger2/webapi/exchange/zebpay"
                }).done(function (data) {
                    var abc = JSON.parse(data);
                    self.zpbtcltp('-');
                    self.zpbtcbuy(convert(abc['sell']));
                    self.zpbtcsell(convert(abc['buy']));
                    self.zpbtcfeer((0.0005 * parseInt(abc['buy'])).toFixed(0));
                    var x = (parseInt(abc['buy']) - 0.0118 * parseInt(abc['buy']));
                    var y = (parseInt(abc['sell']) + 0.0118 * parseInt(abc['sell']));
                    x = convert(x);
                    y = convert(y);
                    self.zpbtcbuy1(x);
                    self.zpbtcsell1(y);

                });
                $.ajax({
                    type: "GET",

                    url: "http://45.113.136.146:33025/messenger2/webapi/exchange/bitbinszebpayxrp"
                }).done(function (data) {
                    var abc = JSON.parse(data);
                    self.zpxrpltp('-');
                    self.zpxrpbuy(xrpconvert(abc['sell']));
                    self.zpxrpsell(xrpconvert(abc['buy']));
                    self.zpxrpfeer((0.1 * parseFloat(abc['buy'])).toFixed(1));
                    var x1 = (parseFloat(abc['sell']) - 0.0118 * parseFloat(abc['sell']));
                    var y1 = (parseFloat(abc['buy']) + 0.0118 * parseFloat(abc['buy']));
                    x1 = xrpconvert(x1.toFixed(2));
                    y1 = xrpconvert(y1.toFixed(2));
                    self.zpxrpbuy1(x1);
                    self.zpxrpsell1(y1);

                });

                $.ajax({
                    type: "GET",

                    url: "http://45.113.136.146:33025/messenger2/webapi/exchange/bitbinszebpayeth"
                }).done(function (data) {
                    var abc = JSON.parse(data);
                    self.zpethltp('-');
                    self.zpethbuy(convert(abc['sell']));
                    self.zpethsell(convert(abc['buy']));
                    self.zpethfeer((0.002 * parseInt(abc['buy'])).toFixed(1));
                    var x2 = (parseInt(abc['sell']) - 0.0118 * parseInt(abc['sell']));
                    var y2 = (parseInt(abc['buy']) + 0.0118 * parseInt(abc['buy']));
                    x2 = convert(x2);
                    y2 = convert(y2);
                    self.zpethbuy1(x2);
                    self.zpethsell1(y2);

                });

                $.ajax({
                    type: "GET",

                    url: "http://45.113.136.146:33025/messenger2/webapi/exchange/bitbinszebpayltc"
                }).done(function (data) {
                    var abc = JSON.parse(data);
                    self.zpltcltp('-');
                    self.zpltcbuy(convert(abc['sell']));
                    self.zpltcsell(convert(abc['buy']));
                    self.zpltcfeer((0.006 * parseInt(abc['buy'])).toFixed(0));
                    var x3 = (parseInt(abc['sell']) - 0.0118 * parseInt(abc['sell']));
                    var y3 = (parseInt(abc['buy']) + 0.0118 * parseInt(abc['buy']));
                    x3 = convert(x3);
                    y3 = convert(y3);
                    self.zpltcbuy1(x3);
                    self.zpltcsell1(y3);

                });

                $.ajax({
                    type: "GET",

                    url: "http://45.113.136.146:33025/messenger2/webapi/exchange/bitbinszebpaybch"
                }).done(function (data) {
                    var abc = JSON.parse(data);
                    self.zpbchltp('-');
                    self.zpbchbuy(convert(abc['sell']));
                    self.zpbchsell(convert(abc['buy']));
                    self.zpbchfeer((0.001 * parseInt(abc['buy'])).toFixed(1));
                    var x4 = (parseInt(abc['buy']) - 0.0118 * parseInt(abc['buy']));
                    var y4 = (parseInt(abc['sell']) + 0.0118 * parseInt(abc['sell']));
                    x4 = convert(x4);
                    y4 = convert(y4);
                    self.zpbchbuy1(x4);
                    self.zpbchsell1(y4);

                });

                $.ajax({
                    type: "GET",

                    url: "https://koinex.in/api/ticker"
                }).done(function (data) {
                    var abc = (data);

                    self.kobtcbuy(convert(abc['stats']['BTC']['lowest_ask']));
                    self.kobtcsell(convert(abc['stats']['BTC']['highest_bid']));
                    self.kobtcfeer((0.001 * parseInt(abc['stats']['BTC']['highest_bid'])).toFixed(0));
                    var x = abc['stats']['BTC']['highest_bid'];
                    var y = (parseInt(abc['stats']['BTC']['lowest_ask']) + 0.0025 * parseInt(abc['stats']['BTC']['lowest_ask']));
                    x = convert(x);
                    y = convert(y);
                    self.kobtcbuy1(y);
                    self.kobtcsell1(x);

                    self.koxrpbuy(xrpconvert(abc['stats']['XRP']['highest_bid']));
                    self.koxrpsell(xrpconvert(abc['stats']['XRP']['lowest_ask']));
                    self.koxrpfeer((0.2 * parseInt(abc['stats']['XRP']['highest_bid'])).toFixed(1));
                    var x1 = abc['stats']['XRP']['highest_bid'];
                    var y1 = (parseFloat(abc['stats']['XRP']['lowest_ask']) + 0.0025 * parseFloat(abc['stats']['XRP']['lowest_ask']));
                    x1 = xrpconvert(x1);
                    y1 = xrpconvert(y1.toFixed(2));
                    self.koxrpbuy1(x1);
                    self.koxrpsell1(y1);

                    self.koltcbuy(convert(abc['stats']['LTC']['highest_bid']));
                    self.koltcsell(convert(abc['stats']['LTC']['lowest_ask']));
                    self.koltcfeer((0.01 * parseInt(abc['stats']['LTC']['highest_bid'])).toFixed(0));
                    var x3 = abc['stats']['LTC']['highest_bid'];
                    var y3 = (parseInt(abc['stats']['LTC']['lowest_ask']) + 0.0025 * parseInt(abc['stats']['LTC']['lowest_ask']));
                    x3 = convert(x3);
                    y3 = convert(y3);
                    self.koltcbuy1(x3);
                    self.koltcsell1(y3);

                    self.koethbuy(convert(abc['stats']['ETH']['highest_bid']));
                    self.koethsell(convert(abc['stats']['ETH']['lowest_ask']));
                    self.koethfeer((0.003 * parseInt(abc['stats']['ETH']['highest_bid'])).toFixed(1));
                    var x4 = abc['stats']['ETH']['highest_bid'];
                    var y4 = (parseInt(abc['stats']['ETH']['lowest_ask']) + 0.0025 * parseInt(abc['stats']['ETH']['lowest_ask']));
                    x4 = convert(x4);
                    y4 = convert(y4);
                    self.koethbuy1(x4);
                    self.koethsell1(y4);

                    self.kobchbuy(convert(abc['stats']['BCH']['highest_bid']));
                    self.kobchsell(convert(abc['stats']['BCH']['lowest_ask']));
                    self.kobchfeer((0.001 * parseInt(abc['stats']['BCH']['highest_bid'])).toFixed(1));
                    var x5 = abc['stats']['BCH']['highest_bid'];
                    var y5 = (parseInt(abc['stats']['BCH']['lowest_ask']) + 0.0025 * parseInt(abc['stats']['BCH']['lowest_ask']));
                    x5 = convert(x5);
                    y5 = convert(y5);
                    self.kobchbuy1(x5);
                    self.kobchsell1(y5);
                });
            }

            /*
            if (count > 0 && count % 20 == 0)
            
            {
                $.ajax({
                    type: "GET",

                    url: "http://45.113.136.146:33025/messenger2/webapi/exchange/bitbins"
                }).done(function (data) {

                    var data1 = JSON.parse(data);
                    var str = JSON.stringify(data1[0]['BTC']);
                    var ob1 = JSON.parse(str);
                    var ask = ob1['sellPrice'];
                    var bid = ob1['buyPrice'];
                    var ltp = ob1['lastTradePrice'];

                    self.bitbtcbuy(convert(bid));
                    self.bitbtcsell(convert(ask));
                    self.bitbtcltp(convert(ltp));

                    self.bitbtcbuy1(parseInt(bid) + 0.0025 * parseInt(bid));
                    self.bitbtcsell1(parseInt(ask) - 0.0025 * parseInt(ask));

                    var x = convert(self.bitbtcbuy1());
                    var y = convert(self.bitbtcsell1());

                    self.bitbtcbuy1(x);
                    self.bitbtcsell1(y);

                    var xrpstr = JSON.stringify(data1[1]['XRP']);
                    var xrpob1 = JSON.parse(xrpstr);
                    var xrpask = xrpob1['sellPrice'];
                    var xrpbid = xrpob1['buyPrice'];
                    var xrpltp = xrpob1['lastTradePrice'];



                    self.bitxrpbuy(xrpconvert(xrpbid));
                    self.bitxrpsell(xrpconvert(xrpask));
                    self.bitxrpltp(xrpconvert(xrpltp));

                    var x1 = parseFloat(xrpbid) - 0.0025 * parseFloat(xrpbid);
                    var y1 = parseFloat(xrpask) + 0.0025 * parseFloat(xrpask);
                    x1 = xrpconvert(x1.toFixed(2));
                    y1 = xrpconvert(y1.toFixed(2));
                    (self.bitxrpbuy1(x1));
                    (self.bitxrpsell1(y1));



                    self.bitxrpbuy1(x1);
                    self.bitxrpsell1(y1);

                    var ethstr = JSON.stringify(data1[4]['ETH']);
                    var ethob1 = JSON.parse(ethstr);
                    var ethask = ethob1['sellPrice'];
                    var ethbid = ethob1['buyPrice'];
                    var ethltp = ethob1['lastTradePrice'];

                    self.bitethbuy(convert(ethbid));
                    self.bitethsell(convert(ethask));
                    self.bitethltp(convert(ethltp));

                    var x2 = (parseInt(ethbid) - 0.0025 * parseInt(ethbid));
                    var y2 = (parseInt(ethask) + 0.0025 * parseInt(ethask));
                    x2 = convert(x2);
                    y2 = convert(y2);

                    self.bitethbuy1(x2);
                    self.bitethsell1(y2);

                    var ltcstr = JSON.stringify(data1[8]['LTC']);
                    var ltcob1 = JSON.parse(ltcstr);
                    var ltcask = ltcob1['sellPrice'];
                    var ltcbid = ltcob1['buyPrice'];


                    var x3 = (parseInt(ltcbid) - 0.0025 * parseInt(ltcbid));
                    var y3 = (parseInt(ltcask) + 0.0025 * parseInt(ltcask));
                    x3 = convert(x3);
                    y3 = convert(y3);

                    self.bitltcbuy1(x3);
                    self.bitltcsell1(y3);

                    self.bitltcbuy1(parseInt(ltcbid) + 0.0025 * parseInt(ltcbid));
                    self.bitltcsell1(parseInt(ltcask) - 0.0025 * parseInt(ltcask));
                    self.bitltcbuy1(convert(self.bitltcbuy1));
                    self.bitltcsell1(convert(self.bitltcsell1));


                });

                $.ajax({
                    url: 'https://coindelta.com/api/v1/public/getticker/',
                    type: 'get',
                    crossDomain: true,
                    dataType: 'json',
                    contentType: "application/json",
                    success: function (data) {
                        var str = JSON.stringify(data[0]);
                        var ob1 = JSON.parse(str);
                        var ask = ob1['Ask'];
                        var bid = ob1['Bid'];
                        var ltp = ob1['Last'];
                        ltp = ltp.toString();
                        self.cdbtcbuy(convert(bid));
                        self.cdbtcsell(convert(ask));
                        self.cdbtcltp(convert(ltp));

                        var x = (parseInt(bid) - 0.003 * parseInt(bid));
                        var y = (parseInt(ask) + 0.003 * parseInt(ask));
                        x = convert(x);
                        y = convert(y);

                        self.cdbtcbuy1(x);
                        self.cdbtcsell1(y);


                        var xrpstr = JSON.stringify(data[9]);
                        var xrpob1 = JSON.parse(xrpstr);
                        var xrpask = xrpob1['Ask'];
                        var xrpbid = xrpob1['Bid'];
                        var xrpltp = xrpob1['Last'];
                        ltp = ltp.toString();
                        self.cdxrpbuy(xrpconvert(xrpbid));
                        self.cdxrpsell(xrpconvert(xrpask));
                        self.cdxrpltp(xrpconvert(xrpltp));

                        var x3 = parseFloat(xrpbid) - 0.003 * parseFloat(xrpbid);
                        var y3 = parseFloat(xrpask) + 0.003 * parseFloat(xrpask);
                        x3 = xrpconvert(x3.toFixed(2));
                        y3 = xrpconvert(y3.toFixed(2));
                        (self.cdxrpbuy1(x3));
                        (self.cdxrpsell1(y3));

                        var ltcstr = JSON.stringify(data[2]);
                        var ltcob1 = JSON.parse(ltcstr);
                        var ltcask = ltcob1['Ask'];
                        var ltcbid = ltcob1['Bid'];
                        var ltcltp = ltcob1['Last'];
                        ltp = ltp.toString();
                        self.cdltcbuy(convert(ltcbid));
                        self.cdltcsell(convert(ltcask));
                        self.cdltcltp(convert(ltcltp));

                        var x2 = (parseInt(ltcbid) - 0.003 * parseInt(ltcbid));
                        var y2 = (parseInt(ltcask) + 0.003 * parseInt(ltcask));
                        x2 = convert(x2);
                        y2 = convert(y2);

                        self.cdltcbuy1(x2);
                        self.cdltcsell1(y2);

                        var ethstr = JSON.stringify(data[1]);
                        var ethob1 = JSON.parse(ethstr);
                        var ethask = ethob1['Ask'];
                        var ethbid = ethob1['Bid'];
                        var ethltp = ethob1['Last'];

                        self.cdethbuy(convert(ethbid));
                        self.cdethsell(convert(ethask));
                        self.cdethltp(convert(ethltp));

                        var x4 = (parseInt(ethbid) - 0.003 * parseInt(ethbid));
                        var y4 = (parseInt(ethask) + 0.003 * parseInt(ethask));
                        x4 = convert(x4);
                        y4 = convert(y4);

                        self.cdethbuy1(x4);
                        self.cdethsell1(y4);

                        var bchstr = JSON.stringify(data[11]);
                        var bchob1 = JSON.parse(bchstr);
                        var bchask = bchob1['Ask'];
                        var bchbid = bchob1['Bid'];
                        var bchltp = bchob1['Last'];

                        self.cdbchbuy(convert(bchbid));
                        self.cdbchsell(convert(bchask));
                        self.cdbchltp(convert(bchltp));

                        var x5 = (parseInt(bchbid) - 0.003 * parseInt(bchbid));
                        var y5 = (parseInt(bchask) + 0.003 * parseInt(bchask));
                        x5 = convert(x5);
                        y5 = convert(y5);

                        self.cdbchbuy1(x5);
                        self.cdbchsell1(y5);
                    }
                });

                $.ajax({
                    type: "GET",

                    url: "http://45.113.136.146:33025/messenger2/webapi/exchange/zebpay"
                }).done(function (data) {
                    var abc = JSON.parse(data);
                    self.zpbtcltp('-');
                    self.zpbtcbuy(convert(abc['sell']));
                    self.zpbtcsell(convert(abc['buy']));

                    var x = (parseInt(abc['buy']) - 0.0118 * parseInt(abc['buy']));
                    var y = (parseInt(abc['sell']) + 0.0118 * parseInt(abc['sell']));
                    x = convert(x);
                    y = convert(y);
                    self.zpbtcbuy1(x);
                    self.zpbtcsell1(y);

                });
                $.ajax({
                    type: "GET",

                    url: "http://45.113.136.146:33025/messenger2/webapi/exchange/bitbinszebpayxrp"
                }).done(function (data) {
                    var abc = JSON.parse(data);
                    self.zpxrpltp('-');
                    self.zpxrpbuy(xrpconvert(abc['sell']));
                    self.zpxrpsell(xrpconvert(abc['buy']));
                    var x1 = (parseFloat(abc['sell']) - 0.0118 * parseFloat(abc['sell']));
                    var y1 = (parseFloat(abc['buy']) + 0.0118 * parseFloat(abc['buy']));
                    x1 = xrpconvert(x1.toFixed(2));
                    y1 = xrpconvert(y1.toFixed(2));
                    self.zpxrpbuy1(x1);
                    self.zpxrpsell1(y1);

                });

                $.ajax({
                    type: "GET",

                    url: "http://45.113.136.146:33025/messenger2/webapi/exchange/bitbinszebpayeth"
                }).done(function (data) {
                    var abc = JSON.parse(data);
                    self.zpethltp('-');
                    self.zpethbuy(convert(abc['sell']));
                    self.zpethsell(convert(abc['buy']));
                    var x2 = (parseInt(abc['sell']) - 0.0118 * parseInt(abc['sell']));
                    var y2 = (parseInt(abc['buy']) + 0.0118 * parseInt(abc['buy']));
                    x2 = convert(x2);
                    y2 = convert(y2);
                    self.zpethbuy1(x2);
                    self.zpethsell1(y2);

                });

                $.ajax({
                    type: "GET",

                    url: "http://45.113.136.146:33025/messenger2/webapi/exchange/bitbinszebpayltc"
                }).done(function (data) {
                    var abc = JSON.parse(data);
                    self.zpltcltp('-');
                    self.zpltcbuy(convert(abc['sell']));
                    self.zpltcsell(convert(abc['buy']));
                    var x3 = (parseInt(abc['sell']) - 0.0118 * parseInt(abc['sell']));
                    var y3 = (parseInt(abc['buy']) + 0.0118 * parseInt(abc['buy']));
                    x3 = convert(x3);
                    y3 = convert(y3);
                    self.zpltcbuy1(x3);
                    self.zpltcsell1(y3);

                });

                $.ajax({
                    type: "GET",

                    url: "http://45.113.136.146:33025/messenger2/webapi/exchange/bitbinszebpaybch"
                }).done(function (data) {
                    var abc = JSON.parse(data);
                    self.zpbchltp('-');
                    self.zpbchbuy(convert(abc['sell']));
                    self.zpbchsell(convert(abc['buy']));

                    var x4 = (parseInt(abc['buy']) - 0.0118 * parseInt(abc['buy']));
                    var y4 = (parseInt(abc['sell']) + 0.0118 * parseInt(abc['sell']));
                    x4 = convert(x4);
                    y4 = convert(y4);
                    self.zpbchbuy1(x4);
                    self.zpbchsell1(y4);

                });

            }
            */
            count = count + 1;
        }

        setInterval(bind1, 1000);

    }

    return testContentViewModel;
});
