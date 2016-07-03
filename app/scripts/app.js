Vue.component('demo-grid',{
    template: '#grid-template',
    props: {
        data:Array,
        columns :Array,
        filterKey : String,
    },
    data :function(){
        var sortedOrders = {};
        this.columns.forEach(function(key){
            sortedOrders[key]=1;
        });
        return {
            sortKey: '',
            sortedOrders :sortedOrders
            
        };
    },
    methods: {
        sortBy : function(key){
            this.sortKey=key;
            this.sortedOrders[key]=this.sortedOrders[key]*-1;
        }
    }
})


var demo = new Vue({
    el:"#demo",
    data: {
        searchQuery: "",
        gridColumns:["name","sex","age"],
        gridData :[
            {name:"abc",sex:"M",age:23},
            {name:"def",sex:"F",age:34},
            {name:"ghi",sex:"M",age:56},
            {name:"nie",sex:"B",age:87}
        ]
    }
})