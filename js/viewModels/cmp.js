/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * cmp module
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojtable', 'ojs/ojarraytabledatasource', 'ojs/ojbutton', 'ojs/ojcollapsible'
], function (oj, ko) {
    /**
     * The view model for the main content view template
     */
    function cmpContentViewModel() {
        var self = this;
        var btc=[{
        "id": "bitcoin", 
        "name": "Bitcoin", 
        "symbol": "BTC", 
        "rank": "1", 
        "price_usd": "9828.85", 
        "price_btc": "1.0", 
        "24h_volume_usd": "8067430000.0", 
        "market_cap_usd": "165792304636", 
        "available_supply": "16867925.0", 
        "total_supply": "16867925.0", 
        "max_supply": "21000000.0", 
        "percent_change_1h": "-0.97", 
        "percent_change_24h": "1.33", 
        "percent_change_7d": "19.27", 
        "last_updated": "1518780566", 
        "price_inr": "627522.92825", 
        "24h_volume_inr": "515065068350.0000000000", 
        "market_cap_inr": "10585009689501"
    }];
        self.btcArray = ko.observableArray(btc);
        self.btcdataprovider = new oj.ArrayTableDataSource(self.btcArray);
    }
    
    return cmpContentViewModel;
});
