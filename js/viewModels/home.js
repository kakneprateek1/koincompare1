/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * home module
 */
define(['ojs/ojcore', 'knockout'
], function (oj, ko) {
    /**
     * The view model for the main content view template
     */
    function homeContentViewModel() {
        var self = this;
        var xrparray = [];

        function min(a) {
            var minimum=1000000;
            for (var i = 0; i < a.length; i++) {
                if(a[i]<minimum){
                    minimum=a[i];
                }
            }
            return minimum;
        }
        xrparray[0]=20;
        xrparray[1]=30;
        xrparray[2]=10;
        var minimum = min(xrparray);
        console.log(minimum);
    }

    return homeContentViewModel;
});
