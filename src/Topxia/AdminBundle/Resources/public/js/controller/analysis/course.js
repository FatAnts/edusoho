define(function(require, exports, module) {
    var Morris=require("morris");
    require("jquery.bootstrap-datetimepicker");
    var Validator = require('bootstrap.validator');
    require('common/validator-rules').inject(Validator);
    var now = new Date();
    exports.run = function() {

        if($('#data').length > 0){
                    var data = eval ("(" + $('#data').attr("value") + ")");

                    Morris.Line({
                      element: 'line-data',
                      data: data,
                      xkey: 'date',
                      ykeys: ['count',],
                      labels: ['新增课程数'],
                      xLabels:"day",
                    });
        }


         $("[name=endTime]").datetimepicker({
            language: 'zh-CN',
            autoclose: true,
            format: 'yyyy-mm-dd',
            minView: 'month'
        });
        $('[name=endTime]').datetimepicker('setEndDate', now);
        $("[name=startTime]").datetimepicker({
            language: 'zh-CN',
            autoclose: true,
            format: 'yyyy-mm-dd',
            minView: 'month'
        });
        $('[name=startTime]').datetimepicker('setEndDate', now);


        var validator = new Validator({          
            element: '#operation-form'});

        validator.addItem({
            element: '[name=startTime]',
            required: true
        });

        validator.addItem({
            element: '[name=endTime]',
            required: true
        });
    };

});