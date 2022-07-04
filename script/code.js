const app = Vue.createApp({
    template: ` <form action="">
    <br>
    <div>
    <input type="text" placeholder="Enter name" v-model="name" id="name">
    </div>
    <br>
    <div>
    <input type="text" placeholder="Enter age" v-model="age" id="surname">
    </div>
    <button type="button" v-on:click="functions1">Submit</button>
    <p  id="Output"></p>
</form>`,

    data: function () {
        return {
            name:'',
            age:'',
            isVisible: true
        }
    },
methods:{ 
    functions1(){
        if(this.age>17){
        document.getElementById('Output').innerHTML=`${this.name} ${this.age}`;
        }
        else{
            document.getElementById('Output').innerHTML="Too young";
        }
}
}});

app.mount('#app');