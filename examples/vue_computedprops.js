var vm = new Vue({
    el: '#computed_props',
    data: {
        firstname : "Valerie",
        lastname : "Foster",
        birthyear : "1994"
    },
    computed :{
        getfullname : function(){
            return this.firstname + " " + this.lastname;
        }
    }
})