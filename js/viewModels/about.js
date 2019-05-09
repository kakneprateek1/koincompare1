/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * compare module
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojtable', 'ojs/ojarraytabledatasource', 'ojs/ojbutton', 'ojs/ojcollapsible'
], function (oj, ko) {
    /**
     * The view model for the main content view template
     */
    var btcbit = {btcexchange: 'Bitbins', btcbuyPrice: '-', btcsellPrice: '-', btclastTradePrice: '-', btcbuy: '-', btcsell: '-'};
    var btccd = {btcexchange: 'Coindelta', btcbuyPrice: '-', btcsellPrice: '-', btclastTradePrice: '-', btcbuy: '-', btcsell: '-'};
    var btcpb = {btcexchange: 'PocketBits', btcbuyPrice: '-', btcsellPrice: '-', btclastTradePrice: '-', btcbuy: '-', btcsell: '-'};
    var btczp = {btcexchange: 'ZebPay', btcbuyPrice: '-', btcsellPrice: '-', btclastTradePrice: '-', btcbuy: '-', btcsell: '-'};
    var btcko = {btcexchange: 'Koinex', btcbuyPrice: '-', btcsellPrice: '-', btclastTradePrice: '-', btcbuy: '-', btcsell: '-'};
    
    
    var xrpbit = {xrpexchange: 'Bitbins', xrpbuyPrice: '-', xrpsellPrice: '-', xrplastTradePrice: '-', xrpbuy: '-', xrpsell: '-'};
    var xrpcd = {xrpexchange: 'Coindelta', xrpbuyPrice: '-', xrpsellPrice: '-',xrplastTradePrice: '-', xrpbuy: '-', xrpsell: '-'};  
    var xrpzp = {xrpexchange: 'ZebPay', xrpbuyPrice: '-', xrpsellPrice: '-', xrplastTradePrice: '-', xrpbuy: '-', xrpsell: '-'};
    var xrpko = {xrpexchange: 'Koinex', xrpbuyPrice: '-', xrpsellPrice: '-', xrplastTradePrice: '-', xrpbuy: '-', xrpsell: '-'};

    var ethbit = {ethexchange: 'Bitbins', ethbuyPrice: '-', ethsellPrice: '-', ethlastTradePrice: '-', ethbuy: '-',ethsell: '-'};
    var ethcd = {ethexchange: 'Coindelta', ethbuyPrice: '-', ethsellPrice: '-', ethlastTradePrice: '-', ethbuy: '-',ethsell: '-'};  
    var ethzp = {ethexchange: 'ZebPay', ethbuyPrice: '-', ethsellPrice: '-', ethlastTradePrice: '-', ethbuy: '-', ethsell: '-'};
    var ethko = {ethexchange: 'Koinex', ethbuyPrice: '-', ethsellPrice: '-', ethlastTradePrice: '-', ethbuy: '-', ethsell: '-'};

    var ltcbit = {btcexchange: 'Bitbins', btcbuyPrice: '-', btcsellPrice: '-', btclastTradePrice: '-', btcbuy: '-', btcsell: '-'};
    var ltccd = {btcexchange: 'Coindelta', btcbuyPrice: '-', btcsellPrice: '-', btclastTradePrice: '-', btcbuy: '-', btcsell: '-'};  
    var ltczp = {btcexchange: 'ZebPay', btcbuyPrice: '-', btcsellPrice: '-', btclastTradePrice: '-', btcbuy: '-', btcsell: '-'};
    var ltcko = {btcexchange: 'Koinex', btcbuyPrice: '-', btcsellPrice: '-', btclastTradePrice: '-', btcbuy: '-', btcsell: '-'};
   
    var bchbit = {btcexchange: 'Bitbins', btcbuyPrice: '-', btcsellPrice: '-', btclastTradePrice: '-', btcbuy: '-', btcsell: '-'};
    var bchcd = {btcexchange: 'Coindelta', btcbuyPrice: '-', btcsellPrice: '-', btclastTradePrice: '-', btcbuy: '-', btcsell: '-'};  
    var bchzp = {btcexchange: 'ZebPay', btcbuyPrice: '-', btcsellPrice: '-', btclastTradePrice: '-', btcbuy: '-', btcsell: '-'};
    var bchko = {btcexchange: 'Koinex', btcbuyPrice: '-', btcsellPrice: '-', btclastTradePrice: '-', btcbuy: '-', btcsell: '-'};

    var count = 0;
    function aboutContentViewModel() {
        var self = this;
        self.deptArray = ko.observableArray();
        self.sellPrice = ko.observable();
        self.buyPrice = ko.observable();
        self.lastTradePrice = ko.observable();



        self.btcsellPrice = ko.observable();
        self.btcbuyPrice = ko.observable();
        self.btclastTradePrice = ko.observable();
        

        var btc = [btcbit, btccd, btczp, btcko];
        self.btcArray = ko.observableArray(btc);
        self.btcdataprovider = new oj.ArrayTableDataSource(self.btcArray, {idAttribute: 'btcsellPrice'});
        
        
        self.xrpsellPrice = ko.observable();
        self.xrpbuyPrice = ko.observable();
        self.xrplastTradePrice = ko.observable();
        
        var xrp = [xrpbit, xrpcd, xrpko];
        self.xrpArray = ko.observableArray(xrp);
        self.xrpdataprovider = new oj.ArrayTableDataSource(self.xrpArray, {idAttribute: 'xrpsellPrice'});

        self.ltcsellPrice = ko.observable();
        self.ltcbuyPrice = ko.observable();
        self.ltclastTradePrice = ko.observable();
        
        var ltc = [ltcbit, ltccd, ltczp, ltcko];
        self.ltcArray = ko.observableArray(ltc);
        self.ltcdataprovider = new oj.ArrayTableDataSource(self.ltcArray, {idAttribute: 'ltcsellPrice'});
        
        //------------convert function---------------------------

        function convert(a) {
            a = a.toString();
            var b = (a.search(/\./));

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
                a = "₹ "+e + "," + d + "," + c;

            }

            return a;
        }

        //------------convert function end---------------------------

        function bind1() {



            if (count === 0) {


                

                //-------------BitCoin-----------------------------------------

                //btckoinex----------------------------------------------------
                $.ajax({
                    type: "GET",

                    url: "https://koinex.in/api/ticker"
                }).done(function (data) {
                    var abc = (data);
                    
                    btcko = {};
                    btcko.btclastTradePrice = abc['stats']['BTC']['last_traded_price'];
                    btcko.btcbuyPrice = abc['stats']['BTC']['highest_bid'];
                    btcko.btcsellPrice = abc['stats']['BTC']['lowest_ask'];
                    btcko.btcbuyPrice = convert(btcko.btcbuyPrice);
                    btcko.btcsellPrice = convert(btcko.btcsellPrice);
                    btcko.btclastTradePrice = convert(btcko.btclastTradePrice);                    
                    btcko.btcexchange = 'Koinex';
                    var buy = "<a  target='blank' href='https://bitbns.com/trade/#/dashboard/xrp' >Buy</a> ";
                    var sell = "<a  target='blank' href='https://bitbns.com/trade/#/dashboard/xrp' >Sell</a> ";
                    btcko.btcsell = sell;
                    btcko.btcbuy = buy;
              
                
                    xrp = {};
                    xrpko.xrplastTradePrice = (abc['stats']['XRP']['last_traded_price']);
                    xrpko.xrpbuyPrice = (abc['stats']['XRP']['highest_bid']);
                    xrpko.xrpsellPrice = (abc['stats']['XRP']['lowest_ask']);               
                    xrpko.xrpsellPrice=xrpko.xrpsellPrice;
                    xrpko.xrpexchange = 'Koinex';
                    var buy = "<a  target='blank' href='https://bitbns.com/trade/#/dashboard/xrp' >Buy</a> ";
                    var sell = "<a  target='blank' href='https://bitbns.com/trade/#/dashboard/xrp' >Sell</a> ";
                    xrpko.xrpsell = sell;
                    xrpko.xrpbuy = buy;
                    





                });
                //--------------btckoinexends------------------------------

                //----------btczebpay---------------------------------------
                $.ajax({
                    type: "GET",

                    url: "http://45.113.136.146:33025/messenger/webapi/exchange/zebpay"
                }).done(function (data) {
                    var abc = JSON.parse(data);

                    btczp = {};
                    btczp.btclastTradePrice = '-';
                    btczp.btcbuyPrice = abc['sell'];
                    btczp.btcsellPrice = abc['buy'];
                    btczp.btcbuyPrice = convert(btczp.btcbuyPrice);
                    btczp.btcsellPrice = convert(btczp.btcsellPrice);

                    btczp.btcexchange = 'Zebpay';
                    var buy = "<a  target='blank' href='https://bitbns.com/trade/#/dashboard/xrp' >Buy</a> ";

                    var sell = "<a  target='blank' href='https://bitbns.com/trade/#/dashboard/xrp' >Sell</a> ";
                    btczp.btcsell = sell;
                    btczp.btcbuy = buy;


                });
                
                //---btczebpayends-------------------------------------------
                //--------------------btcbitbns-------------------------------

                $.ajax({
                    type: "GET",

                    url: "http://45.113.136.146:33025/messenger/webapi/exchange/bitbins"
                }).done(function (data) {

                    var data1 = JSON.parse(data);
                    var str = JSON.stringify(data1[0]['BTC']);
                    var ob1 = JSON.parse(str);
                    var ask = ob1['sellPrice'];
                    var bid = ob1['buyPrice'];
                    var ltp = ob1['lastTradePrice'];
                    btcbit = {};
                    btcbit.btcbuyPrice = bid;
                    btcbit.btcsellPrice = ask;
                    btcbit.btclastTradePrice = ltp;
                    btcbit.btcbuyPrice = convert(btcbit.btcbuyPrice);
                    btcbit.btcsellPrice = convert(btcbit.btcsellPrice);
                    btcbit.btclastTradePrice = convert(btcbit.btclastTradePrice);
                    var buy = "<a  target='blank' href='https://bitbns.com/trade/#/dashboard/xrp' >Buy</a> ";
                    var sell = "<a  target='blank' href='https://bitbns.com/trade/#/dashboard/xrp' >Sell</a> ";
                    btcbit.btcsell = sell;
                    btcbit.btcbuy = buy;
                    btcbit.btcexchange = 'Bitbins';
                    
                    
                    var xrpstr = JSON.stringify(data1[1]['XRP']);
                    var xrpob1 = JSON.parse(xrpstr);
                    var xrpask = xrpob1['sellPrice'];
                    var xrpbid = xrpob1['buyPrice'];
                    var xrpltp = xrpob1['lastTradePrice'];
                    xrpbit = {};
                    xrpbit.xrpbuyPrice = xrpbid;
                    xrpbit.xrpsellPrice = xrpask;
                    xrpbit.xrplastTradePrice = xrpltp;              
                    var xrpbuy = "<a  target='blank' href='https://bitbns.com/trade/#/dashboard/xrp' >Buy</a> ";
                    var xrpsell = "<a  target='blank' href='https://bitbns.com/trade/#/dashboard/xrp' >Sell</a> ";
                    xrpbit.xrpsell = sell;
                    xrpbit.xrpbuy = buy;
                    xrpbit.xrpexchange = 'Bitbins';
                    
                });
                //--------------------btcbitbnsends-------------------------------


                //--------------------btcCoinDelta----------------------------


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
                        btccd = {};
                        btccd.btcbuyPrice = bid;
                        btccd.btcsellPrice = ask;
                        btccd.btclastTradePrice = ltp;
                        btccd.btcbuyPrice = convert(btccd.btcbuyPrice);
                        btccd.btcsellPrice = convert(btccd.btcsellPrice);
                        btccd.btclastTradePrice = convert(btccd.btclastTradePrice);
                        var buy = "<a  target='blank' href='https://bitbns.com/trade/#/dashboard/xrp' >Buy</a> ";
                        var sell = "<a  target='blank' href='https://bitbns.com/trade/#/dashboard/xrp' >Sell</a> ";
                        btccd.btcsell = sell;
                        btccd.btcbuy = buy;
                        btccd.btcexchange = 'Coindelta';
                        self.obj = ko.observableArray([btcbit, btccd, btczp, btcko]);
                        self.btcArray(self.obj());
                        
                        
                        var xrpstr = JSON.stringify(data[9]);
                        var xrpob1 = JSON.parse(xrpstr);
                        var xrpask = xrpob1['Ask'];
                        var xrpbid = xrpob1['Bid'];
                        var xrpltp = xrpob1['Last'];
                        xrpcd = {};
                        xrpcd.xrpbuyPrice = xrpbid;
                        xrpcd.xrpsellPrice =xrpask;
                        xrpcd.xrplastTradePrice =xrpltp;                       
                        var xrpbuy = "<a  target='blank' href='https://bitbns.com/trade/#/dashboard/xrp' >Buy</a> ";
                        var xrpsell = "<a  target='blank' href='https://bitbns.com/trade/#/dashboard/xrp' >Sell</a> ";
                        xrpcd.xrpsell = xrpsell;
                        xrpcd.xrpbuy = xrpbuy;
                        xrpcd.xrpexchange = 'Coindelta';
                    
                        self.xrpobj = ko.observableArray([xrpbit, xrpko, xrpcd]); 
                        console.log(self.xrpobj());
                        self.xrpArray(self.xrpobj());

                    }



                });

                //--------------------btcCoinDeltaends----------------------------
            }
            if (count % 20 == 0 && count != 0) {
              


                //-------------BitCoin-----------------------------------------


                $.ajax({
                    type: "GET",

                    url: "https://koinex.in/api/ticker"
                }).done(function (data) {
                    var abc = (data);

                    btcko = {};
                    btcko.btclastTradePrice = abc['stats']['BTC']['last_traded_price'];
                    btcko.btcbuyPrice = abc['stats']['BTC']['highest_bid'];
                    btcko.btcsellPrice = abc['stats']['BTC']['lowest_ask'];
                    btcko.btcbuyPrice = convert(btcko.btcbuyPrice);
                    btcko.btcsellPrice = convert(btcko.btcsellPrice);
                    btcko.btclastTradePrice = convert(btcko.btclastTradePrice);
                    btcko.btcexchange = 'Koinex';
                    var buy = "<a  target='blank' href='https://bitbns.com/trade/#/dashboard/xrp' >Buy</a> ";
                    var sell = "<a  target='blank' href='https://bitbns.com/trade/#/dashboard/xrp' >Sell</a> ";
                    btcko.btcsell = sell;
                    btcko.btcbuy = buy;
                    


                    xrp = {};
                    xrpko.xrplastTradePrice = abc['stats']['XRP']['last_traded_price'];
                    xrpko.xrpbuyPrice = abc['stats']['XRP']['highest_bid'];
                    xrpko.xrpsellPrice = abc['stats']['XRP']['lowest_ask'];
                    xrpko.xrpexchange = 'Koinex';
                    var buy = "<a  target='blank' href='https://bitbns.com/trade/#/dashboard/xrp' >Buy</a> ";
                    var sell = "<a  target='blank' href='https://bitbns.com/trade/#/dashboard/xrp' >Sell</a> ";
                    xrpko.xrpsell = sell;
                    xrpko.xrpbuy = buy;
                    



                });



                $.ajax({
                    type: "GET",

                    url: "http://45.113.136.146:33025/messenger/webapi/exchange/zebpay"
                }).done(function (data) {
                    var abc = JSON.parse(data);

                    btczp = {};
                    btczp.btclastTradePrice = '-';
                    btczp.btcbuyPrice = abc['sell'];
                    btczp.btcsellPrice = abc['buy'];
                    btczp.btcbuyPrice = convert(btczp.btcbuyPrice);
                    btczp.btcsellPrice = convert(btczp.btcsellPrice);

                    btczp.btcexchange = 'Zebpay';
                    var buy = "<a  target='blank' href='https://bitbns.com/trade/#/dashboard/xrp' >Buy</a> ";

                    var sell = "<a  target='blank' href='https://bitbns.com/trade/#/dashboard/xrp' >Sell</a> ";
                    btczp.btcsell = sell;
                    btczp.btcbuy = buy;

                });

                //--------------------btcbitbns-------------------------------

                $.ajax({
                    type: "GET",

                    url: "http://45.113.136.146:33025/messenger/webapi/exchange/bitbins"
                }).done(function (data) {

                    var data1 = JSON.parse(data);
                    var str = JSON.stringify(data1[0]['BTC']);
                    var ob1 = JSON.parse(str);
                    var ask = ob1['sellPrice'];
                    var bid = ob1['buyPrice'];
                    var ltp = ob1['lastTradePrice'];
                    btcbit = {};
                    btcbit.btcbuyPrice = bid;
                    btcbit.btcsellPrice = ask;
                    btcbit.btclastTradePrice = ltp;
                    btcbit.btcbuyPrice = convert(btcbit.btcbuyPrice);
                    btcbit.btcsellPrice = convert(btcbit.btcsellPrice);
                    btcbit.btclastTradePrice = convert(btcbit.btclastTradePrice);
                    var buy = "<a  target='blank' href='https://bitbns.com/trade/#/dashboard/xrp' >Buy</a> ";
                    var sell = "<a  target='blank' href='https://bitbns.com/trade/#/dashboard/xrp' >Sell</a> ";
                    btcbit.btcsell = sell;
                    btcbit.btcbuy = buy;
                    btcbit.btcexchange = 'Bitbins';

                    
                    var xrpstr = JSON.stringify(data1[1]['XRP']);
                    var xrpob1 = JSON.parse(xrpstr);
                    var xrpask = xrpob1['sellPrice'];
                    var xrpbid = xrpob1['buyPrice'];
                    var xrpltp = xrpob1['lastTradePrice'];
                    xrpbit = {};
                    xrpbit.xrpbuyPrice = xrpbid;
                    xrpbit.xrpsellPrice = xrpask;
                    xrpbit.xrplastTradePrice = xrpltp;              
                    var xrpbuy = "<a  target='blank' href='https://bitbns.com/trade/#/dashboard/xrp' >Buy</a> ";
                    var xrpsell = "<a  target='blank' href='https://bitbns.com/trade/#/dashboard/xrp' >Sell</a> ";
                    xrpbit.xrpsell = sell;
                    xrpbit.xrpbuy = buy;
                    xrpbit.xrpexchange = 'Bitbins';





                });
                //--------------------btcbitbns-------------------------------




                //--------------------btcCoinDelta----------------------------


                $.ajax({
                    url: 'https://coindelta.com/api/v1/public/getticker/',
                    type: 'get',

                    dataType: 'json',
                    contentType: "application/json",
                    success: function (data) {

                        var str = JSON.stringify(data[0]);


                        var ob1 = JSON.parse(str);

                        var ask = ob1['Ask'];

                        var bid = ob1['Bid'];
                        var ltp = ob1['Last'];
                        btccd = {};
                        btccd.btcbuyPrice = bid;
                        btccd.btcsellPrice = ask;
                        btccd.btclastTradePrice = ltp;
                        btccd.btcbuyPrice = convert(btccd.btcbuyPrice);
                        btccd.btcsellPrice = convert(btccd.btcsellPrice);
                        btccd.btclastTradePrice = convert(btccd.btclastTradePrice);
                        var buy = "<a  target='blank' href='https://bitbns.com/trade/#/dashboard/xrp' >Buy</a> ";
                        var sell = "<a  target='blank' href='https://bitbns.com/trade/#/dashboard/xrp' >Sell</a> ";
                        btccd.btcsell = sell;
                        btccd.btcbuy = buy;
                        btccd.btcexchange = 'Coindelta';
                        self.obj = ko.observableArray([btcbit, btccd, btczp, btcko]);
                        self.btcArray(self.obj());

                        var xrpstr = JSON.stringify(data[9]);
                        var xrpob1 = JSON.parse(xrpstr);
                        var xrpask = xrpob1['Ask'];
                        var xrpbid = xrpob1['Bid'];
                        var xrpltp = xrpob1['Last'];
                        xrpcd = {};
                        xrpcd.xrpbuyPrice = xrpbid;
                        xrpcd.xrpsellPrice =xrpask;
                        xrpcd.xrplastTradePrice =xrpltp;                       
                        var xrpbuy = "<a  target='blank' href='https://bitbns.com/trade/#/dashboard/xrp' >Buy</a> ";
                        var xrpsell = "<a  target='blank' href='https://bitbns.com/trade/#/dashboard/xrp' >Sell</a> ";
                        xrpcd.xrpsell = xrpsell;
                        xrpcd.xrpbuy = xrpbuy;
                        xrpcd.xrpexchange = 'Coindelta';
                      
                        self.xrpobj = ko.observableArray([xrpbit, xrpko, xrpcd]);                      
                        self.xrpArray(self.xrpobj());
                    }



                });

            }



            if (count > 0 && count % 20 != 0) {

                if (count > 30) {

                    function wait(waitsecs) {
                        setTimeout(donothing, 5000);
                    }

                    function donothing() {

                    }

                }
                //-----------------Bitcoin-------------------------
                $.ajax({
                    type: "GET",

                    url: "http://45.113.136.146:33025/messenger/webapi/exchange/zebpay"
                }).done(function (data) {
                    var abc = JSON.parse(data);

                    btczp = {};
                    btczp.btclastTradePrice = '-';
                    btczp.btcbuyPrice = abc['sell'];
                    btczp.btcsellPrice = abc['buy'];
                    btczp.btcbuyPrice = convert(btczp.btcbuyPrice);
                    btczp.btcsellPrice = convert(btczp.btcsellPrice);

                    btczp.btcexchange = 'Zebpay';
                    var buy = "<a  target='blank' href='https://bitbns.com/trade/#/dashboard/xrp' >Buy</a> ";

                    var sell = "<a  target='blank' href='https://bitbns.com/trade/#/dashboard/xrp' >Sell</a> ";
                    btczp.btcsell = sell;
                    btczp.btcbuy = buy;


                });

                //--------------------btcbitbns-------------------------------

                $.ajax({
                    type: "GET",

                    url: "http://45.113.136.146:33025/messenger/webapi/exchange/bitbins"
                }).done(function (data) {

                    var data1 = JSON.parse(data);

                    var str = JSON.stringify(data1[0]['BTC']);
                    var ob1 = JSON.parse(str);
                    var ask = ob1['sellPrice'];
                    var bid = ob1['buyPrice'];
                    var ltp = ob1['lastTradePrice'];
                    btcbit = {};
                    btcbit.btcbuyPrice = bid;
                    btcbit.btcsellPrice = ask;
                    btcbit.btclastTradePrice = ltp;
                    btcbit.btcbuyPrice = convert(btcbit.btcbuyPrice);
                    btcbit.btcsellPrice = convert(btcbit.btcsellPrice);
                    btcbit.btclastTradePrice = convert(btcbit.btclastTradePrice);
                    var buy = "<a  target='blank' href='https://bitbns.com/trade/#/dashboard/xrp' >Buy</a> ";
                    var sell = "<a  target='blank' href='https://bitbns.com/trade/#/dashboard/xrp' >Sell</a> ";
                    btcbit.btcsell = sell;
                    btcbit.btcbuy = buy;
                    btcbit.btcexchange = 'Bitbins';
                    
                    
                    var xrpstr = JSON.stringify(data1[1]['XRP']);
                    var xrpob1 = JSON.parse(xrpstr);
                    var xrpask = xrpob1['sellPrice'];
                    var xrpbid = xrpob1['buyPrice'];
                    var xrpltp = xrpob1['lastTradePrice'];
                    xrpbit = {};
                    xrpbit.xrpbuyPrice = xrpbid;
                    xrpbit.xrpsellPrice = xrpask;
                    xrpbit.xrplastTradePrice = xrpltp;              
                    var xrpbuy = "<a  target='blank' href='https://bitbns.com/trade/#/dashboard/xrp' >Buy</a> ";
                    var xrpsell = "<a  target='blank' href='https://bitbns.com/trade/#/dashboard/xrp' >Sell</a> ";
                    xrpbit.xrpsell = xrpsell;
                    xrpbit.xrpbuy = xrpbuy;
                    xrpbit.xrpexchange = 'Bitbins';

                });
                //--------------------btcbitbns-------------------------------

                //--------------------btcCoinDelta----------------------------


                $.ajax({
                    url: 'https://coindelta.com/api/v1/public/getticker/',
                    type: 'get',
                    dataType: 'json',

                    contentType: "application/json",
                    success: function (data) {

                        var str = JSON.stringify(data[0]);
                        var ob1 = JSON.parse(str);
                        var ask = ob1['Ask'];
                        var bid = ob1['Bid'];
                        var ltp = ob1['Last'];
                        btccd = {};
                        btccd.btcbuyPrice = bid;
                        btccd.btcsellPrice = ask;
                        btccd.btclastTradePrice = ltp;
                        btccd.btcbuyPrice = convert(btccd.btcbuyPrice);
                        btccd.btcsellPrice = convert(btccd.btcsellPrice);
                        btccd.btclastTradePrice = convert(btccd.btclastTradePrice);
                        var buy = "<a  target='blank' href='https://bitbns.com/trade/#/dashboard/xrp' >Buy</a> ";
                        var sell = "<a  target='blank' href='https://bitbns.com/trade/#/dashboard/xrp' >Sell</a> ";
                        btccd.btcsell = sell;
                        btccd.btcbuy = buy;
                        btccd.btcexchange = 'Coindelta';
                        self.obj = ko.observableArray([btcbit, btccd, btczp, btcko]);
                        self.btcArray(self.obj());
                        
                        
                        var xrpstr = JSON.stringify(data[9]);
                        var xrpob1 = JSON.parse(xrpstr);
                        var xrpask = xrpob1['Ask'];
                        var xrpbid = xrpob1['Bid'];
                        var xrpltp = xrpob1['Last'];
                        xrpcd = {};
                        xrpcd.xrpbuyPrice = xrpbid;
                        xrpcd.xrpsellPrice =xrpask;
                        xrpcd.xrplastTradePrice =xrpltp;                       
                        var xrpbuy = "<a  target='blank' href='https://bitbns.com/trade/#/dashboard/xrp' >Buy</a> ";
                        var xrpsell = "<a  target='blank' href='https://bitbns.com/trade/#/dashboard/xrp' >Sell</a> ";
                        xrpcd.xrpsell = xrpsell;
                        xrpcd.xrpbuy = xrpbuy;
                        xrpcd.xrpexchange = 'Coindelta';
                        
                        self.xrpobj = ko.observableArray([xrpbit,xrpko, xrpcd]); 
                        
                        
                        self.xrpArray(self.xrpobj());
                    
                        
                    }



                });


                //-----------------------btcCoinDelta------------------------

            }

            count = count + 1;

        }
        setInterval(bind1, 1000);

    }

    return aboutContentViewModel;
});
