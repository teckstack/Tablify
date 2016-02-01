;(function() {
  $.fn.tablify = function(options) {

    var tableNo = 1, // incremental variable for unique class name on each table
        el = $(this);    
    
    return this.each(function() {
        
        // default settings
        var settings = $.extend({
            tableClass: "tablify",
            tableCounts: "table_", //unique class for table
            trFirstClass: "first-tr",
            trLastClass: "last-tr",
            onlyNodeClass: "only-node",
            cellFirstClass: "first-cell",
            cellLastClass: "last-cell",
            oddClass: "odd",
            evenClass: "even"
        }, options);
        
        // el = table element (i.e: $("table").tablify();)
        var el = $(this);
        
        // default class to Table
        el.addClass(settings.tableClass);

        // unique class to Table
        el.addClass(settings.tableCounts + tableNo++);

        // adding class to very first row of the table
        el.find("tr:first-child").addClass(settings.trFirstClass);
        el.find("tr:last-child").addClass(settings.trLastClass);

        // odd - even rows
        el.find("thead tr:odd, tbody tr:odd").addClass(settings.evenClass);
        el.find("thead tr:even, tbody tr:even").addClass(settings.oddClass);        

        // first col
        el.find("th:first-child, td:first-child").addClass(settings.cellFirstClass);
        el.find("th:last-child, td:last-child").addClass(settings.cellLastClass);
        
        // removes first and last element specific classes if there is only a single element available at the same level
        onlyClass();
        
        function onlyClass(nodes){
            nodes       = el.find('tr:only-of-type, th:only-of-type, td:only-of-type');
            if(nodes){
                nodes.addClass(settings.onlyNodeClass)
                    .removeClass(settings.cellFirstClass)
                    .removeClass(settings.cellLastClass)
                    .removeClass(settings.trFirstClass)
                    .removeClass(settings.trLastClass);
            }
        }
    });
  }
})(jQuery);